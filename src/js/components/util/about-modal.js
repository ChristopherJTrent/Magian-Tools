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
		const description = document.createElement('p')
		description.innerText = 'Calculate your tp per hit with this tool. Input your haste+% into the first grid of boxes, and your Store TP+ into the second grid. The sidebar will update with your overall haste percentage and tp per hit.'
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
		card.appendChild(new FlexBreak().render())
		card.appendChild(description)
		this.appendChild(card)
		return this.finalize()
	}
	static closeModal() {
		const modal = document.getElementById('about-modal')
		modal.classList.remove('active')
	}
}