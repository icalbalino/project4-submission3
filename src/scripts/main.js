// const datajson = require('../DATA.json')
// const data = []
// datajson.restaurants.forEach((item) => {
//   data.push(item)
// })

// const main = () => {
//   const makeCard = (item) => {
//     const card = document.createElement('div')
//     card.setAttribute('tabindex', '0')
//     card.classList.add('card')

//     const img = document.createElement('img')
//     img.setAttribute('tabindex', '0')
//     img.setAttribute('src', item.pictureId)
//     img.setAttribute('alt', `Gambar Restoran ${item.name}`)

//     const conCity = document.createElement('div')
//     conCity.setAttribute('tabindex', '0')
//     conCity.classList.add('con-city')
//     const city = document.createElement('h3')
//     city.setAttribute('tabindex', '0')
//     city.classList.add('city-name')
//     city.innerText = item.city
//     conCity.appendChild(city)

//     const innerCard = document.createElement('div')
//     innerCard.classList.add('inner-card')

//     const rating = document.createElement('p')
//     rating.setAttribute('tabindex', '0')
//     rating.classList.add('rating', 'text')
//     rating.innerText = 'Rating: ' + item.rating

//     const name = document.createElement('h3')
//     name.setAttribute('tabindex', '0')
//     name.classList.add('name')
//     name.innerText = item.name
//     const hr = document.createElement('hr')

//     const description = document.createElement('p')
//     description.setAttribute('tabindex', '0')
//     description.classList.add('description', 'text')
//     description.innerText = item.description

//     innerCard.appendChild(rating)
//     innerCard.appendChild(name)
//     innerCard.appendChild(hr)
//     innerCard.appendChild(description)
//     card.appendChild(img)
//     card.appendChild(conCity)
//     card.appendChild(innerCard)
//     return card
//   }

//   const makeArticle = (item) => {
//     const article = document.createElement('article')
//     article.setAttribute('id', item.id)
//     const card = makeCard(item)
//     article.appendChild(card)
//     return article
//   }

//   const makeSection = () => {
//     const section = document.createElement('section')
//     for (const item of data) {
//       const article = makeArticle(item)
//       section.appendChild(article)
//     }
//     return section
//   }

//   const section = makeSection()
//   const main = document.querySelector('main')
//   main.appendChild(section)

//   const menu = document.querySelector('#menu')
//   const hero = document.querySelector('.hero')
//   const drawer = document.querySelector('#drawer')

//   menu.addEventListener('click', event => {
//     drawer.classList.toggle('open')
//     event.stopPropagation()
//   })
//   menu.addEventListener('focus', event => {
//     drawer.classList.add('open')
//     event.stopPropagation()
//   })
//   menu.addEventListener('keydown', event => {
//     if (event.keyCode === 13) {
//       drawer.classList.toggle('open')
//       event.stopPropagation()
//     }
//   })
//   hero.addEventListener('click', () => {
//     drawer.classList.remove('open')
//   })
//   main.addEventListener('click', () => {
//     drawer.classList.remove('open')
//   })
// }

// export default main
