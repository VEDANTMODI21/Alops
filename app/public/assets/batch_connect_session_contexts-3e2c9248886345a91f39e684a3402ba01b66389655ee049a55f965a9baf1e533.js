// app/javascript/alert.js
function OODAlert(message) {
  const div = alertDiv(message);
  const main = document.getElementById("main_container");
  main.prepend(div);
  div.scrollIntoView({ behavior: "smooth" });
}
function alertDiv(message) {
  const span = document.createElement("span");
  span.innerText = message;
  const div = document.createElement("div");
  div.classList.add("alert", "alert-danger", "alert-dismissible");
  div.setAttribute("role", "alert");
  div.appendChild(span);
  div.appendChild(closeButton());
  return div;
}
function closeButton() {
  const button = document.createElement("button");
  button.classList.add("btn-close");
  button.dataset.bsDismiss = "alert";
  const span = document.createElement("span");
  span.classList.add("sr-only");
  span.innerText = "Close";
  button.appendChild(span);
  return button;
}

// app/javascript/config.js
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function isBCDynamicJSEnabled() {
  const cfgData = configData();
  return cfgData["bcDynamicJs"] == "true";
}

// app/javascript/utils.js
function hide(target) {
  const ele = typeof target === "string" ? document.getElementById(target) : target;
  if (ele instanceof HTMLElement) {
    ele.classList.add("d-none");
  }
}
function show(target) {
  const ele = typeof target === "string" ? document.getElementById(target) : target;
  if (ele instanceof HTMLElement) {
    ele.classList.remove("d-none");
  }
}

