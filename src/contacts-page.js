const contactsPage = (() => {

    const content = document.createElement('div')
    const contactsHeading = document.createElement('div')
    const contactsInfo = document.createElement('div')

    contactsHeading.className = 'text-contacts-h1'
    contactsInfo.className = 'text-contacts-info'
    content.className = 'content'

    contactsHeading.textContent = 'Any enquiries or wanna make a reservation?'
    contactsInfo.innerHTML = '<i>Call us at +666-10458204</i> <br/> or <br/>  email us at thevampireentrees@fangs.com.' +
    '<br/> <br/>We can\'t wait to hear from you (or seat you). If we ghost you, dinner is on us!'

    content.append(contactsHeading, contactsInfo)
    return content
})();

export default contactsPage;