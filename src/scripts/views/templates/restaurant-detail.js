import CONFIG from '../../globals/config.js'

class RestaurantDetail extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  get restaurant () {
    return this._restaurant
  }

  render () {
    this.innerHTML = ''
    this.innerHTML = `
      <article id="${this._restaurant.id}">
        <div tabindex="0" class="card-detail">
          <h3 tabindex="0" class="name">${this._restaurant.name}</h3>
          <hr>
          <div class="card-detail-inner">
            <img tabindex="0" class="lazyload restaurant-img" data-src="${CONFIG.BASE_IMAGE_URL_LARGE + this._restaurant.pictureId}" alt="Gambar Restoran ${this._restaurant.name}">
            <div class="restaurant-info">
              <h3 tabindex="0" class="info">Information</h3>
              <h4 tabindex="0" class="sub-info">Rating</h4>
              <p tabindex="0" class="rating text">${this._restaurant.rating}</p>
              <h4 tabindex="0" class="sub-info">Cities</h4>
              <p tabindex="0" class="city text">${this._restaurant.city}</p>
              <h4 tabindex="0" class="sub-info">Address</h4>
              <p tabindex="0" class="address text">${this._restaurant.address}</p>
              <h4 tabindex="0" class="sub-info">Categories</h4>
              <p tabindex="0" class="categories text">${this._restaurant.categories.map((category) => category.name).join(', ')}</p>
              <h4 tabindex="0" class="sub-info">Menus</h4>
              <p tabindex="0" class="menu-foods text">Foods : ${this._restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
              <p tabindex="0" class="menu-drinks text">Drinks : ${this._restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
              <h4 tabindex="0" class="sub-info">Customer Reviews</h4>
              <p tabindex="0" class="customer-reviews text">${this._restaurant.customerReviews.map((review) => review.name).join(', ')}</p>
            </div>
          </div>
          <div class="restaurant-overview">
            <h3 tabindex="0" class="info">Overview</h3>
            <p tabindex="0" class="description text">${this._restaurant.description}</p>
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('restaurant-detail', RestaurantDetail)
