import { Component } from '../../lib/Nyzul/index.mjs'
import FlexBreak from './flex-break.js'

export default class AboutModal extends Component {
	constructor() {
		super()
		this.element.id = 'about-modal'
	}
	render() {
		const card = document.createElement('div')
		card.classList.add('materialCard')
		const closeButton = document.createElement('button')
		closeButton.classList.add('styledButton')
		closeButton.innerText = 'Close'
		closeButton.addEventListener('click', AboutModal.closeModal)
		const title = document.createElement('p')
		title.classList.add('title-text')
		title.innerText = 'About'
		
		const titleBar = document.createElement('div')
		titleBar.classList.add('flexContainer', 'horizontal', 'center', 'titlebar')
		titleBar.appendChild(title)
		titleBar.appendChild(closeButton)
		card.appendChild(titleBar)
		AboutModal.generateCopy(card)
		card.appendChild(new FlexBreak().render())
		this.appendChild(card)
	}
	/**
	 * 
	 * @param {HTMLElement|NyzulNode} parent 
	 */
	static generateCopy(parent) {
		const elements = []
		const appDescription = document.createElement('p')
		appDescription.innerText = 'Magian Calc is a port of XIcalc\'s delay calculator.'
		elements.push(appDescription)

		const equipmentHeading = document.createElement('h3')
		const equipmentDescription = document.createElement('p')
		equipmentHeading.innerText = 'Equipment'
		equipmentDescription.innerText = 'Input your equipment stats into the boxes on the first card'
		elements.push(equipmentHeading, equipmentDescription)

		const magicHeading = document.createElement('h3')
		const magicDescription = document.createElement('p')
		magicHeading.innerText = 'Magic'
		magicDescription.innerText = 'Input your expected magical haste using the inputs on the second card. White/Blue magic haste does not stack except for Mighty Guard and Embrava.'
		elements.push(magicHeading, magicDescription)

		elements.forEach((e) => parent.appendChild(e))
	} 
	static closeModal() {
		const modal = document.getElementById('about-modal')
		modal.classList.remove('active')
	}
}