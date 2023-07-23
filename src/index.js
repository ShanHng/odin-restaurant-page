import './style.css'
import homePage from './home-page'
import menuPage from './menu-page'
import contactsPage from './contacts-page'

const body = document.querySelector('body')
let content = homePage

const header = (() => {
  const header = document.createElement('div')
  const logo = document.createElement('div')
  const navbar = document.createElement('ul')

  header.className = 'header'
  logo.className = 'logo'
  navbar.className = 'navbar'

  logo.textContent = 'My Vampire Entrees'

  const linkTexts = ['About Uz', 'Our Bloody Menu', 'Hit Us Up']

  const links = linkTexts.map(item => {
    const li = document.createElement('li')
    li.textContent = item
    return li
  })

  const [homePageLink, menuPageLink, contactsPageLink] = links

  function linkHandlerFactory (page) {
    return function linkHandler (event) {
        homePageLink.classList = ''
        contactsPageLink.classList = ''
        menuPageLink.classList = ''

        body.replaceChildren(header, page, footer)
        content = page
        event.target.className = 'selected'
    }
  }

  homePageLink.addEventListener('click', linkHandlerFactory(homePage))
  contactsPageLink.addEventListener('click', linkHandlerFactory(contactsPage))
  menuPageLink.addEventListener('click', linkHandlerFactory(menuPage))

  homePageLink.className = 'selected'
  navbar.append(homePageLink, menuPageLink, contactsPageLink)
  header.append(logo, navbar)

  return header
})()

const footer = (() => {
  const footer = document.createElement('div')
  const infoOperatingHours = document.createElement('div')
  const infoAddress = document.createElement('div')
  const infoCredits = document.createElement('div')

  footer.className = 'footer'
  infoOperatingHours.className = 'text-hours'
  infoAddress.className = 'text-address'
  infoCredits.className = 'text-credits'

  infoOperatingHours.innerHTML = 'Operating hours: <br /> 7pm - 7am'
  infoAddress.innerHTML =
    'Address: <br /> 123 Nightshade Lane, Transylvanian Haven, Darkshire, TRN 66666'
  infoCredits.innerHTML =
    'Background image by <a href="https://www.freepik.com/free-vector/halloween-bat-decor-paper-cut-style_10817112.htm#page=2&query=bats&position=19&from_view=search&track=sph">zaie</a> ' +
    'on Freepik. <br /> Parchment image by <a href="https://www.freepik.com/free-vector/blank-brown-paper-design_15228111.htm#query=scroll&position=45&from_view=search&track=sph">rawpixel.com</a> ' +
    'on Freepik. <br /> Icons are created by flaticon. </div>'

  footer.append(infoAddress, infoOperatingHours, infoCredits)
  return footer
})()

body.append(header, content, footer)
