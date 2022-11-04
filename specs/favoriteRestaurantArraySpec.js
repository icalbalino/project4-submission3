import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract.js'

let favoriteRestaurants = []

const getRestaurant = (id) => {
  if (!id) {
    return
  }
  return favoriteRestaurants.find((restaurant) => restaurant.id === id)
}

const getAllRestaurants = () => favoriteRestaurants

const putRestaurant = (restaurant) => {
  if (!restaurant.hasOwnProperty('id')) {
    return
  }
  if (favoriteRestaurants.some((favoriteRestaurant) => favoriteRestaurant.id === restaurant.id)) {
    return
  }
  favoriteRestaurants.push(restaurant)
}

const deleteRestaurant = (id) => {
  favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id)
}

const searchRestaurants = (query) => {
  return favoriteRestaurants.filter((restaurant) => {
    const loweredCaseRestaurantTitle = (restaurant.title || '-').toLowerCase()
    const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(/\s/g, '')
    const loweredCaseQuery = query.toLowerCase()
    const jammedQuery = loweredCaseQuery.replace(/\s/g, '')
    return jammedRestaurantTitle.indexOf(jammedQuery) !== -1
  })
}

const FavoriteRestaurantArray = {
  getRestaurant,
  getAllRestaurants,
  putRestaurant,
  deleteRestaurant,
  searchRestaurants
}

// favoriteRestaurant = FavoriteRestaurantArray

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(async () => {
    favoriteRestaurants = []
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray)
})

// afterEach(async () => {
//   favoriteRestaurants = []
// })
