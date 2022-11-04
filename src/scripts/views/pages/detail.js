import UrlParser from '../../routes/url-parser.js'
import TheRestaurantDbSource from '../../data/therestaurantdb-source.js'
// import LikeButtonInitiator from '../../utils/like-button-initiator.js'
import LikeButtonPresenter from '../../utils/like-button-presenter.js'
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js'
import '../templates/restaurant-detail.js'

const Detail = {
  async render () {
    return `
      <div class="con-title">
          <h2 tabindex="0" class="sub-title">Detail Restaurant</h2>
          <hr>
      </div>
      <section id="restaurant" class="restaurant"></section>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await TheRestaurantDbSource.detail(url.id)
    const restaurantContainer = document.querySelector('#restaurant')
    const restaurantContainerDetail = document.createElement('restaurant-detail')

    restaurantContainerDetail.restaurant = restaurant
    restaurantContainer.appendChild(restaurantContainerDetail)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description
      }
    })
  }
}

export default Detail
