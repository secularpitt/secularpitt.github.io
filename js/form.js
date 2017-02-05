(function() {
  $(document).ready(function() {

    $('input[name=email-list]').click(function(e) {
      var list = ($('input[name=email-list]').prop('checked')) ? 'Yes' : '';
      $('input[name="entry.214764784"]').val(list);
    });

    $('form').submit(function(e) {
      window.setTimeout(function() {
        var iframe = $('iframe');
        if(iframe.length) {
          $('#success-alert').removeClass('hidden');
          $('form').trigger('reset');
        } else {
          $('#failure-alert').removeClass('hidden');
        }
      }, 1000);
    });
  });
})();
