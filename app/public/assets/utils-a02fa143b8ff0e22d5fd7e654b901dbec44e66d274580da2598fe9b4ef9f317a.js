// app/javascript/config.js
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function analyticsPath(type) {
  const cfgData = configData();
  const basePath = cfgData["baseAnalyticsPath"];
  return `${basePath}/${type}`;
}

// app/javascript/aria_live_notify.js
function ariaNotify(message) {
  const liveRegion = document.getElementById("aria_live_region");
  if (liveRegion) {
    liveRegion.textContent = message;
  }
}

// app/javascript/utils.js
function cssBadgeForState(state) {
  switch (state) {
    case "completed":
      return "bg-success";
    case "running":
      return "bg-primary";
    case "queued":
      return "bg-info";
    case "queued_held":
      return "bg-warning";
    case "suspended":
      return "bg-warning";
    default:
      return "bg-warning";
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function startOfYear() {
  const now = /* @__PURE__ */ new Date();
  const past = /* @__PURE__ */ new Date();
  past.setDate(1);
  past.setMonth(0);
  past.setFullYear(now.getFullYear());
  return `${past.getFullYear()}-${past.getMonth() + 1}-${past.getDate()}`;
}
function thirtyDaysAgo() {
  const now = /* @__PURE__ */ new Date();
  const past = /* @__PURE__ */ new Date();
  past.setDate(now.getDate() - 30);
  return `${past.getFullYear()}-${past.getMonth() + 1}-${past.getDate()}`;
}
function today() {
  const now = /* @__PURE__ */ new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}
function showSpinner() {
  $("body").addClass("modal-open");
  $("#full-page-spinner").removeClass("d-none");
}
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
function bindFullPageSpinnerEvent() {
  $(".full-page-spinner").each((index, element) => {
    const $element = $(element);
    if ($element.is("a")) {
      $element.on("click", showSpinner);
    } else {
      $element.closest("form").on("submit", showSpinner);
    }
  });
}
function openLinkInJs(event) {
  event.preventDefault();
  let href = event.target.href;
  if (href == null) {
    const closestAnchor = event.target.closest("a");
    if (closestAnchor.hasChildNodes(event.target)) {
      href = closestAnchor.href;
    } else {
      return;
    }
  }
  if (window.open(href) == null) {
    const html = document.getElementById("js-alert-danger-template").innerHTML;
    const msg = "This link is configured to open in a new window, but it doesn't seem to have opened. Please disable your popup blocker for this page and try again.";
    const mainDiv = document.querySelectorAll('div[role="main"]')[0];
    const alertDiv = document.createElement("div");
    alertDiv.innerHTML = html.split("ALERT_MSG").join(msg);
    mainDiv.prepend(alertDiv);
  }
}
function setInnerHTML(element, html) {
  element.innerHTML = html;
  const scripts = Array.from(element.querySelectorAll("script"));
  scripts.forEach((currentElement) => {
    const newElement = document.createElement("script");
    Array.from(currentElement.attributes).forEach((attr) => {
      newElement.setAttribute(attr.name, attr.value);
    });
    const scriptText = document.createTextNode(currentElement.innerHTML);
    newElement.appendChild(scriptText);
    currentElement.parentNode.replaceChild(newElement, currentElement);
  });
}
function reportErrorForAnalytics(path, error) {
  const analyticsUrl = new URL(analyticsPath(path), document.location);
  analyticsUrl.searchParams.append("error", error);
  fetch(analyticsUrl);
}
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
export {
  bindFullPageSpinnerEvent,
  capitalizeFirstLetter,
  cssBadgeForState,
  hide,
  openLinkInJs,
  pageSpin,
  reportErrorForAnalytics,
  setInnerHTML,
  show,
  startOfYear,
  stopPageSpin,
  thirtyDaysAgo,
  today
};
//# sourceMappingURL=/assets/utils.js-1912df22aded801018f00852c0371adffd994510ebc95babaa0332f4b145843e.map
//!
;
