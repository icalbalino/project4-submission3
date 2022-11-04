import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js'
import '../templates/restaurant-item.js'

const Favorite = {
  async render () {
    return `
      <div class="con-title">
          <h2 tabindex="0" class="sub-title">Favorite Restaurant</h2>
          <hr>
      </div>
      <section id="restaurants" class="restaurants"></section>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#restaurants')

    restaurants.forEach((restaurant) => {
      const restaurantsContainerItem = document.createElement('restaurant-item')
      restaurantsContainerItem.restaurant = restaurant
      restaurantsContainer.appendChild(restaurantsContainerItem)
    })
  }
}

export default Favorite
