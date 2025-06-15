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
export {
  OODAlert
};
//# sourceMappingURL=/assets/alert.js-62a8be52014987878baa3b95b2c800332a61f5cfe460673c14bd152072994892.map
//!
;
