import DicodingSource from '../../data/dicoding-source';
import { restoItemTemplate, restoDetailTemplate } from '../templates/template-creator';

const RestoList = {

  async render() {
    return `
      <div class="content">
        <div id="restaurants" class="restaurants">
  
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await DicodingSource.restoList();
    const restosContainer = document.querySelector('#restaurants');
    restos.forEach((resto) => {
      restosContainer.innerHTML += restoItemTemplate(resto);
    });
  },

};

export default RestoList;
