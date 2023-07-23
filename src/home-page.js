const homePage = (() => {
  const homePage = document.createElement('div')
  const welcomeText = document.createElement('div')
  const copyText = document.createElement('div')

  welcomeText.className = 'text-welcome'
  copyText.className = 'text-copy'

  welcomeText.innerHTML =
    '🌙🦇 Welcome to Vampire Entrees, where mortal delicacies meet immortal' +
    'delights! Unleash your inner nocturnal spirit and embark on a ' +
    'fang-tastic culinary journey that will leave you enchanted with every ' +
    'bite! 🍽️🩸🖤 <br /> You need your #factcheck? Here is a review from one of our star guest:'

  copyText.innerHTML =
    "Omg, brace yourselves, fellow night creatures, 'cause The Vampire" +
    'Entrees is the bomb dot com! 🌙🦇 As Count Dracula, I have to say, this' +
    'place is like my crypt away from home! 🏰💜 From the moment I descended' +
    'into this dining haven, I felt a dark, bewitching ambiance that spoke to' +
    "my immortal soul! 👻🕯️ Now, let's talk about the 'Bloody Hell' steak" +
    "entree! 🥩🩸 It's positively sinful! The aged prime beef, infused with" +
    'Transylvanian magic, is seared to perfection! 😍 And that blood-red wine' +
    'reduction sauce is to die for! 🍷💀 Calling all mortals and creatures of' +
    'the night, you MUST sink your fangs into this fang-tastic feast!' +
    "<div class='text-copy-author'>🖤 Count D. ⚡🌕</div>"
    
    homePage.append(welcomeText, copyText)
    homePage.className = "content"

    return homePage
})()

export default homePage