// app/javascript/path_selector/path_selector_data_table.js
var PathSelectorTable = class {
  _table = null;
  // input data that should be passed into the constructor
  tableId = void 0;
  filesPath = void 0;
  breadcrumbId = void 0;
  initialDirectory = void 0;
  selectButtonId = void 0;
  inputFieldId = void 0;
  modalId = void 0;
  showHidden = void 0;
  showFiles = void 0;
  filePattern = void 0;
  constructor(options) {
    this.tableId = options.tableId;
    this.filesPath = options.filesPath;
    this.breadcrumbId = options.breadcrumbId;
    this.initialDirectory = options.initialDirectory;
    this.selectButtonId = options.selectButtonId;
    this.inputFieldId = options.inputFieldId;
    this.modalId = options.modalId;
    this.showHidden = options.showHidden === "true";
    this.showFiles = options.showFiles === "true";
    this.filePattern = options.filePattern;
    this.initDataTable();
    this.reloadTable(this.initialUrl());
    $(`#${this.tableId} tbody`).on("click", "tr", (event) => {
      this.clickRow(event);
    });
    $("#favorites").on("click", "li", (event) => {
      this.clickRow(event);
    });
    $(`#${this.breadcrumbId}`).on("click", "li", (event) => {
      this.clickBreadcrumb(event);
    });
    $(`#${this.selectButtonId}`).on("click", (event) => {
      this.selectPath(event);
    });
  }
  initDataTable() {
    this._table = $(`#${this.tableId}`).DataTable({
      autoWidth: false,
      language: {
        search: "Filter:"
      },
      order: [[0, "asc"], [1, "asc"]],
      rowId: "id",
      paging: false,
      scrollCollapse: true,
      select: {
        style: "os",
        className: "selected",
        toggleable: true,
        // don't trigger select checkbox column as select
        // if you need to omit more columns, use a "selectable" class on the columns you want to support selection
        selector: "td:not(:first-child)"
      },
      // https://datatables.net/reference/option/dom
      // dom: '', dataTables_info nowrap
      //
      // put breadcrumbs below filter!!!
      dom: "<'row'<'col-sm-12'f>><'row'<'col-sm-12'<'dt-status-bar'<'datatables-status float-end'><'transfers-status'>>>><'row'<'col-sm-12'tr>>",
      // normally this is <'row'<'col-sm-5'i><'col-sm-7'p>> but we disabled pagination so have info take whole row
      columns: [
        {
          data: "type",
          render: (data, _type, _row, _meta) => data == "d" ? '<span title="directory" class="fa fa-folder gold"><span class="sr-only">directory</span></span>' : '<span title="file" class="fa fa-file black"><span class="sr-only">file</span></span>'
        },
        {
          name: "name",
          data: "name",
          className: "text-break",
          render: (data, _type, _row, _meta) => {
            const ele = document.createElement("span");
            ele.textContent = data;
            return ele.outerHTML;
          }
        }
      ],
      createdRow: function(row, data, _dataIndex) {
        row.classList.add("clickable");
        row.dataset["apiUrl"] = data.url;
        row.dataset["pathType"] = data.type;
      }
    });
  }
  async reloadTable(url) {
    try {
      $(this.tableWrapper()).hide();
      show(`${this.tableId}_spinner`);
      const response = await fetch(url, { headers: { "Accept": "application/json" }, cache: "no-store" });
      const data = await this.dataFromJsonResponse(response);
      $(`#${this.breadcrumbId}`).html(data.path_selector_breadcrumbs_html);
      this._table.clear();
      this._table.rows.add(data.files);
      this.setLastVisited(data.path);
      this._table.draw();
      this.resetTable();
    } catch (err) {
      this.resetTable();
      if (err.message.match("Permission denied")) {
        $("#forbidden-warning").removeClass("d-none");
        $("#forbidden-warning").trigger("focus");
      }
      console.log(err);
    }
  }
  resetTable() {
    hide(`${this.tableId}_spinner`);
    $(this.tableWrapper()).show();
    $("#forbidden-warning").addClass("d-none");
  }
  dataFromJsonResponse(response) {
    return new Promise((resolve, reject) => {
      Promise.resolve(response).then((response2) => response2.ok ? Promise.resolve(response2) : Promise.reject(new Error(response2.statusText))).then((response2) => response2.json()).then((data) => this.filterFileResponse(data)).then((data) => data.error_message ? Promise.reject(new Error(data.error_message)) : resolve(data)).catch((e) => reject(e));
    });
  }
  clickRow(event) {
    const row = $(event.target).closest("tr").get(0) || event.target;
    const url = row.dataset["apiUrl"];
    const pathType = row.dataset["pathType"];
    this.activateFavorite(row);
    if (pathType == "f") {
      const path = url.replace(this.filesPath, "").replaceAll("//", "/");
      this.setLastVisited(path, pathType);
    } else {
      this.reloadTable(url);
    }
  }
  activateFavorite(currentlyClicked) {
    $("li.active").each((_idx, ele) => {
      ele.classList.remove("active");
    });
    if (currentlyClicked.tagName == "LI") {
      currentlyClicked.classList.add("active");
    }
  }
  clickBreadcrumb(event) {
    const path = event.target.id;
    this.activateFavorite(event.target);
    this.reloadTable(path);
  }
  selectPath(_event) {
    const last = this.getLastVisited();
    const inputField = document.getElementById(this.inputFieldId);
    inputField.value = last.path;
    $(`#${this.modalId}`).modal("hide");
  }
  storageKey() {
    const underscore_path = window.location.pathname.replaceAll("/", "_");
    return `${this.tableId}${underscore_path}_last_visited`;
  }
  tableWrapper() {
    return `#${this.tableId}_wrapper`;
  }
  // note that this is storing the file system path, not the path of the URL 
  // i.e., '/home/annie' not '/pun/sys/dashboard/files/fs/home/annie'
  getLastVisited() {
    const lastVisited = localStorage.getItem(this.storageKey());
    if (lastVisited === null) {
      return { path: this.initialDirectory, type: "d" };
    } else {
      return JSON.parse(lastVisited);
    }
  }
  setLastVisited(path, pathType = "d") {
    const item = { path: decodeURI(path), type: pathType };
    if (path) {
      localStorage.setItem(this.storageKey(), JSON.stringify(item));
    }
  }
  initialUrl() {
    const last = this.getLastVisited();
    let path = void 0;
    if (last.type == "f") {
      path = last.path.split("/").slice(0, -1).join("/");
    } else {
      path = last.path;
    }
    if (path.startsWith("/")) {
      return `${this.filesPath}${path}`;
    } else {
      return `${this.filesPath}/${path}`;
    }
  }
  // filter the response from the files API to remove things like hidden files/directories
  filterFileResponse(data) {
    let regex = void 0;
    try {
      if (this.filePattern !== void 0) {
        regex = RegExp(this.filePattern);
      }
    } catch {
      OODAlert("The regular expression provided for this path selector did not compile");
    }
    const filteredFiles = data.files.filter((file) => {
      const isHidden = file.name.startsWith(".");
      const isFile = file.type == "f";
      if (isHidden && isFile) {
        return this.showHidden && this.showFiles;
      } else if (isHidden) {
        return this.showHidden;
      } else if (isFile) {
        return this.filteredByFilename(file, regex);
      } else {
        return true;
      }
    });
    data.files = filteredFiles;
    return data;
  }
  filteredByFilename(file, regex) {
    if (regex !== void 0) {
      if (file.name.match(regex)) {
        return this.showFiles;
      } else {
        return false;
      }
    } else {
      return this.showFiles;
    }
  }
};

