// app/javascript/utils.js
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

// app/javascript/dashboard.js
document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll("a[target=_blank]");
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      openLinkInJs(event);
    });
  });
});
//# sourceMappingURL=dashboard.js.map
