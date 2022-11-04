import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import './views/templates/restaurant-item.js'
import './views/templates/restaurant-detail.js'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from './views/app.js'
import swRegister from './utils/sw-register.js'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent')
})

const menu = document.querySelector('#menu')
const hero = document.querySelector('.hero')
const drawer = document.querySelector('#drawer')

window.addEventListener('hashchange', event => {
  app.renderPage()
  event.stopPropagation()
})

window.addEventListener('load', event => {
  app.renderPage()
  swRegister()
  event.stopPropagation()
})

menu.addEventListener('focus', event => {
  drawer.classList.add('open')
  event.stopPropagation()
})

menu.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    drawer.classList.toggle('open')
    event.stopPropagation()
  }
})

hero.addEventListener('click', event => {
  drawer.classList.remove('open')
  event.stopPropagation()
})
