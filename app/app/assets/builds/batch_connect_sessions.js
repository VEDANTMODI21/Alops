// app/javascript/config.js
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function bcPollDelay() {
  const cfgData = configData();
  return Number(cfgData["bcPollDelay"]);
}
function bcIndexUrl() {
  const cfgData = configData();
  return cfgData["bcIndexUrl"];
}

// app/javascript/aria_live_notify.js
function ariaNotify(message) {
  const liveRegion = document.getElementById("aria_live_region");
  if (liveRegion) {
    liveRegion.textContent = message;
  }
}

// app/javascript/utils.js
function showSpinner() {
  $("body").addClass("modal-open");
  $("#full-page-spinner").removeClass("d-none");
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

// app/javascript/turbo_shim.js
function replaceHTML(id, html) {
  const ele = document.getElementById(id);
  if (ele == null) return;
  var tmp = document.createElement("div");
  tmp.innerHTML = html;
  const newHTML = tmp.querySelector("template").innerHTML;
  tmp.remove();
  setInnerHTML(ele, newHTML);
}
function pollAndReplace(url, delay, id, callback) {
  fetch(url, { headers: { Accept: "text/vnd.turbo-stream.html" } }).then((response) => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else if (response.status == 401) {
      return Promise.reject("This page cannot update because you are no longer authenticated. Please refresh the page to log back in.");
    } else {
      return Promise.reject(response.text());
    }
  }).then((r) => r.text()).then((html) => replaceHTML(id, html)).then(() => {
    setTimeout(pollAndReplace, delay, url, delay, id, callback);
    if (typeof callback == "function") {
      callback();
    }
  }).catch((err) => {
    if (typeof err == "string") {
      OODAlert(err);
    } else {
      OODAlert("This page has encountered an unexpected error. Please refresh the page.");
    }
    console.log(err);
  });
}

// app/javascript/batch_connect_sessions.js
var sessionStatusMap = /* @__PURE__ */ new Map();
function checkStatusChanges() {
  const sessionCards = document.querySelectorAll("[data-bc-card]");
  sessionCards.forEach((card) => {
    const sessionId = card.dataset.id;
    const newStatus = card.dataset.status;
    if (sessionStatusMap.has(sessionId)) {
      const oldStatus = sessionStatusMap.get(sessionId);
      if (oldStatus !== newStatus) {
        sessionStatusMap.set(sessionId, newStatus);
        const sessionTitle = card.dataset.title;
        ariaNotify(`${sessionTitle} is now ${newStatus}.`);
      }
    } else {
      sessionStatusMap.set(sessionId, newStatus);
    }
  });
}
function settingKey(id) {
  return id + "_value";
}
function storeSetting(event) {
  var key = settingKey(event.currentTarget.id);
  var value = event.currentTarget.value;
  localStorage.setItem(key, value);
}
function tryUpdateSetting(name) {
  var saved_value = localStorage.getItem(settingKey(name));
  if (saved_value) {
    var selector = 'input[type="range"][name="' + name + '"]';
    $(selector).val(saved_value);
  }
}
function installSettingHandlers(name) {
  var selector = 'input[type="range"][name="' + name + '"]';
  $(selector).on("change", function(event) {
    storeSetting(event);
  });
}
window.installSettingHandlers = installSettingHandlers;
window.tryUpdateSetting = tryUpdateSetting;
jQuery(function() {
  if ($("#batch_connect_sessions").length) {
    pollAndReplace(bcIndexUrl(), bcPollDelay(), "batch_connect_sessions", () => {
      bindFullPageSpinnerEvent();
      checkStatusChanges();
    });
  }
});
//# sourceMappingURL=batch_connect_sessions.js.map
