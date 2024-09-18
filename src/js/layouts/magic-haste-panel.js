import BardHaste from '../components/input/bard-haste.js'
import GeomancyHaste from '../components/input/geomancy-haste.js'
import WhiteBlueMagicHaste from '../components/input/white-blue-magic-haste.js'
import { Component } from '../lib/Nyzul/index.mjs'
import { Storehouse } from '../lib/Storehouse/index.mjs'


export default class MagicHastePanel extends Component {

	constructor() {
		super()
		this.element.classList.add('materialCard', 'flexContainer', 'spaceAround')
	}

	render() {
		this.appendComponent(new WhiteBlueMagicHaste())
		this.appendComponent(new BardHaste())
		this.appendComponent(new GeomancyHaste())
	}

	afterRender() {
		Storehouse.registerCombinatorProvider('total-magic-haste', [
			{ key: 'wb-magic-haste' },
			{ key: 'bard-haste'}
		])
	}
}