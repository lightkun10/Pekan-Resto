import data from "../DATA.json";

/*
<article class="restaurant-item">
    <img class="restaurant-item__thumbnail" 
        src="https://dicoding-restaurant-api.el.r.appspot.com/images/medium/07" 
        alt="restaurant picture">
    <div class="restaurant-item__content">
        <h1 class="resturant-item__name">Run The Gun</h1>
        <p class="restaurant-item__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
        <p class="resturant-item__city">Bali</p>
        <p class="resturant-item__rating">4.6</p>
    </div>
</article>
*/

const Doms = (function() {
    // console.log("Hello from doms!")

    const _restaurantsSection = document.querySelector(".restaurants");

    console.log(data.restaurants);

    const displayRestaurants = () => {
        data.restaurants.forEach(restaurant => {
            let article = document.createElement("article");
            article.className = "restaurant-item";
                let artiImg = document.createElement("img");
                artiImg.className = "restaurant-item__thumbnail";
                artiImg.src = `${restaurant['pictureId']}`;
                

                article.append(artiImg);
    
            _restaurantsSection.appendChild(article);
        })
    }
    

    return { displayRestaurants }
})();

export { Doms }