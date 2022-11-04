// End to End Test
// Syarat:
// Menerapkan End to End Test dengan skenario:
// 1. Menyukai salah satu restoran. (Liking One Restaurant)
// 2. Batal menyukai restoran tersebut. (Unliking One Restaurant)

const assert = require('assert')
Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see('', 'section#restaurants')
  I.amOnPage('/')
  I.seeElement('.name a')

  const firstRestaurant = locate('.name a').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  console.log(firstRestaurantName)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('restaurant-item')

  const likedRestaurantName = await I.grabTextFrom('.name')
  console.log(likedRestaurantName)
  assert.strictEqual(firstRestaurantName, likedRestaurantName)
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('', 'section#restaurants')
  I.amOnPage('/')
  I.seeElement('.name a')

  const firstRestaurant = locate('.name a').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  console.log(firstRestaurantName)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('restaurant-item')

  const likedRestaurantName = await I.grabTextFrom('.name')
  assert.strictEqual(firstRestaurantName, likedRestaurantName)

  I.click(likedRestaurantName)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.see('', 'section#restaurants')
})
