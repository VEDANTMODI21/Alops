// app/javascript/aria_live_notify.js
function ariaNotify(message) {
  const liveRegion = document.getElementById("aria_live_region");
  if (liveRegion) {
    liveRegion.textContent = message;
  }
}
export {
  ariaNotify
};
//# sourceMappingURL=aria_live_notify.js.map
