// app/javascript/config.js
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function appsDatatablePageLength() {
  const cfgData = configData();
  return parseInt(cfgData["appsDatatablePageLength"]);
}

// app/javascript/apps.js
jQuery(function() {
  const pageLength = appsDatatablePageLength();
  $("#all-apps-table").DataTable({
    stateSave: false,
    pageLength
  });
});
//# sourceMappingURL=/assets/apps.js-d1778744328190eba8a022e84c53e1a7c678ce7259a1096fa4c27ee2a054f253.map
//!
;
