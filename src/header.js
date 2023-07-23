const header = (() => {
    const header = document.createElement("div");
    const logo = document.createElement("div");
    const navbar = document.createElement("ul");

    header.className = "header"
    logo.className = "logo"
    navbar.className = "navbar"

    logo.textContent = "My Vampire Entrees"

    const linkTexts = ["About Uz", "Our Bloody Menu", "Hit Us Up"]
    const links = linkTexts.map(item => {
        const li = document.createElement('li');
        li.textContent = item;
        return li;
    })
    navbar.append(...links)
    header.append(logo, navbar)

    return header
})();

export default header;