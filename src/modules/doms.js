import data from '../DATA.json';

const Doms = (() => {
  const _restaurantsSection = document.querySelector('.restaurants');

  const displayRestaurants = () => {
    data.restaurants.forEach((restaurant) => {
      const restoItem = document.createElement('article');
      restoItem.className = 'restaurant-item';
      const restoImg = document.createElement('img');
      restoImg.className = 'restaurant-item__thumbnail';
      restoImg.src = `${restaurant.pictureId}`;
      restoImg.setAttribute('alt', 'restaurant picture');

      const restoCont = document.createElement('div');
      restoCont.className = 'restaurant-item__content';
      const restoRating = document.createElement('p');
      restoRating.className = 'restaurant-item__rating';
      restoRating.textContent = `Rating: ${restaurant.rating} / 5`;
      const restoName = document.createElement('h1');
      restoName.className = 'restaurant-item__name';
      restoName.textContent = restaurant.name;
      const restoCity = document.createElement('p');
      restoCity.className = 'restaurant-item__city';
      restoCity.textContent = `${restaurant.city}`;
      const restoDesc = document.createElement('p');
      restoDesc.className = 'restaurant-item__description';
      restoDesc.textContent = restaurant.description;
      restoCont.append(restoRating, restoName, restoCity, restoDesc);

      restoItem.append(restoImg, restoCont);

      _restaurantsSection.appendChild(restoItem);
    });
  };

  return { displayRestaurants };
})();

export default Doms;
