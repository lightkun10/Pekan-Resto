import DicodingSource from '../../data/dicoding-source';
import UrlParser from '../../routes/url-parser';
import { restoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DicodingSource.detailResto(url.id);
    // console.log(resto.restaurant);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = restoDetailTemplate(resto.restaurant);
  },

};

export default Detail;