// app/javascript/path_selector/path_selector.js
function attachPathSelectors() {
  $("[data-path-selector='true']").each((_idx, element) => {
    const query = `#${pathSelectorId(element.id)}`;
    const modal = $(query).get(0);
    makeTable(modal);
  });
}
function pathSelectorId(id) {
  return `${id}_path_selector`;
}
function makeTable(element) {
  const options = getPathSelectorOptions(element);
  new PathSelectorTable(options);
}
function getPathSelectorOptions(element) {
  const options = {};
  options.filesPath = element.dataset["filesPath"];
  options.initialDirectory = element.dataset["initialDirectory"];
  options.tableId = element.dataset["tableId"];
  options.breadcrumbId = element.dataset["breadcrumbId"];
  options.selectButtonId = element.dataset["selectButtonId"];
  options.inputFieldId = element.dataset["inputFieldId"];
  options.showFiles = element.dataset["showFiles"];
  options.showHidden = element.dataset["showHidden"];
  options.filePattern = element.dataset["filePattern"];
  options.modalId = element.id;
  return options;
}

// app/javascript/prefill_templates/prefill_templates.js
var bcPrefix = "batch_connect_session_context";
var templateSelectId = "batch_connect_session_prefill_template";
function prefillTemplatesHandler() {
  const picker = $(`#${templateSelectId}`);
  if (picker.length == 0) {
    return;
  }
  picker.on("change", function() {
    const templateOption = $(`#${templateSelectId} option:selected`);
    if (!templateOption.val()) {
      return;
    }
    let json;
    try {
      json = JSON.parse(templateOption.val());
    } catch (error) {
      $("#batch_connect_session_template_form_error_modal").text(error.message);
      $("#batch_connect_session_template_form_error_modal_body").modal("show");
      return;
    }
    let errorMsg = "";
    for (const [key, value] of Object.entries(json)) {
      let element = $(`#${bcPrefix}_${key}`);
      if (element.length == 0) {
        if (/^\d+$/.test(value)) {
          element = $(`#${bcPrefix}_${key}_${value}`);
        } else {
          continue;
        }
      }
      if (element.is("select") && value !== "") {
        if (element.find(`option[value="${value}"]`).length == 0) {
          errorMsg += `Invalid value: "${value}" for the field "${key}".<br>`;
          continue;
        }
      }
      switch (element.attr("type")) {
        case "checkbox":
          value === "1" ? element.prop("checked", true) : element.prop("checked", false);
          break;
        case "radio":
          element.filter(`[value="${value}"]`).prop("checked", true);
        default:
          element.val(value);
          break;
      }
      element.trigger("change");
    }
    if (errorMsg) {
      $("#batch_connect_session_template_form_error_modal_body").html(errorMsg);
      $("#batch_connect_session_template_form_error_modal").modal("show");
    }
  });
}

// app/javascript/prefill_templates/prefill_submit.js
var selectorID = "modal_input_template_name";
var newNameID = "modal_input_template_new_name";
function prefillSubmitHandler() {
  const chooseTemplateName = $("#chooseTemplateName");
  if (chooseTemplateName.length === 0) {
    return;
  }
  const chooseTemplateNameError = $("#batch_connect_session_template_name_error_modal");
  const templateName = $("#batch_connect_session_template_name");
  const saveTemplate = $("#batch_connect_session_save_template");
  const saveSubmit = $("#batch_connect_session_save_template_submit");
  $(`#${selectorID}`).on("change", function() {
    const newName = $(`#${newNameID}`);
    if ($(this).val() === "") {
      newName.show();
    } else {
      newName.hide();
    }
  });
  $("#batch_connect_session_template_choose_name_button").on("click", function() {
    const name = $(`#${selectorID}`).val() || $(`#${newNameID}`).val();
    if (name === "") {
      chooseTemplateNameError.modal("show");
      return;
    }
    chooseTemplateNameError.modal("hide");
    templateName.val(name);
    chooseTemplateName.modal("hide");
    saveSubmit.prop("disabled", false);
  });
  saveTemplate.on("change", function() {
    if ($(this).is(":checked")) {
      chooseTemplateName.modal("show");
    } else {
      templateName.val("");
      $(`#${selectorID}`).val("");
      const newName = $(`#${newNameID}`);
      newName.val("");
      newName.show();
      saveSubmit.prop("disabled", true);
    }
  });
  chooseTemplateName.on("hidden.bs.modal", function() {
    if (templateName.val() === "") {
      saveTemplate.prop("checked", false);
      saveTemplate.trigger("change");
    }
  });
}

