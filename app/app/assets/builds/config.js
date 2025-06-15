"use strict;";

// app/javascript/config.js
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function maxFileSize() {
  const cfgData = configData();
  if (cfgData["maxFileSize"].length == 0) {
    return parseInt(1073742e4, 10);
  } else {
    const maxFileSize2 = cfgData["maxFileSize"];
    return parseInt(maxFileSize2, 10);
  }
}
function transfersPath() {
  const cfgData = configData();
  const transfersPath2 = cfgData["transfersPath"];
  return transfersPath2;
}
function rootPath() {
  const cfgData = configData();
  const rootPath2 = cfgData["rootPath"];
  if (rootPath2 == "/") {
    return rootPath2;
  } else {
    return rootPath2.substring(0, rootPath2.length - 1);
  }
}
function csrfToken() {
  const csrf_token = document.querySelector('meta[name="csrf-token"]').content;
  return csrf_token;
}
function uppyLocale() {
  const cfgData = configData();
  return JSON.parse(cfgData["uppyLocale"]);
}
function isBCDynamicJSEnabled() {
  const cfgData = configData();
  return cfgData["bcDynamicJs"] == "true";
}
function downloadEnabled() {
  const cfgData = configData();
  return cfgData["downloadEnabled"] == "true";
}
function xdmodUrl() {
  const cfgData = configData();
  const url = cfgData["xdmodUrl"];
  return url == "" ? null : url;
}
function analyticsPath(type) {
  const cfgData = configData();
  const basePath = cfgData["baseAnalyticsPath"];
  return `${basePath}/${type}`;
}
function bcPollDelay() {
  const cfgData = configData();
  return Number(cfgData["bcPollDelay"]);
}
function bcIndexUrl() {
  const cfgData = configData();
  return cfgData["bcIndexUrl"];
}
function statusPollDelay() {
  const cfgData = configData();
  return Number(cfgData["statusPollDelay"]);
}
function statusIndexUrl() {
  const cfgData = configData();
  return cfgData["statusIndexUrl"];
}
function supportPath() {
  const cfgData = configData();
  const supportPath2 = cfgData["supportPath"];
  return supportPath2;
}
function appsDatatablePageLength() {
  const cfgData = configData();
  return parseInt(cfgData["appsDatatablePageLength"]);
}
export {
  analyticsPath,
  appsDatatablePageLength,
  bcIndexUrl,
  bcPollDelay,
  configData,
  csrfToken,
  downloadEnabled,
  isBCDynamicJSEnabled,
  maxFileSize,
  rootPath,
  statusIndexUrl,
  statusPollDelay,
  supportPath,
  transfersPath,
  uppyLocale,
  xdmodUrl
};
//# sourceMappingURL=config.js.map
