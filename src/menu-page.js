import IMAGE_BLOODY_HELL from './resource/bloody-steak.png'
import IMAGE_PEPPA_PIG from './resource/pulled-pork.png'
import IMAGE_RAINBOW_PUKE from './resource/rainbow-puke.png'
import IMAGE_BLOOD_CELLS from './resource/blood-cells.png'

function MenuItem (title, desc, imgPath, price, type) {
  this.title = title
  this.desc = desc
  this.imgPath = imgPath
  this.price = price
  this.type = type
}

const menuItems = [
  new MenuItem(
    'Bloody Hell',
    'Some A5 wagyu premium cuts with some grilled asparagus on the side and our house special BloodJuice!',
    IMAGE_BLOODY_HELL,
    '$20.70',
    'Main'
  ),
  new MenuItem(
    'Peppa Pig',
    'Slimy pesto on top of our childhood fave, Peppa Pig in its true form roasted to perfection! Some handbattered onion rings on the side.',
    IMAGE_PEPPA_PIG,
    '$16.50',
    'Main'
  ),
  new MenuItem(
    'Rainbow Puke',
    'All these colorful but nasty veggies make me puke, but you do you... Thank Satan we have some fresh tuna sashimi to make it less disastrous.',
    IMAGE_RAINBOW_PUKE,
    '$19.70',
    'Main'
  ),
  new MenuItem(
    'RBC&WBC',
    'We made human blood sweet here! The luscious blood red pudding pairs exquisitely with the white vanilla ice cream.',
    IMAGE_BLOOD_CELLS,
    '$10.70',
    'Dessert'
  )
]

const menuCardFactory = item => {
  const container = document.createElement('div')
  const img = document.createElement('img')
  const title = document.createElement('div')
  const description = document.createElement('div')
  const type = document.createElement('div')

  container.className = 'menu-card'
  title.className = 'menu-card-title'
  img.className = 'menu-card-img'
  description.className = 'menu-card-desc'
  type.className = 'menu-card-type'

  type.textContent = item.type
  title.textContent = item.title + ' | ' + item.price
  img.src = item.imgPath
  description.textContent = item.desc

  container.append(img, type, title, description)
  return container
}

const menuPage = (() => {
  const content = document.createElement('div')
  content.className = 'content'

  const menuHeading = document.createElement('div')
  menuHeading.className = 'text-menu-h1'
  menuHeading.textContent =
    'Some bloody delights to warm you up or cool you down.'

  const menuCards = menuItems.map(item => menuCardFactory(item))

  content.append(...menuCards)

  return content
})()

export default menuPage
