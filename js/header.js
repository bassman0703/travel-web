class HeaderNav {
    async getNavigation() {
        fetch('nav.json')
            .then(async res => {
                const data = await res.json()

                var navigation = document.querySelector('#nav')
            
                data.forEach(element => {
                 
                    const navItem = document.createElement('li')
                    navItem.setAttribute('class', 'nav-item nav-li')
                    navItem.innerHTML = `<a class="nav-link nav-a text-light nav-text mr-5" href="${element.url}">${element.name}</a>`
                    navigation.appendChild(navItem)
                });
            })
    }
}