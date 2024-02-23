export function header() {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const headerActions = document.querySelector('.header__actions');
  const headerMenu = document.querySelector('.header__menu');
  const headerBody = document.querySelector('.header__body');
  const wrapper = document.querySelector('.wrapper');
  const headerLinks = document.querySelectorAll('.header__link');
  const scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';
  const menuAnimation = gsap.timeline({ paused: true });
  let isOpen = false;

  //Menu Animation
  gsap.matchMedia().add('(max-width: 1025px)', () => {
    gsap.set('.header__link', { y: 0 });

    menuAnimation.to('.overlay', {
      opacity: 1,
      visibility: 'visible',
    }).to('.overlay__block', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      stagger: 0.07,
      ease: 'power3.inOut'
    }).to('.header__menu', {
      opacity: 1,
      visibility: 'visible',
      duration: 0.4
    }).from('.header__link', {
      y: 200,
      duration: 1.5,
      ease: 'power3.out',
    }, '-=0.5');
  });

  burger.addEventListener('click', () => {
    let ariaLabel = burger.getAttribute('aria-label');
    burger.classList.toggle('active');

    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      if (burger.classList.contains('active')) {
        setTimeout(function () {
          document.body.style.paddingRight = scrollWidth;
          header.style.paddingRight = scrollWidth;
          document.body.classList.add('hidden');
        }, 600);
      } else {
        setTimeout(function () {
          document.body.classList.remove('hidden');
          document.body.style.paddingRight = '';
          header.style.paddingRight = '';
        }, 2200);
      }
    } else {
      if (burger.classList.contains('active')) {
        setTimeout(function () {
          document.body.classList.add('hidden');
        }, 600);
      } else {
        setTimeout(function () {
          document.body.classList.remove('hidden');
        }, 2200);
      }
    }

    if (ariaLabel === 'Открыть меню') {
      burger.setAttribute('aria-label', 'Закрыть меню');
    } else {
      burger.setAttribute('aria-label', 'Открыть меню');
    }

    if (isOpen) {
      menuAnimation.reverse();
    } else {
      menuAnimation.play();
    }
    isOpen = !isOpen;
  });

  if (!isOpen) {
    headerLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuAnimation.reverse();
        burger.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('active');
        isOpen = !isOpen;
      })
    });
  }

  //Dinamic Adaptive

  function dinamicAdaptive() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    if (viewportWidth <= 600) {
      headerMenu.append(headerActions);
    } else {
      headerBody.append(headerActions);

    }
  }

  window.addEventListener('resize', () => {
    dinamicAdaptive();
  });


  //Header On Scroll
  function headerOnScroll() {
    if (window.scrollY > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }

  window.addEventListener('scroll', () => {
    headerOnScroll();
  });

  window.addEventListener('load', () => {
    headerOnScroll();
    dinamicAdaptive();
  });
}