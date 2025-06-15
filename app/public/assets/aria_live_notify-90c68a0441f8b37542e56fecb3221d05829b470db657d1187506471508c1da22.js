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
//# sourceMappingURL=/assets/aria_live_notify.js-bbe65906e536be25ea87cdca9d819813eeec18ca91c16600fe4db64724625bed.map
//!
;
