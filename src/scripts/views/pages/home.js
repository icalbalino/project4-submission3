import TheRestaurantDbSource from '../../data/therestaurantdb-source.js'
import '../templates/restaurant-item.js'

const Home = {
  async render () {
    return `
      <div class="con-title">
          <h2 tabindex="0" class="sub-title">Explore Restaurant</h2>
          <hr>
      </div>
      <section id="restaurants" class="restaurants"></section>
    `
  },

  async afterRender () {
    const restaurants = await TheRestaurantDbSource.home()
    const restaurantsContainer = document.querySelector('#restaurants')

    restaurants.forEach((restaurant) => {
      const restaurantsContainerItem = document.createElement('restaurant-item')
      restaurantsContainerItem.restaurant = restaurant
      restaurantsContainer.appendChild(restaurantsContainerItem)
    })
  }
}

export default Home
