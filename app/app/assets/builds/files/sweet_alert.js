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

// app/javascript/files/globus.js
var globus_endpoints;
$(document).ready(function() {
  globus_endpoints = $("#globus_endpoints").data("globusEndpoints");
});
function getEndpointInfo(directory) {
  for (const endpoint of globus_endpoints) {
    if (directory.startsWith(endpoint["path"])) {
      return endpoint;
    }
  }
}
function getGlobusLink(directory) {
  let info = getEndpointInfo(directory);
  if (info) {
    let origin_path = directory.replace(info.path, info.endpoint_path);
    origin_path = origin_path.replace("//", "/");
    return "https://app.globus.org/file-manager?origin_id=" + info.endpoint + "&origin_path=" + origin_path;
  }
}
function updateGlobusLink(directory, link, wrapper) {
  let info = getEndpointInfo(directory);
  if (info) {
    link.removeClass("disabled");
    wrapper.prop("title", "Open the current directory with Globus");
  } else {
    link.addClass("disabled");
    wrapper.prop("title", "No Globus endpoint associated with this directory");
  }
}

// app/javascript/config.js
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function downloadEnabled() {
  const cfgData = configData();
  return cfgData["downloadEnabled"] == "true";
}

// app/javascript/files/data_table.js
var EVENTNAME2 = {
  getJsonResponse: "getJsonResponse",
  reloadTable: "reloadTable",
  goto: "goto"
};
var CONTENTID = "#directory-contents";
var SPINNERID = "#tloading_spinner";
var table = null;
jQuery(function() {
  table = new DataTable();
  window.onpopstate = function(event) {
    table.goto(location.href);
  };
  $(CONTENTID).on(EVENTNAME2.reloadTable, function(e, options) {
    let url = $.isEmptyObject(options) ? "" : options.url;
    table.reloadTable(url);
  });
  $(CONTENTID).on(EVENTNAME2.getJsonResponse, function(e, options) {
    table.dataFromJsonResponse(options.response);
  });
  $(CONTENTID).on(EVENTNAME2.goto, function(e, options) {
    table.goto(options.path);
  });
  $("#show-dotfiles").on("change", function() {
    table.setShowDotFiles(this.checked);
    table.updateDotFileVisibility();
  });
  $("#show-dotfiles").on("keypress", function(event) {
    if (event.which === 13) {
      this.checked = !this.checked;
      this.dispatchEvent(new Event("change"));
    }
  });
  $("#show-owner-mode").on("change", function() {
    table.setShowOwnerMode(this.checked);
    table.updateShowOwnerModeVisibility();
  });
  $("#show-owner-mode").on("keypress", function(event) {
    if (event.which === 13) {
      this.checked = !this.checked;
      this.dispatchEvent(new Event("change"));
    }
  });
  $("#select_all").on("click", function() {
    if ($(this).is(":checked")) {
      table.getTable().rows({ search: "applied" }).select();
    } else {
      table.getTable().rows().deselect();
    }
  });
  table.getTable().on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function() {
    table.updateDatatablesStatus();
  });
  table.getTable().on("user-select", function(e, dt, type, cell, originalEvent) {
    var selected_rows = dt.rows({ selected: true });
    if (originalEvent.target.closest(".actions-btn-group")) {
      e.preventDefault();
    } else if (selected_rows.count() == 1 && cell.index().row == selected_rows.indexes()[0]) {
      e.preventDefault();
    } else {
      cell.node().closest("tr").querySelector("input[type=checkbox]").focus();
    }
  });
  table.getTable().on("deselect", function(e, dt, type, indexes) {
    dt.rows(indexes).nodes().toArray().forEach((e2) => $(e2).find("input[type=checkbox]").prop("checked", false));
  });
  table.getTable().on("select", function(e, dt, type, indexes) {
    dt.rows(indexes).nodes().toArray().forEach((e2) => $(e2).find("input[type=checkbox]").prop("checked", true));
  });
  $("#directory-contents tbody").on("click", "tr td:first-child input[type=checkbox]", function() {
    if ($(this).is(":checked")) {
      table.getTable().row(this.closest("tr")).select();
    } else {
      table.getTable().row(this.closest("tr")).deselect();
    }
    this.focus();
  });
  $("#directory-contents tbody").on("keydown", "input, a", function(e) {
    if (e.key == "ArrowDown") {
      e.preventDefault();
      let tr = $(this.closest("tr")).next("tr").get(0);
      if (tr) {
        tr.querySelector("input[type=checkbox]").focus();
        if (!e.shiftKey) {
          table.getTable().rows().deselect();
        }
        table.getTable().row(tr).select();
      }
    } else if (e.key == "ArrowUp") {
      e.preventDefault();
      let tr = $(this.closest("tr")).prev("tr").get(0);
      if (tr) {
        tr.querySelector("input[type=checkbox]").focus();
        if (!e.shiftKey) {
          table.getTable().rows().deselect();
        }
        table.getTable().row(tr).select();
      }
    }
  });
  $.fn.dataTable.ext.search.push(
    function(settings, data, dataIndex) {
      return table.getShowDotFiles() || !data[2].startsWith(".");
    }
  );
});
var DataTable = class {
  _table = null;
  constructor() {
    this.loadDataTable();
    this.reloadTable();
  }
  getTable() {
    return this._table;
  }
  toHumanSize(number) {
    if (number === null) {
      return "-";
    } else {
      const unitIndex = number == 0 ? 0 : Math.floor(Math.log(number) / Math.log(1e3));
      return `${(number / Math.pow(1e3, unitIndex)).toFixed(2)} ${["B", "kB", "MB", "GB", "TB", "PB"][unitIndex]}`;
    }
  }
  loadDataTable() {
    this._table = $(CONTENTID).on("xhr.dt", function(e, settings, json, xhr) {
      if (json && json.time) {
        history.replaceState(_.merge({}, history.state, { currentDirectoryUpdatedAt: json.time }), null);
      }
    }).DataTable({
      autoWidth: false,
      language: {
        search: "Filter:"
      },
      order: [[1, "asc"], [2, "asc"]],
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
      // put breadcrmbs below filter!!!
      dom: "<'row'<'col-sm-12'f>><'row'<'col-sm-12'<'dt-status-bar'<'datatables-status float-end'><'transfers-status'>>>><'row'<'col-sm-12'tr>>",
      // normally this is <'row'<'col-sm-5'i><'col-sm-7'p>> but we disabled pagination so have info take whole row
      columns: [
        {
          data: null,
          orderable: false,
          defaultContent: '<input type="checkbox">',
          render: (data, type, row, meta) => {
            return `<input type='checkbox' data-dl-url='${row.download_url}'>`;
          }
        },
        { data: "type", render: (data, type, row, meta) => data == "d" ? '<span title="directory" class="fa fa-folder" style="color: gold"><span class="sr-only"> dir</span></span>' : '<span title="file" class="fa fa-file" style="color: lightgrey"><span class="sr-only"> file</span></span>' },
        // type
        { name: "name", data: "name", className: "text-break", render: (data, type, row, meta) => this.renderNameColumn(data, type, row, meta) },
        // name
        { name: "actions", orderable: false, searchable: false, data: null, render: (data, type, row, meta) => this.actionsBtnTemplate({ row_index: meta.row, file: row.type != "d", data: row }) },
        {
          data: "size",
          render: (data, type, row, meta) => {
            return type == "display" ? this.toHumanSize(row.size) : data;
          }
        },
        // human_size
        {
          data: "modified_at",
          render: (data, type, row, meta) => {
            if (type == "display") {
              let date = new Date(data * 1e3);
              return isNaN(data) ? "Invalid Date" : `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
            } else {
              return data;
            }
          }
        },
        // modified_at
        { name: "owner", data: "owner", visible: this.getShowOwnerMode() },
        // owner
        {
          name: "mode",
          data: "mode",
          visible: this.getShowOwnerMode(),
          render: (data, type, row, meta) => {
            let mode = data.toString(8);
            let chmodDisplay = mode.substring(mode.length - 3);
            return chmodDisplay;
          }
        }
        // mode
      ]
    });
    $("#directory-contents_filter").prepend(`<label style="margin-right: 20px" for="show-dotfiles"><input type="checkbox" id="show-dotfiles" ${this.getShowDotFiles() ? "checked" : ""}> Show Dotfiles</label>`);
    $("#directory-contents_filter").prepend(`<label style="margin-right: 14px" for="show-owner-mode"><input type="checkbox" id="show-owner-mode" ${this.getShowOwnerMode() ? "checked" : ""}> Show Owner/Mode</label>`);
    this.updateGlobus();
  }
  async reloadTable(url) {
    var request_url = url || history.state.currentDirectoryUrl;
    this.toggleSpinner();
    try {
      const response = await fetch(request_url, { headers: { "Accept": "application/json" }, cache: "no-store" });
      const data = await this.dataFromJsonResponse(response);
      history.state.currentFilenames = Array.from(data.files, (x) => x.name);
      $("#shell-wrapper").replaceWith(data.shell_dropdown_html);
      this._table.clear();
      this._table.rows.add(data.files);
      this._table.draw();
      $("#open-in-terminal-btn").attr("href", data.shell_url);
      $("#open-in-terminal-btn").removeClass("disabled");
      if ($("#select_all").is(":checked")) {
        $("#select_all").click();
      }
      let result = await Promise.resolve(data);
      $("td input[type=checkbox]").on("keypress", function(event) {
        if (event.which === 13) {
          this.checked = !this.checked;
          this.dispatchEvent(new Event("change"));
          if (this.checked) {
            table.getTable().row(this.closest("tr")).select();
          } else {
            table.getTable().row(this.closest("tr")).deselect();
          }
        }
      });
      this.toggleSpinner();
      return result;
    } catch (e) {
      const eventData = {
        "title": `Error occurred when attempting to access ${request_url}`,
        "message": e.message
      };
      $(CONTENTID).trigger(EVENTNAME.showError, eventData);
      $("#open-in-terminal-btn").addClass("disabled");
      this.toggleSpinner();
    }
  }
  toggleSpinner() {
    document.querySelector(SPINNERID).classList.toggle("d-none");
    document.querySelector(CONTENTID).classList.toggle("d-none");
  }
  updateDotFileVisibility() {
    this.reloadTable();
  }
  updateGlobus() {
    if ($("#globus-link").length) {
      $("#globus-link").attr("href", getGlobusLink(history.state.currentDirectory));
      updateGlobusLink(history.state.currentDirectory, $("#globus-link"), $("#globus-wrapper"));
    }
  }
  updateShowOwnerModeVisibility() {
    let visible = this.getShowOwnerMode();
    this._table.column("owner:name").visible(visible);
    this._table.column("mode:name").visible(visible);
  }
  setShowOwnerMode(visible) {
    localStorage.setItem("show-owner-mode", new Boolean(visible));
  }
  setShowDotFiles(visible) {
    localStorage.setItem("show-dotfiles", new Boolean(visible));
  }
  getShowDotFiles() {
    return localStorage.getItem("show-dotfiles") == "true";
  }
  getShowOwnerMode() {
    return localStorage.getItem("show-owner-mode") == "true";
  }
  dataFromJsonResponse(response) {
    return new Promise((resolve, reject) => {
      Promise.resolve(response).then((response2) => response2.ok ? Promise.resolve(response2) : Promise.reject(new Error(response2.statusText))).then((response2) => response2.json()).then((data) => data.error_message ? Promise.reject(new Error(data.error_message)) : resolve(data)).catch((e) => reject(e));
    });
  }
  renderNameColumn(data, type, row, meta) {
    let element = void 0;
    if (row.type == "f" && !downloadEnabled()) {
      element = document.createElement("span");
    } else {
      element = document.createElement("a");
      element.href = row.url;
    }
    element.dataset.type = row.type;
    element.classList.add("name");
    element.textContent = data;
    return element.outerHTML;
  }
  actionsBtnTemplate(options) {
    const rowIndex = options.row_index;
    const file = options.file;
    const data = options.data;
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group", "actions-btn-group");
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("actions-btn", "btn", "btn-outline-dark", "btn-sm", "dropdown-toggle");
    button.setAttribute("data-bs-toggle", "dropdown");
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    const icon = document.createElement("span");
    icon.classList.add("fa", "fa-ellipsis-v");
    button.appendChild(icon);
    btnGroup.appendChild(button);
    const dropdownMenu = document.createElement("ul");
    dropdownMenu.classList.add("dropdown-menu");
    if (file) {
      if (data.url && downloadEnabled()) {
        const viewItem = document.createElement("li");
        const viewLink = document.createElement("a");
        viewLink.href = data.url;
        viewLink.classList.add("view-file", "dropdown-item");
        viewLink.target = "_blank";
        viewLink.setAttribute("data-row-index", rowIndex);
        viewLink.innerHTML = '<i class="fas fa-eye" aria-hidden="true"></i> View';
        viewItem.appendChild(viewLink);
        dropdownMenu.appendChild(viewItem);
      }
      if (data.edit_url) {
        const editItem = document.createElement("li");
        const editLink = document.createElement("a");
        editLink.href = data.edit_url;
        editLink.classList.add("edit-file", "dropdown-item");
        editLink.target = "_blank";
        editLink.setAttribute("data-row-index", rowIndex);
        editLink.innerHTML = '<i class="fas fa-edit" aria-hidden="true"></i> Edit';
        editItem.appendChild(editLink);
        dropdownMenu.appendChild(editItem);
      }
    }
    const renameItem = document.createElement("li");
    const renameLink = document.createElement("a");
    renameLink.href = "#";
    renameLink.classList.add("rename-file", "dropdown-item");
    renameLink.setAttribute("data-row-index", rowIndex);
    renameLink.innerHTML = '<i class="fas fa-font" aria-hidden="true"></i> Rename';
    renameItem.appendChild(renameLink);
    dropdownMenu.appendChild(renameItem);
    if (downloadEnabled() && data.download_url) {
      const downloadItem = document.createElement("li");
      const downloadLink = document.createElement("a");
      downloadLink.href = data.download_url;
      downloadLink.classList.add("download-file", "dropdown-item");
      downloadLink.setAttribute("data-row-index", rowIndex);
      downloadLink.innerHTML = '<i class="fas fa-download" aria-hidden="true"></i> Download';
      downloadItem.appendChild(downloadLink);
      dropdownMenu.appendChild(downloadItem);
    }
    const dividerItem = document.createElement("li");
    dividerItem.classList.add("dropdown-divider", "mt-4");
    dropdownMenu.appendChild(dividerItem);
    const deleteItem = document.createElement("li");
    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.classList.add("delete-file", "dropdown-item", "text-danger");
    deleteLink.setAttribute("data-row-index", rowIndex);
    deleteLink.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i> Delete';
    deleteItem.appendChild(deleteLink);
    dropdownMenu.appendChild(deleteItem);
    btnGroup.appendChild(dropdownMenu);
    return btnGroup.outerHTML;
  }
  updateDatatablesStatus() {
    let api = this._table;
    let rows = api.rows({ selected: true }).flatten().length, page_info = api.page.info(), msg = page_info.recordsTotal == page_info.recordsDisplay ? `Showing ${page_info.recordsDisplay} rows` : `Showing ${page_info.recordsDisplay} of ${page_info.recordsTotal} rows`;
    $(".datatables-status").html(`${msg} - ${rows} rows selected`);
  }
  goto(url, pushState = true, show_processing_indicator = true) {
    if (url == history.state.currentDirectoryUrl)
      pushState = false;
    this.reloadTable(url).then((data) => {
      if (data) {
        $("#path-breadcrumbs").html(data.breadcrumbs_html);
        if (pushState) {
          this._table.search("").draw();
          history.pushState({
            currentDirectory: data.path,
            currentDirectoryUrl: data.url,
            currentFilesPath: data.files_path,
            currentFilesUploadPath: data.files_upload_path,
            currentFilesystem: data.filesystem,
            currentFilenames: Array.from(data.files, (x) => x.name)
          }, data.name, data.url);
        }
        this.updateGlobus();
      }
    }).finally(() => {
    });
  }
};

// app/javascript/aria_live_notify.js
function ariaNotify(message) {
  const liveRegion = document.getElementById("aria_live_region");
  if (liveRegion) {
    liveRegion.textContent = message;
  }
}

// app/javascript/utils.js
function pageSpin() {
  const ele = document.getElementById("full_page_spinner");
  ele.classList.remove("d-none");
  ariaNotify("Loading.");
}
function stopPageSpin() {
  const ele = document.getElementById("full_page_spinner");
  ele.classList.add("d-none");
  ariaNotify("Loading complete.");
}

// app/javascript/files/sweet_alert.js
var EVENTNAME = {
  showError: "showError",
  showInput: "showInput",
  showLoading: "showLoading",
  closeSwal: "closeSwal"
};
function modifyInput(options) {
  const title = options.inputOptions.title;
  const titleElement = document.getElementById("files_input_modal_title");
  titleElement.textContent = title;
  const label = options.inputOptions.inputLabel;
  const labelElement = document.getElementById("files_input_modal_label");
  labelElement.textContent = label;
  const wrapper = document.getElementById("files_input_modal_input_wrapper");
  const span = document.getElementById("files_input_modal_text_span");
  if (options.inputOptions.input && options.inputOptions.input == "text") {
    wrapper.classList.remove("d-none");
    span.textContent = "";
  } else {
    wrapper.classList.add("d-none");
    if (options.inputOptions.text) {
      span.textContent = options.inputOptions.text;
    }
  }
  if (options.inputOptions.inputValue) {
    const input = document.getElementById("files_input_modal_input");
    input.value = options.inputOptions.inputValue;
  }
  attachOKHandler(options);
}
function attachOKHandler(options) {
  const button = document.getElementById("files_input_modal_ok_button");
  button.onclick = () => {
    const input = document.getElementById("files_input_modal_input");
    const value = input.value;
    const eventData = {
      files: options.files ? options.files : null,
      result: {
        value
      }
    };
    const validator = options.inputOptions.inputValidator;
    let error = void 0;
    if (validator && typeof validator == "function") {
      error = validator(value);
    }
    if (error) {
      OODAlert(error);
    } else {
      $(CONTENTID).trigger(options.action, eventData);
    }
    input.value = "";
    $("#files_input_modal").modal("hide");
  };
}
jQuery(function() {
  $(CONTENTID).on(EVENTNAME.showError, function(e, options) {
    OODAlert(options.message);
  });
  $(CONTENTID).on(EVENTNAME.showInput, function(e, options) {
    modifyInput(options);
    $("#files_input_modal").modal("show");
  });
  $(CONTENTID).on(EVENTNAME.showLoading, function(e, options) {
    pageSpin();
  });
  $(CONTENTID).on(EVENTNAME.closeSwal, function() {
    stopPageSpin();
  });
});
export {
  EVENTNAME
};
//# sourceMappingURL=sweet_alert.js.map
