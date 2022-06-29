$(function () {
    $('.openbtn1').on('click', function () {
        $(this).toggleClass('active');
        $("#h-nav").toggleClass('panelactive');
    });
    
    $(function(){
        $(".inview").on("inview", function (event, isInView) {
          if (isInView) {
            $(this).stop().addClass("is-show");
          }
        });
      });
});

document.addEventListener('DOMContentLoaded', () => {
    const validationForm = document.querySelector('.validationForm');
    if (validationForm) {
        const errorClassName = 'error';
        const requiredElems = document.querySelectorAll('.required');
        const emailElems = document.querySelectorAll('.email');
        const createError = (elem, errorMessage) => {
            const errorSpan = document.createElement('span');
            errorSpan.classList.add(errorClassName);
            errorSpan.setAttribute('aria-live', 'polite');
            errorSpan.textContent = errorMessage;
            elem.parentNode.appendChild(errorSpan);
        }

        validationForm.addEventListener('submit', (e) => {
            const errorElems = validationForm.querySelectorAll('.' + errorClassName);
            errorElems.forEach((elem) => {
                elem.remove();
            });

            requiredElems.forEach((elem) => {
                const elemValue = elem.value.trim();
                if (elemValue.length === 0) {
                    if (elem.tagName === 'SELECT') {
                        createError(elem, '選択してください');
                    } else {
                        createError(elem, '入力は必須です');
                    }
                    e.preventDefault();
                }
            });

            emailElems.forEach((elem) => {ン
                const pattern = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ui;
                if(elem.value !=='') {
                    if(!pattern.test(elem.value)) {
                        createError(elem, 'Email アドレスの形式が正しくないようです。');
                        e.preventDefault();
                    }
                }
            });

            const errorElem = validationForm.querySelector('.' + errorClassName);
            if (errorElem) {
                const errorElemOffsetTop = errorElem.offsetTop;
                window.scrollTo({
                    top: errorElemOffsetTop - 40,
                    behavior: 'smooth'
                });
            }

        });
    }
});
