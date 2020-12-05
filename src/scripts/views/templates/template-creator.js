/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';

const restoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__thumbnail" alt="${resto.name}"
        src="${CONFIG.BASE_IMAGE_SMALL_URL}${resto.pictureId}">
        <div class="resto-item__header__rating">
          <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
`;

const restoDetailTemplate = (resto) => `
  <h2 class="resto__name">${resto.name}</h2>
  <img class="resto__img" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + resto.pictureId}" alt="${resto.name}">
  <div class="resto__info">
    <h3>Address</h3>
    <p>${resto.address}</p>
    <h3>Categories</h3>
    ${resto.categories.map((category) => `${category.name}`).join(', ')}
    <h4>Rating</h4>
    <p>${resto.rating}</p>
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
        ${review.date}
        <strong>${review.name}</strong>
        ${review.review}
      </div>
    `).join('')}
  <div>
`;

export { restoItemTemplate, restoDetailTemplate };
