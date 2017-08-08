(function() {
  const form = document.querySelector('form');
  const email = document.querySelector('input[name="email"]');
  const firstName = document.querySelector('input[name="FNAME"]');
  const lastName = document.querySelector('input[name="LNAME"]');
  const errorMess = document.querySelector('#errormess');
  const successMess = document.querySelector('#successmess');

  function subscribe(e) {
    e.preventDefault();
    clearMessages();
    var newSubscriber = {
      'email_address': email.value,
      'status': 'subscribed',
      'merge_fields': {
        'FNAME': firstName.value,
        'LNAME': lastName.value
      }
    };
    var fetchConfig = {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(newSubscriber)
    };
    fetch('https://fbmb.noahscholfield.com/api/mailchimp/', fetchConfig)
      .then(blob => blob.json())
      .then(data => {
        if(data.success) {
          displayMessage('success', data.message);
          form.reset();
        } else {
          displayMessage('error', data.message);
        }
      })
      .catch((err) => {
        displayMessage('error', 'Something is wrong. Try again!');
        console.log('Error', err);
      });
  }

  function clearMessages() {
    errorMess.innerHTML = '';
    successMess.innerHTML = '';
  }

  function displayMessage(type, message) {
    if(type === 'error') {
      errorMess.innerHTML = message;
    } else {
      successMess.innerHTML = message;
    }
    window.setTimeout(clearMessages, 3000);
  }

  form.addEventListener('submit', subscribe);
})();
