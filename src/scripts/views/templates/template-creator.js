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

// export { restoItemTemplate };
export default restoItemTemplate;
