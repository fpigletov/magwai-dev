export function start() {

  const heroDescr = document.querySelector('.hero__descr');
  const startAnimation = gsap.timeline();
  gsap.set('.hero__title-inner span', { y: 0 });

  function splitText(el) {
    el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
      return `<span class="word">` +
        m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='letter'>$&</span>") +
        `</span>`;
    });
    return el;
  }

  splitText(heroDescr);

  //Start Animation
  startAnimation.from('.wrapper', {
    opacity: 0,
    duration: 1,
  }).from('.header', {
    opacity: 0,
    duration: 1,
  }).from('.hero__title-inner span', {
    y: 200,
    duration: 1.5,
    ease: 'power3.out',
  }, '-=0.5').from('.hero__descr .letter', {
    stagger: 0.05,
    duration: 0.1,
    opacity: 0,
  }).from('.hero__btn', {
    opacity: 0,
    duration: 0.5,
  }).from('.cards', {
    opacity: 0,
    duration: 0.5,
  });
}