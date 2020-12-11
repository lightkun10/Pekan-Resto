import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { restoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restaurants');
    restos.forEach((resto) => {
      restosContainer.innerHTML += restoItemTemplate(resto);
    });
  },
};

export default Favorite;
