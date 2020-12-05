import DicodingSource from '../../data/dicoding-source';
import UrlParser from '../../routes/url-parser';
import { createLikeButtonTemplate, restoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DicodingSource.detailResto(url.id);
    // console.log(resto.restaurant);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = restoDetailTemplate(resto.restaurant);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        address: resto.restaurant.address,
        categories: resto.restaurant.categories,
        menus: resto.restaurant.menus,
        rating: resto.restaurant.rating,
        customerReviews: resto.restaurant.customerReviews,
      },
    });
  },

};

export default Detail;
