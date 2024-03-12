import { Component } from "../../lib/Nyzul/index.mjs";


export default class Header extends Component {
    LINKEDIN_URL = 'https://www.linkedin.com/in/christopher-trent-95b581190/'
    GITHUB_URL   = 'https://github.com/ChristopherJTrent'
    constructor() { 
        super() 
        this.element.id = 'header'
        this.element.classList.add('flexContainer', 'horizontal', 'center')
    }
    render() {
        const icon = document.createElement('img')
        icon.setAttribute('src', 'icon.webp')
        icon.classList.add('brand-icon');
        this.element.appendChild(icon)

        const title = document.createElement('p')
        title.classList.add('title-text')
        title.innerText = 'Magian Calc'
        this.appendChild(title);

        const socials = document.createElement('span')
        socials.classList.add('flexRight', 'socials')
        socials.appendChild(this.linkedin())
        socials.appendChild(this.github())
        this.appendChild(socials)
        
        return this.finalize();
    }
    linkedin() {
        const linkedin = document.createElement('a')
        const linkedinSymbol = document.createElement('i')
        linkedinSymbol.classList.add('fa-brands', 'fa-linkedin')
        linkedin.setAttribute('href', this.LINKEDIN_URL)
        linkedin.appendChild(linkedinSymbol);
        return linkedin
    }
    github() {
        const github = document.createElement('a')
        const githubSymbol = document.createElement('i')
        githubSymbol.classList.add('fa-brands', 'fa-github')
        github.setAttribute('href', this.GITHUB_URL)
        github.appendChild(githubSymbol);
        return github
    }
}