import data from "../DATA.json";

const Doms = (function() {
    // console.log("Hello from doms!")

    const _restaurantsSection = document.querySelector(".restaurants");

    const displayRestaurants = () => {
        data.restaurants.forEach(restaurant => {
            let restoItem = document.createElement("article");
            restoItem.className = "restaurant-item";
                let restoImg = document.createElement("img");
                restoImg.className = "restaurant-item__thumbnail";
                restoImg.src = `${restaurant['pictureId']}`;
                restoImg.setAttribute("alt", "restaurant picture");
                
                let restoCont = document.createElement("div");
                restoCont.className = "restaurant-item__content";
                    let restoName = document.createElement("h1");
                    restoName.className = "restaurant-item__name";
                    restoName.textContent = restaurant["name"];
                    let restoCity = document.createElement("p");
                    restoCity.className = "restaurant-item__city";
                    restoCity.textContent = restaurant["city"];
                    let restoDesc = document.createElement("p");
                    restoDesc.className = "restaurant-item__description";
                    restoDesc.textContent = restaurant["description"];
                    let restoRating = document.createElement("p");
                    restoRating.className = "restaurant-item__rating";
                    restoRating.textContent = `${restaurant["rating"]} / 5`;
                restoCont.append(restoName, restoCity, restoDesc, restoRating);

                restoItem.append(restoImg, restoCont);
    
            _restaurantsSection.appendChild(restoItem);
        })
    }
    

    return { displayRestaurants }
})();

export { Doms }