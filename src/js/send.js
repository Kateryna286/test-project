/*Send message*/    
  function sendMessage(){
    chat_id = "-551810818";
    token = "1751285589:AAFlWHWyTBY24QLFgkcm489rwu31Ic90i6U";
    message = "Name: " + document.getElementById("name").value + " Phone: " + document.getElementById("phone").value;
    $.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id);
}

  /*FOrm*/
  "use strict"
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);
    
      if (error === 0) {
        sendMessage();
        form.classList.add('_sending');

        window.setTimeout(function () {
          form.reset();
          form.classList.remove('_sending');
          alert('Ваше сообщение отправлено');
        }, 2200);
      }
    }

    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('_phone')) {
          if (phoneTest(input)) {
            formAddError(input);
            error++;
          }
        } else {
          if (input.value === '') {
            formAddError(input);
            error++;
            }
        }
      
        if (input.classList.contains('_name')) {
          if (nameTest(input)) {
            formAddError(input);
            error++;
          }
        } else {
          if (input.value === '') {
            formAddError(input);
            error++;
            }
          }
      }
      return error; 
    }
    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }
    function phoneTest(input) {
      return !/^[\+]?[3]?[8]?[0][0-9]{9}$/.test(input.value);
    }
    function nameTest(input) {
      return !/^[A-Za-zА-Яа-яЁёІіЇїЄє]{1,}$/.test(input.value);
    }
  });
