import API_ENDPOINT from '../globals/api-endpoint.js'

class TheRestaurantDbSource {
  static async home () {
    const response = await fetch(API_ENDPOINT.HOME)
    const responseJson = await response.json()
    const restaurants = responseJson.restaurants
    return restaurants
  }

  static async detail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    const restaurant = responseJson.restaurant
    return restaurant
  }
}

export default TheRestaurantDbSource
