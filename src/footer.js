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
    'Background image by <a href="https://www.freepik.com/free-vector/halloween-bat-decor-paper-cut-style_10817112.htm#page=2&query=bats&position=19&from_view=search&track=sph">zaie</a>' +
    'on Freepik. <br /> Parchment image by <a href="https://www.freepik.com/free-vector/blank-brown-paper-design_15228111.htm#query=scroll&position=45&from_view=search&track=sph">rawpixel.com</a>' +
    'on Freepik. <br /> Icons are created by flaticon, and menu images generated with Freepik AI generator. </div>'

    footer.append(infoAddress, infoOperatingHours, infoCredits)
    return footer
}
)();

export default footer