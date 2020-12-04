/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';

const _showCategories = (categories) => {
  const p = document.createElement('p');
  categories.forEach((category) => {
    p.innerHTML += `${category.name} `;
  });

  return p;
};

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
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${resto.address}</p>
    <h4>Categories</h4>
    ${_showCategories(resto.categories).innerHTML}
  </div>
`;

export { restoItemTemplate, restoDetailTemplate };
