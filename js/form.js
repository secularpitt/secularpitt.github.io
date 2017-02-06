/* global $ */

(function() {
  $(document).ready(function() {
    var iframeLoaded = false;
    $('input[name=email-list]').change(updateCheckboxInput);

    $('form').submit(function() {
      iframeLoaded = false;
      window.setTimeout(function() {
        if(iframeLoaded) {
          $('#success-alert').removeClass('hidden');
          $('form').trigger('reset');
        } else {
          $('#failure-alert').removeClass('hidden');
        }
      }, 1000);
    });

    $('form').on('reset', () => window.setTimeout(updateCheckboxInput, 0));

    $('iframe').on('load', function() {
      iframeLoaded = true;
    });

    function updateCheckboxInput() {
      var list = ($('input[name=email-list]').prop('checked')) ? 'Yes' : '';
      $('input[name="entry.214764784"]').val(list);
    }
  });
})();
