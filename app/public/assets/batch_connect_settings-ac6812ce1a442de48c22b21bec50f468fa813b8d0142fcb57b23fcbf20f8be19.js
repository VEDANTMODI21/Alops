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

// app/javascript/batch_connect_settings.js
jQuery(function() {
  bindFullPageSpinnerEvent();
});
//# sourceMappingURL=/assets/batch_connect_settings.js-58ba6804f487cb1c9011a2571ce27c7162812bbe4f8795b87f6db47d9a49e559.map
//!
;
