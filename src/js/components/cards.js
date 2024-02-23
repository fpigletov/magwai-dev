export function cards() {
  //Show Cards
  const cardsBtn = document.querySelector('.cards__btn');
  const cardsBody = document.querySelector('.cards__body');
  let quantity = 0;
  let limit = 0;
  let content = '';

  if (cardsBtn) {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);

    if (viewportWidth <= 480) {
      cardsBody.classList.add('hide');
      limit = 25;
      content = `<li class="cards__item cards-item">
        <a href="#" class="cards-item__link">
          <div class="cards-item__img">
            <picture>
              <source srcset="img/cards/cards-1.webp 1x, img/cards/cards-1-2x.webp 2x" type="image/webp">
              <img loading="lazy" src="img/cards/cards-1.jpg" srcset="img/cards/cards-1-2x.jpg 2x" alt="Монеты">
            </picture>
          </div>
          <div class="cards-item__content">
            <span class="cards-item__tag">bridge</span>
            <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
            <p class="cards-item__descr">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
              sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
            </p>
            <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
            <span class="cards-item__btn">Continue reading</span>
          </div>
        </a>
      </li>
      <li class="cards__item cards-item">
        <a href="#" class="cards-item__link">
          <div class="cards-item__img">
            <picture>
              <source srcset="img/cards/cards-2.webp 1x, img/cards/cards-2-2x.webp 2x" type="image/webp">
              <img loading="lazy" src="img/cards/cards-2.jpg" srcset="img/cards/cards-2-2x.jpg 2x" alt="Монеты">
            </picture>
          </div>
          <div class="cards-item__content">
            <span class="cards-item__tag">Water</span>
            <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
            <p class="cards-item__descr">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
              sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
            </p>
            <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
            <span class="cards-item__btn">Continue reading</span>
          </div>
        </a>
      </li>
      <li class="cards__item cards-item">
        <a href="#" class="cards-item__link">
          <div class="cards-item__img">
            <picture>
              <source srcset="img/cards/cards-3.webp 1x, img/cards/cards-3-2x.webp 2x" type="image/webp">
              <img loading="lazy" src="img/cards/cards-3.jpg" srcset="img/cards/cards-3-2x.jpg 2x" alt="Монеты">
            </picture>
          </div>
          <div class="cards-item__content">
            <span class="cards-item__tag">bridge</span>
            <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
            <p class="cards-item__descr">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
              sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
            </p>
            <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
            <span class="cards-item__btn">Continue reading</span>
          </div>
        </a>
      </li>
      <li class="cards__item cards-item">
        <a href="#" class="cards-item__link">
          <div class="cards-item__img">
            <picture>
              <source srcset="img/cards/cards-4.webp 1x, img/cards/cards-4-2x.webp 2x" type="image/webp">
              <img loading="lazy" src="img/cards/cards-4.jpg" srcset="img/cards/cards-4-2x.jpg 2x" alt="Монеты">
            </picture>
          </div>
          <div class="cards-item__content">
            <span class="cards-item__tag">bridge</span>
            <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
            <p class="cards-item__descr">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
              sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
            </p>
            <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
            <span class="cards-item__btn">Continue reading</span>
          </div>
        </a>
      </li>
      <li class="cards__item cards-item">
        <a href="#" class="cards-item__link">
          <div class="cards-item__img">
            <picture>
              <source srcset="img/cards/cards-5.webp 1x, img/cards/cards-5-2x.webp 2x" type="image/webp">
              <img loading="lazy" src="img/cards/cards-5.jpg" srcset="img/cards/cards-5-2x.jpg 2x" alt="Монеты">
            </picture>
          </div>
          <div class="cards-item__content">
            <span class="cards-item__tag">bridge</span>
            <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
            <p class="cards-item__descr">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
              sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
            </p>
            <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
            <span class="cards-item__btn">Continue reading</span>
          </div>
        </a>
      </li>`
    } else {
      cardsBody.classList.remove('hide');
      limit = 20;
      content = `<li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-1.webp 1x, img/cards/cards-1-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-1.jpg" srcset="img/cards/cards-1-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">bridge</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-2.webp 1x, img/cards/cards-2-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-2.jpg" srcset="img/cards/cards-2-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">Water</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-3.webp 1x, img/cards/cards-3-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-3.jpg" srcset="img/cards/cards-3-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">bridge</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-4.webp 1x, img/cards/cards-4-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-4.jpg" srcset="img/cards/cards-4-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">bridge</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-5.webp 1x, img/cards/cards-5-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-5.jpg" srcset="img/cards/cards-5-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">bridge</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-6.webp 1x, img/cards/cards-6-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-6.jpg" srcset="img/cards/cards-6-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">forest</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-7.webp 1x, img/cards/cards-7-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-7.jpg" srcset="img/cards/cards-7-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">nature</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-8.webp 1x, img/cards/cards-8-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-8.jpg" srcset="img/cards/cards-8-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">nature</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-9.webp 1x, img/cards/cards-9-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-9.jpg" srcset="img/cards/cards-9-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">nature</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-10.webp 1x, img/cards/cards-10-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-10.jpg" srcset="img/cards/cards-10-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">nature</span>
                <h3 class="cards-item__title">How to increase your productivity with a Music</h3>
                <p class="cards-item__descr">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem
                  sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>`
    }

    cardsBtn.addEventListener('click', () => {
      cardsBody.classList.remove('hide');

      showCards().then((data) => {
        quantity += 5;


        addCard(data, quantity);

        if (quantity >= limit) {
          cardsBtn.setAttribute('disabled', true)
        }

      }).catch(() => {
        cardsBtn.setAttribute('disabled', true)
      });
    });

    async function showCards() {
      const url = 'https://jsonplaceholder.typicode.com/posts';

      try {
        const response = await fetch(url, {
          method: 'GET'
        });
        const result = await response.json();

        return result;
      } catch (e) {
        console.error(e);
      }
    }

    function addCard(data, quantity) {

      cardsBody.innerHTML = content;

      for (let i = 0; i < limit; i++) {
        if (i < quantity) {
          let item = data[i];

          cardsBody.innerHTML += `
          <li class="cards__item cards-item">
            <a href="#" class="cards-item__link">
              <div class="cards-item__img">
                <picture>
                  <source srcset="img/cards/cards-1.webp 1x, img/cards/cards-1-2x.webp 2x" type="image/webp">
                  <img loading="lazy" src="img/cards/cards-1.jpg" srcset="img/cards/cards-1-2x.jpg 2x" alt="Монеты">
                </picture>
              </div>
              <div class="cards-item__content">
                <span class="cards-item__tag">bridge</span>
                <h3 class="cards-item__title">${item.title}</h3>
                <p class="cards-item__descr">
                  ${item.body}
                </p>
                <span class="cards-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</span>
                <span class="cards-item__btn">Continue reading</span>
              </div>
            </a>
          </li>
        `;
        }
      }
    }
  }
}