// app/javascript/dynamic_forms.js
var idPrefix = void 0;
var shortNameRex = void 0;
var formTokens = [];
var optionForHandlerCache = {};
var exclusiveOptionForHandlerCache = {};
var minMaxHandlerCache = [];
var setHandlerCache = [];
var hideHandlerCache = {};
var labelHandlerCache = {};
var minMaxLookup = {};
var setValueLookup = {};
var hideLookup = {};
var labelLookup = {};
var mcRex = /[-_]([a-z])|([_-][0-9])|([\/])/g;
var initializing = true;
function idWithPrefix(name) {
  return `${idPrefix}_${name.toLowerCase()}`;
}
function shortId(elementId) {
  const match = elementId.match(shortNameRex);
  if (match.length >= 1) {
    return match[1];
  } else {
    return "";
  }
  ;
}
function mountainCaseWords(str) {
  const lower = str.toLowerCase();
  const first = lower.charAt(0).toUpperCase();
  const rest = lower.slice(1).replace(mcRex, function(_all, letter, prefixedNumber, slash) {
    if (letter) {
      return letter.toUpperCase();
    } else if (prefixedNumber) {
      return prefixedNumber.replace("_", "-");
    } else if (slash) {
      return "_";
    }
  });
  return `${first}${rest}`;
}
function snakeCaseWords(str) {
  if (str === void 0) return void 0;
  const rex = /([A-Z]{1}[a-z]*[0-9]*)|([^-_]+)/g;
  const words = str.match(rex);
  return words.filter((word) => word != "").map((word) => word.toLowerCase()).join("_");
}
function memorizeElements(elements2) {
  elements2.each((_i, ele) => {
    formTokens.push(mountainCaseWords(shortId(ele["id"])));
  });
}
function makeChangeHandlers(prefix) {
  idPrefix = prefix;
  shortNameRex = new RegExp(`${idPrefix}_([\\w\\-]+)`);
  const allElements = $(`[id^=${idPrefix}]`);
  memorizeElements(allElements);
  allElements.each((_i, element) => {
    if (element["type"] == "select-one") {
      let optionSearch = `#${element["id"]} option`;
      let options = $(optionSearch);
      options.each((_i2, opt) => {
        let data = $(`${optionSearch}[value='${opt.value}']`).data();
        let keys = Object.keys(data);
        if (keys.length !== 0) {
          keys.forEach((key) => {
            if (key.startsWith("optionFor")) {
              let token = key.replace(/^optionFor/, "");
              addOptionForHandler(idFromToken(token), element["id"]);
            } else if (key.startsWith("exclusiveOptionFor")) {
              let token = key.replace(/^exclusiveOptionFor/, "");
              addExclusiveOptionForHandler(idFromToken(token), element["id"]);
            } else if (key.startsWith("max") || key.startsWith("min")) {
              addMinMaxForHandler(element["id"], opt.value, key, data[key]);
            } else if (key.startsWith("set")) {
              addSetHandler(element["id"], opt.value, key, data[key]);
            } else if (key.startsWith("hide")) {
              addHideHandler(element["id"], opt.value, key, data[key]);
            } else if (key.startsWith("label")) {
              addLabelHandler(element["id"], opt.value, key, data[key]);
            }
          });
        }
      });
    } else if (element["type"] == "checkbox") {
      let data = $(element).data();
      let keys = Object.keys(data);
      if (keys.length !== 0) {
        keys.forEach((key) => {
          if (key.startsWith("hide")) {
            let tokens = parseCheckedWhen(key);
            if (tokens !== void 0) {
              addHideHandler(element["id"], tokens["value"], tokens["key"], data[key]);
            }
          }
        });
      }
    }
  });
  initializing = false;
}
function addHideHandler(optionId, option, key, configValue) {
  const changeId = idFromToken(key.replace(/^hide/, ""));
  if (hideLookup[optionId] === void 0) hideLookup[optionId] = new Table(changeId, void 0);
  const table = hideLookup[optionId];
  table.put(changeId, option, configValue);
  if (hideHandlerCache[optionId] === void 0) hideHandlerCache[optionId] = [];
  if (!hideHandlerCache[optionId].includes(changeId)) {
    const changeElement = $(`#${optionId}`);
    changeElement.on("change", (event) => {
      updateVisibility(event, changeId);
    });
    hideHandlerCache[optionId].push(changeId);
  }
  updateVisibility({ target: document.querySelector(`#${optionId}`) }, changeId);
}
function newLabel(changeElement, key) {
  const selectedOptionLabelIndex = changeElement[0].selectedIndex;
  const selectedOptionLabel = changeElement[0].options[selectedOptionLabelIndex];
  return selectedOptionLabel.dataset[key];
}
function updateLabel(changeId, changeElement, key) {
  $(`label[for="${changeId}"]`)[0].innerHTML = newLabel(changeElement, key);
}
function addLabelHandler(optionId, option, key, configValue) {
  const changeId = idFromToken(key.replace(/^label/, ""));
  const changeElement = $(`#${optionId}`);
  if (labelLookup[optionId] === void 0) labelLookup[optionId] = new Table(changeId, void 0);
  const table = labelLookup[optionId];
  table.put(changeId, option, configValue);
  if (labelHandlerCache[optionId] === void 0) labelHandlerCache[optionId] = [];
  if (!labelHandlerCache[optionId].includes(changeId)) {
    changeElement.on("change", (event) => {
      updateLabel(changeId, changeElement, key);
    });
  }
  ;
  updateLabel(changeId, changeElement, key);
}
function addMinMaxForHandler(subjectId, option, key, configValue) {
  subjectId = String(subjectId || "");
  configValue = parseInt(configValue);
  const configObj = parseMinMaxFor(key);
  const objectId = configObj["subjectId"];
  if (objectId === void 0) return;
  const secondDimId = configObj["predicateId"];
  const secondDimValue = configObj["predicateValue"];
  const lookupKey = `${subjectId}_${objectId}`;
  if (minMaxLookup[lookupKey] === void 0) minMaxLookup[lookupKey] = new Table(subjectId, secondDimId);
  const table = minMaxLookup[lookupKey];
  table.put(option, secondDimValue, { [minOrMax(key)]: configValue });
  let cacheKey = `${objectId}_${subjectId}_${secondDimId}`;
  if (!minMaxHandlerCache.includes(cacheKey)) {
    const changeElement = $(`#${subjectId}`);
    changeElement.on("change", (event) => {
      toggleMinMax(event, objectId, secondDimId);
    });
    minMaxHandlerCache.push(cacheKey);
  }
  cacheKey = `${objectId}_${secondDimId}_${subjectId}`;
  if (secondDimId !== void 0 && !minMaxHandlerCache.includes(cacheKey)) {
    const secondEle = $(`#${secondDimId}`);
    secondEle.on("change", (event) => {
      toggleMinMax(event, objectId, subjectId);
    });
    minMaxHandlerCache.push(cacheKey);
  }
  toggleMinMax({ target: document.querySelector(`#${subjectId}`) }, objectId, secondDimId);
}
function addSetHandler(optionId, option, key, configValue) {
  const k = key.replace(/^set/, "");
  const id = String(idFromToken(k));
  if (id === "undefined") return;
  let cacheKey = `${id}_${optionId}`;
  if (setValueLookup[cacheKey] === void 0) setValueLookup[cacheKey] = new Table(optionId, void 0);
  const table = setValueLookup[cacheKey];
  table.put(option, void 0, configValue);
  if (!setHandlerCache.includes(cacheKey)) {
    const changeElement = $(`#${optionId}`);
    changeElement.on("change", (event) => {
      setValue(event, id);
    });
    setHandlerCache.push(cacheKey);
  }
  setValue({ target: document.querySelector(`#${optionId}`) }, id);
}
function setValue(event, changeId) {
  const chosenVal = event.target.value;
  const cacheKey = `${changeId}_${event.target["id"]}`;
  const table = setValueLookup[cacheKey];
  if (table === void 0) return;
  const changeVal = table.get(chosenVal, void 0);
  if (changeVal !== void 0) {
    const element = document.getElementById(changeId);
    if (element["type"] == "checkbox") {
      setCheckboxValue(element, changeVal);
    } else {
      element.value = changeVal;
    }
  }
}
function setCheckboxValue(checkbox, value) {
  const positiveValue = checkbox.value;
  if (value == positiveValue) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}
