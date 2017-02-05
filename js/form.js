(function() {
  $(document).ready(function() {

    $('form').submit(function(e) {
      e.preventDefault();
      var formData = {
        'entry.748603620': $('input[name=name]').val(),
        'entry.1018829523': $('input[name=email]').val(),
        'entry.2042971329': $('textarea[name=message]').val(),
        'entry.214764784': ($('input[name=email-list]').prop('checked')) ? 'Yes' : ''
      };

      $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScYLomzA21CSZ2IQo8Ls5tSKccgpvUOofqNlSSOEVF_ksZp4w/formResponse',
        data: formData,
        dataType: 'html',
        encode: true
      }).done(function(response) {
        console.log("Success");
        var h = $parseHTML(response);
        var message = $('.freebirdFormviewerViewResponseConfirmationMessage').HTML(h);
        console.log(message);
        $('#success-alert').removeClass('hidden');
        $('form').trigger("reset");
      }).fail(function(xhr, status, error) {
        console.log('Failure');
        console.log(status);
        console.log(error);
      });
    });
  })
})();
