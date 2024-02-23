export function modal() {
  const header = document.querySelector('.header');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = modal.querySelector('.modal__close');
  const wrapper = document.querySelector('.wrapper');
  const scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';
  const showModal = gsap.timeline({ paused: true });
  const appForm = document.querySelector('.modal__form');
  const formInputs = document.querySelectorAll('.modal__input');
  const formCheckbox = document.querySelector('.modal__checkbox');
  const appNotice = document.querySelector('.modal__notice');
  const phoneInput = document.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 999-999-99-99', { autoUnmask: true });
  inputMask.mask(phoneInput);

  //Form
  appForm.addEventListener('submit', sendForm);

  function addFormError(input) {
    input.parentElement.classList.add('err');
    input.classList.add('err');
  }

  function removeFormError(input) {
    input.parentElement.classList.remove('err');
    input.classList.remove('err');
  }

  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.length > 0) {
        input.classList.add('active');

        if (input.getAttribute('type') === 'text') {
          removeFormError(input);
        }
      } else {
        input.classList.remove('active');
        addFormError(input);
      }

      if (input.getAttribute('type') === 'tel') {
        if (input.value.length >= 10) {
          removeFormError(input);
        } else {
          addFormError(input);
        }
      }
    });
  });

  formCheckbox.addEventListener('change', () => {
    if (formCheckbox.checked === true) {
      removeFormError(formCheckbox);
    }
  });

  function validateForm(form) {
    let formReqs = form.querySelectorAll('.required');
    let error = 0;

    for (let i = 0; i < formReqs.length; i++) {
      const input = formReqs[i];
      removeFormError(input);

      if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        addFormError(input);
        error++;
      } else {
        if (input.value === '') {
          addFormError(input);
          error++;
        }
      }
    }

    return error;
  }

  async function sendForm(e) {
    e.preventDefault();
    let error = validateForm(appForm);

    let formData = new FormData(appForm);

    if (error === 0) {
      let response = await fetch('resources/mail/mailer.php', {
        method: 'POST',
        body: formData,
      }).then(() => {
        appNotice.classList.add('active');
        appForm.reset();
        setTimeout(() => {
          appNotice.classList.remove('active');
        }, 4000);
      }).catch(() => {

      }).finally(() => {

      });
    }
  }

  //Show Modal
  gsap.set('.modal__title span', { y: 0 });

  showModal.to('.overlay', {
    opacity: 1,
    visibility: 'visible',
    zIndex: 150,
  }).to('.overlay__block', {
    duration: 1,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    stagger: 0.07,
    ease: 'power3.inOut'
  }).to('.modal', {
    opacity: 1,
    visibility: 'visible',
    duration: 0.4
  }).from('.modal__title span', {
    y: 200,
    duration: 1.5,
    ease: 'power3.out',
  }).from('.modal__form', {
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  const hideModal = () => {
    modal.classList.remove('active');
    showModal.reverse();

    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setTimeout(function () {
        document.body.classList.remove('hidden');
        document.body.style.paddingRight = '';
        header.style.paddingRight = '';
      }, 3000);
    } else {
      setTimeout(function () {
        document.body.classList.remove('hidden');
      }, 3000);
    }
  };

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-app') || e.target.closest('.btn-app')) {
      modal.classList.add('active');

      if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        setTimeout(function () {
          document.body.style.paddingRight = scrollWidth;
          header.style.paddingRight = scrollWidth;
          document.body.classList.add('hidden');
        }, 600);
      } else {
        setTimeout(function () {
          document.body.classList.add('hidden');
        }, 600);
      }

      showModal.play();
    }
  });

  modalCloseBtn.addEventListener('click', () => {
    if (modal.classList.contains('active')) {
      hideModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('active')) {
      hideModal();
    }
  });
}