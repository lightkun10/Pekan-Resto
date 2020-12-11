import CONFIG from '../../globals/config';

const restoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__thumbnail" alt="${resto.name}"
        src="${CONFIG.BASE_IMAGE_SMALL_URL}${resto.pictureId}"
        crossorigin="anonymous">
        <div class="resto-item__header__rating">
          <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h2><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h2>
        <h3 class="resto-item__content__city">${resto.city}</h3>
        <p>${resto.description}</p>
    </div>
  </div>
`;

const restoDetailTemplate = (resto) => `
  <h2 class="resto__name">${resto.name}</h2>
  <img class="resto__img" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + resto.pictureId}" alt="${resto.name}" crossorigin="anonymous">
  <div class="resto__info">
    <div class="resto__info__address">
      <h3>Address</h3>
      <h4>${resto.city}</h4>
      <p>${resto.address}</p>
    </div>
    <div class="resto__info__categories">
      <h3>Categories</h3>
      ${resto.categories.map((category) => `${category.name}`).join(', ')}
    </div>
    <div class="resto__info__rating">
      <h3>Rating</h3>
      <p>⭐️${resto.rating}</p>
    </div>
  </div>

  <div class="resto__menus">
    <h3>Menus</h3>
    <div class="resto__menus__foods">
      <h4>Foods:</h4>
      <ul>${resto.menus.foods.map((food) => `<li class="resto__menus__food">${food.name}</li>`).join('')}</ul>
    </div>
    <div class="resto__menus__drinks">
      <h4>Drinks:</h4>
      <ul>${resto.menus.drinks.map((drink) => `<li class="resto__menus__drink">${drink.name}</li>`).join('')}</ul>
    </div>
  </div>

  <div class="resto__reviews">
    <h3>Reviews</h3>
    ${resto.customerReviews.map((review) => `
      <div class="resto__review">
        <div class="resto__review__date">${review.date}</div>
        <div class="resto__review__name"><strong>${review.name}</strong></div>
        <div class="resto__review__content">${review.review}</div>
      </div>
    `).join('')}
  <div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restoItemTemplate, restoDetailTemplate,
  createLikeButtonTemplate, createLikedButtonTemplate,
};
