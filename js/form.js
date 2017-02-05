(function() {
  $(document).ready(function() {
    var iframeLoaded = false;
    $('input[name=email-list]').click(function(e) {
      var list = ($('input[name=email-list]').prop('checked')) ? 'Yes' : '';
      $('input[name="entry.214764784"]').val(list);
    });

    $('form').submit(function(e) {
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
    
    $('iframe').on('load', function() {
      iframeLoaded = true;
    });
  });
})();
