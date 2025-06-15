// app/javascript/files/page_load.js
function setPageLoadState() {
  const configEle = document.getElementById("files_page_load_config");
  if (configEle === null) {
    return;
  }
  const data = configEle.dataset;
  history.replaceState({
    currentDirectory: data["currentDirectory"],
    currentDirectoryUrl: data["currentDirectoryUrl"],
    currentDirectoryUpdatedAt: data["currentDirectoryUpdatedAt"],
    currentFilesPath: data["currentFilesPath"],
    currentFilesUploadPath: data["currentFilesUploadPath"],
    currentFilesystem: data["currentFilesystem"]
  }, null);
}
export {
  setPageLoadState
};
//# sourceMappingURL=/assets/files/page_load.js-3949519396a3bd650f376ac11a1ad7f984d5fdeb5f16e9d87bdbc613be46b963.map
//!
;
