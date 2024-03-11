import { Component } from "../lib/Nyzul/index.mjs";


export default class Header extends Component {
    LINKEDIN_URL = 'https://www.linkedin.com/in/christopher-trent-95b581190/'
    GITHUB_URL   = 'https://github.com/ChristopherJTrent'
    constructor() { 
        super() 
        this.element.id = 'header'
    }
    render() {
        const icon = document.createElement('img')
        icon.setAttribute('src', 'icon.webp')
        icon.classList.add('brand-icon');
        this.element.appendChild(icon)

        

        return this.element

    }
    linkedin() {
        const linkedin = document.createElement('a')
        const linkedinSymbol = document.createElement('i')
        linkedinSymbol.classList.add('fa-brands', 'fa-linkedin')
        linkedin.setAttribute('href', this.LINKEDIN_URL)
        linkedin.appendChild(linkedinSymbol);
        return linkedin
    }
    linkedin() {
        const github = document.createElement('a')
        const githubSymbol = document.createElement('i')
        githubSymbol.classList.add('fa-brands', 'fa-github')
        github.setAttribute('href', this.GITHUB_URL)
        github.appendChild(githubSymbol);
        return github
    }
}