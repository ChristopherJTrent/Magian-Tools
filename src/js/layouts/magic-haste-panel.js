import BardHaste from '../components/input/bard-haste.js'
import WhiteBlueMagicHaste from '../components/input/white-blue-magic-haste.js'
import { Component } from '../lib/Nyzul/index.mjs'
import { sum } from '../lib/Storehouse/data/aggregators.js'
import { Storehouse } from '../lib/Storehouse/index.mjs'


export default class MagicHastePanel extends Component {

	constructor() {
		super()
		this.element.classList.add('materialCard', 'flexContainer', 'spaceAround')
	}

	render() {
		this.appendComponent(new WhiteBlueMagicHaste())
		this.appendComponent(new BardHaste())

		this.afterRender()
		return this.finalize()
	}

	afterRender() {
		Storehouse.registerCombinatorProvider('total-magic-haste', [
			{ key: 'wb-magic-haste' },
			{ key: 'bard-haste'}
		], (vals) => Math.max(sum(vals.map((v) => parseInt(v))), 448))
	}
}