var Table = class {
  constructor(x, y) {
    this.x = x;
    this.xIdxLookup = {};
    this.y = y;
    this.yIdxLookup = {};
    this.table = y === void 0 ? [] : [[]];
  }
  put(x, y, value) {
    if (!x) return;
    x = snakeCaseWords(x);
    y = snakeCaseWords(y);
    if (this.xIdxLookup[x] === void 0) this.xIdxLookup[x] = Object.keys(this.xIdxLookup).length;
    if (y && this.yIdxLookup[y] === void 0) this.yIdxLookup[y] = Object.keys(this.yIdxLookup).length;
    const xIdx = this.xIdxLookup[x];
    const yIdx = this.yIdxLookup[y];
    if (this.table[xIdx] === void 0) {
      this.table[xIdx] = y === void 0 ? void 0 : [];
    }
    if (yIdx === void 0) {
      if (this.table[xIdx] === void 0) {
        this.table[xIdx] = value;
      } else {
        const prev = this.table[xIdx];
        const newer = value;
        if (typeof newer == "string" && typeof prev == "string") {
          this.table[xIdx] = newer;
        } else {
          this.table[xIdx] = Object.assign(prev, newer);
        }
      }
    } else {
      if (this.table[xIdx][yIdx] === void 0) {
        this.table[xIdx][yIdx] = value;
      } else {
        const prev = this.table[xIdx][yIdx];
        const newer = value;
        if (typeof newer == "string" && typeof prev == "string") {
          this.table[xIdx][yIdx] = newer;
        } else {
          this.table[xIdx][yIdx] = Object.assign(prev, newer);
        }
      }
    }
  }
  get(x, y) {
    const xIdx = this.xIdxLookup[snakeCaseWords(x)];
    const yIdx = this.yIdxLookup[snakeCaseWords(y)];
    if (this.table[xIdx] === void 0) {
      return void 0;
    } else if (y === void 0) {
      return this.table[xIdx];
    } else {
      return this.table[xIdx][yIdx];
    }
  }
};
function updateVisibility(event, changeId) {
  const val = valueFromEvent(event);
  const id = event.target["id"];
  let changeElement = void 0;
  $(`#${changeId}`).parents().each(function(_i, parent) {
    var classListValues = parent.classList.values();
    for (const val2 of classListValues) {
      if (val2.match("mb-3")) {
        changeElement = $(parent);
      }
    }
  });
  if (changeElement === void 0 || changeElement.length <= 0) return;
  const hide2 = hideLookup[id].get(changeId, val);
  if (hide2 === false || hide2 === void 0 && !initializing) {
    changeElement.show();
  } else if (hide2 === true) {
    changeElement.hide();
  }
}
function valueFromEvent(event) {
  if (event.target["type"] == "checkbox") {
    return event.target.checked ? "checked" : "unchecked";
  } else {
    return event.target.value;
  }
}
function toggleMinMax(event, changeId, otherId) {
  let x = void 0, y = void 0;
  let lookupKey = `${event.target["id"]}_${changeId}`;
  if (minMaxLookup[lookupKey] === void 0) {
    lookupKey = `${otherId}_${changeId}`;
  }
  const table = minMaxLookup[lookupKey];
  if (event.target["id"] == table.x) {
    x = snakeCaseWords(event.target.value);
    y = snakeCaseWords($(`#${otherId}`).val());
  } else {
    y = snakeCaseWords(event.target.value);
    x = snakeCaseWords($(`#${otherId}`).val());
  }
  const changeElement = $(`#${changeId}`);
  const mm = table.get(x, y);
  const prev = {
    min: parseInt(changeElement.attr("min")),
    max: parseInt(changeElement.attr("max"))
  };
  ["max", "min"].forEach((dim) => {
    if (mm && mm[dim] !== void 0) {
      changeElement.attr(dim, mm[dim]);
    }
  });
  const val = clamp(parseInt(changeElement.val()), prev, mm);
  if (val !== void 0) {
    changeElement.attr("value", val);
    changeElement.val(val);
  }
}
function clamp(currentValue, previous, next) {
  if (next === void 0) {
    return void 0;
  } else if (currentValue === previous["min"]) {
    return next["min"];
  } else if (currentValue === previous["max"]) {
    return next["max"];
  } else if (currentValue <= next["min"]) {
    return next["min"];
  } else if (currentValue >= next["max"]) {
    return next["max"];
  } else {
    return void 0;
  }
}
function sharedOptionForHandler(causeId, targetId, optionForType) {
  const changeId = String(causeId || "");
  let handlerCache = null;
  if (optionForType == "optionFor") {
    if (optionForHandlerCache[causeId] == void 0) optionForHandlerCache[causeId] = [];
    handlerCache = optionForHandlerCache;
  } else if (optionForType == "exclusiveOptionFor") {
    if (exclusiveOptionForHandlerCache[causeId] == void 0) exclusiveOptionForHandlerCache[causeId] = [];
    handlerCache = exclusiveOptionForHandlerCache;
  }
  if (changeId.length == 0 || handlerCache[causeId].includes(targetId)) {
    return;
  }
  let causeElement = $(`#${causeId}`);
  if (targetId && causeElement) {
    handlerCache[causeId].push(targetId);
    causeElement.on("change", (event) => {
      if (optionForType == "exclusiveOptionFor") {
        toggleExclusiveOptionsFor(event, targetId);
      } else if (optionForType == "optionFor") {
        toggleOptionsFor(event, targetId);
      }
    });
    if (optionForType == "exclusiveOptionFor") {
      toggleExclusiveOptionsFor({ target: document.querySelector(`#${causeId}`) }, targetId);
    } else if (optionForType == "optionFor") {
      toggleOptionsFor({ target: document.querySelector(`#${causeId}`) }, targetId);
    }
  }
}
function addOptionForHandler(causeId, targetId) {
  sharedOptionForHandler(causeId, targetId, "optionFor");
}
function addExclusiveOptionForHandler(causeId, targetId) {
  sharedOptionForHandler(causeId, targetId, "exclusiveOptionFor");
}
function parseCheckedWhen(key) {
  const tokens = key.match(/^hide(\w+)When(\w+)$/);
  if (tokens !== void 0 && tokens.length && tokens.length == 3) {
    return {
      "key": tokens[1],
      "value": tokens[2].toLowerCase() == "checked" ? "checked" : "unchecked"
    };
  } else {
    return void 0;
  }
}
function parseMinMaxFor(key) {
  let k = void 0;
  let predicateId = void 0;
  let predicateValue = void 0;
  let subjectId = void 0;
  if (key.startsWith("min")) {
    k = key.replace(/^min/, "");
  } else if (key.startsWith("max")) {
    k = key.replace(/^max/, "");
  }
  const tokens = k.match(/^(\w+)For(\w+)$/);
  if (tokens == null) {
    subjectId = idFromToken(k);
  } else if (tokens.length == 3) {
    const subject = tokens[1];
    const predicateFull = tokens[2];
    subjectId = idFromToken(subject);
    const predicateTokens = predicateFull.split(/(?=[A-Z])/);
    if (predicateTokens && predicateTokens.length >= 2) {
      if (predicateTokens.length == 2) {
        predicateId = idFromToken(predicateTokens[0]);
        predicateValue = predicateTokens[1];
      } else {
        let tokenString = "";
        let done = false;
        predicateTokens.forEach((pt, idx) => {
          if (done) {
            return;
          }
          tokenString = `${tokenString}${pt}`;
          let tokenId = idFromToken(tokenString);
          if (tokenId !== void 0) {
            done = true;
            predicateId = tokenId;
            predicateValue = predicateTokens.slice(idx + 1).join("");
          }
        });
      }
    }
  }
  return {
    "subjectId": subjectId,
    "predicateId": predicateId,
    "predicateValue": snakeCaseWords(predicateValue)
  };
}
function minOrMax(key) {
  if (key.startsWith("min")) {
    return "min";
  } else if (key.startsWith("max")) {
    return "max";
  } else {
    return null;
  }
}
function idFromToken(str) {
  elements = formTokens.map((token) => {
    let match = str.match(`^${token}{1}`);
    if (match && match.length >= 1) {
      let ele = snakeCaseWords(match[0]);
      return idWithPrefix(ele);
    }
  }).filter((id) => {
    return id !== void 0;
  });
  if (elements.length == 0) {
    return void 0;
  } else if (elements.length == 1) {
    return elements[0];
  } else if (elements.length > 1) {
    const snake_case_str = snakeCaseWords(str);
    return elements.filter((element) => {
      return element.endsWith(snake_case_str);
    })[0];
  }
}
function sharedOptionForFromToken(str, optionForType) {
  return formTokens.map((token) => {
    let match = str.match(`^${optionForType}${token}`);
    if (match && match.length >= 1) {
      return token;
    }
  }).filter((id) => {
    return id !== void 0;
  })[0];
}
function optionForFromToken(str) {
  return sharedOptionForFromToken(str, "optionFor");
}
function exclusiveOptionForFromToken(str) {
  return sharedOptionForFromToken(str, "exclusiveOptionFor");
}
function sharedToggleOptionsFor(_event, elementId, contextStr) {
  const options = [...document.querySelectorAll(`#${elementId} option`)];
  let hideSelectedValue = void 0;
  options.forEach((option) => {
    let hide2 = false;
    for (let key of Object.keys(option.dataset)) {
      let optionFor = "";
      if (contextStr == "optionFor") {
        optionFor = optionForFromToken(key);
      } else if (contextStr == "exclusiveOptionFor") {
        optionFor = exclusiveOptionForFromToken(key);
      }
      let optionForId = idFromToken(key.replace(new RegExp(`^${contextStr}`), ""));
      if (!key.startsWith(contextStr) || optionForId === void 0) {
        continue;
      }
      let optionForValue = mountainCaseWords(document.getElementById(optionForId).value);
      if (optionForValue.match(/^\d/)) {
        optionForValue = `-${optionForValue}`;
      }
      if (contextStr == "optionFor") {
        hide2 = option.dataset[`optionFor${optionFor}${optionForValue}`] === "false";
      } else if (contextStr == "exclusiveOptionFor") {
        hide2 = !(option.dataset[`exclusiveOptionFor${optionFor}${optionForValue}`] === "true");
      }
      if (hide2) {
        break;
      }
    }
    ;
    if (hide2) {
      if (option.selected) {
        option.selected = false;
        hideSelectedValue = option.textContent;
      }
      option.style.display = "none";
      option.disabled = true;
    } else {
      option.style.display = "";
      option.disabled = false;
    }
  });
  if (hideSelectedValue !== void 0) {
    let others = [...document.querySelectorAll(`#${elementId} option[value='${hideSelectedValue}']`)];
    let newSelectedOption = void 0;
    if (others.length > 1) {
      others.forEach((ele) => {
        if (ele.style.display === "") {
          newSelectedOption = ele;
          return;
        }
      });
    }
    if (newSelectedOption === void 0) {
      others = document.querySelectorAll(`#${elementId} option`);
      others.forEach((ele) => {
        if (newSelectedOption === void 0 && ele.style.display === "") {
          newSelectedOption = ele;
        }
      });
    }
    if (newSelectedOption !== void 0) {
      newSelectedOption.selected = true;
    }
  }
  document.getElementById(elementId).dispatchEvent(new Event("change", { bubbles: true }));
}
function toggleOptionsFor(_event, elementId) {
  sharedToggleOptionsFor(_event, elementId, "optionFor");
}
function toggleExclusiveOptionsFor(_event, elementId) {
  sharedToggleOptionsFor(_event, elementId, "exclusiveOptionFor");
}

// app/javascript/batch_connect_session_contexts.js
jQuery(function() {
  if (isBCDynamicJSEnabled()) {
    makeChangeHandlers("batch_connect_session_context");
  }
  attachPathSelectors();
  prefillTemplatesHandler();
  prefillSubmitHandler();
});
//# sourceMappingURL=/assets/batch_connect_session_contexts.js-55f9d7b3bb53fbcd5c8f37564ded38820fb1a773fb1db174bc284919ff6dd9b3.map
//!
;
