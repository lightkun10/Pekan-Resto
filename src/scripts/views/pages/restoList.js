import DicodingSource from '../../data/dicoding-source';

const RestoList = {

  async render() {
    return `
      <h2>Restaurant List</h2>
    `;
  },

  async afterRender() {
    const restos = await DicodingSource.restoList();
    console.log(restos);
  },

};

export default RestoList;
