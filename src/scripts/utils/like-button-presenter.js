// import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb.js'
import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/template-creator.js'

const LikeButtonPresenter = {
  async init ({ likeButtonContainer, favoriteRestaurant, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._favoriteRestaurant = favoriteRestaurant
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant
    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestaurantExist (id) {
    // const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)
    const restaurant = await this._favoriteRestaurant.getRestaurant(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      // await FavoriteRestaurantIdb.putRestaurant(this._restaurant)
      await this._favoriteRestaurant.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      // await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id)
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default LikeButtonPresenter
