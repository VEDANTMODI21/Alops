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
export {
  attachPathSelectors
};
//# sourceMappingURL=path_selector.js.map
