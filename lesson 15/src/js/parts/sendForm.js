function sendForm() {
    let message = {
        loading: 'Загрузка',
        success: 'Ваш запрос успешно отправлен!',
        error: 'Произошла ошибка'
    };

    function sendForm(selector){

        let form = document.querySelector(selector),
            input = form.getElementsByTagName('input'),
            phone = form.querySelectorAll('input[name="phone"]'),
            status = document.createElement('div');

        for (let i = 0; i < phone.length; i++) {
            phone[i].addEventListener('keypress', function(event) {
                if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57) {
                    event.preventDefault();
                }
            });
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(status);
            let formData = new FormData(form);
            
            function postDate(date) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', './server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
                    request.addEventListener('readystatechange', function() {
                        if (request.readyState > 4) {
                            resolve();
                        } else if (request.readyState === 4 ) {
                            if (request.status == 200) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        } 
                    });

                    request.send(date);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
    
            postDate(formData)
                .then(() => status.textContent = message.loading)
                .then(() => status.textContent = message.success)
                .catch(() => status.textContent = message.error)
                .then(clearInput)
        }); 
    }

    sendForm('.main-form');
    sendForm('#form');
}

module.exports = sendForm;