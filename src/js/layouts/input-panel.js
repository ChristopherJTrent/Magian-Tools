import { Component } from '../lib/Nyzul/index.mjs'
import { Storehouse } from '../lib/Storehouse/index.mjs'
import { tpPerHit } from '../util/TP.js'
import { calculateDelay } from '../util/haste.js'
import EquipmentPanel from './equipment-panel.js'
import MagicHastePanel from './magic-haste-panel.js'

export default class InputPanel extends Component {
	constructor() {
		super()
		this.element.id = 'inputPanel'
		this.element.classList.add('materialPanel')
	}
	render() {
		this.appendComponent(new EquipmentPanel())
		this.appendComponent(new MagicHastePanel())
		this.afterRender()
		return this.element
	}
	afterRender() {
		Storehouse.registerCombinatorProvider('tp-per-hit', [
			{
				key: 'delay-mh'
			},
			{
				key: 'store-tp'
			}
		], (args) => tpPerHit(...args))
		Storehouse.registerAggregateSubscriber('tp-per-hit', (v) => (v))
    
		Storehouse.registerCombinatorProvider('aggregate-haste', [
			{
				key: 'haste',
				aggregator: values => (
					Math.min(values.reduce((a, e) => a + e * 10, 0 ), 256) 
				)
			},
			{
				key: 'total-magic-haste',
				aggregator: (v) => Math.min(v.reduce((a, e) => a + e), 448)
			}
		], (v) => Math.min(v.reduce((a, e) => a + e), 800))

		// this will include magic and job ability haste later.
		Storehouse.registerCombinatorProvider('modified-delay', [
			{
				key: 'delay-mh',
			},
			{
				key: 'aggregate-haste',
			}
		], (vals) => calculateDelay(...vals))
	}
}