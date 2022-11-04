import CONFIG from '../../globals/config.js'

class RestaurantItem extends HTMLElement {
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
        <div tabindex="0" class="card">
          <img tabindex="0" class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + this._restaurant.pictureId}" alt="Gambar Restoran ${this._restaurant.name}">
          <div tabindex="0" class="con-city">
              <h3 tabindex="0" class="city-name">${this._restaurant.city}</h3>
          </div>
          <div class="inner-card">
              <p tabindex="0" class="rating text">Rating: ⭐️${this._restaurant.rating}</p>
              <h3 tabindex="0" class="name"><a tabindex="0" href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h3>
              <hr>
              <p tabindex="0" class="description text">${this._restaurant.description}</p>
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('restaurant-item', RestaurantItem)
