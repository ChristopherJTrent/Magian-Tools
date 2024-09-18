import { Component } from '../../lib/Nyzul/index.mjs'
import { calculateDelay } from '../../util/haste.js'
import ReactiveLabel from '../util/reactive-label.js'


export default class DelayDisplay extends Component {
	constructor() {
		super()
		this.element.id = 'delay-display'
	}
	render() {
		const section1 = new ReactiveLabel('modified-delay', 'Total Delay: ', (vals) => {
			return Math.ceil(calculateDelay(...vals))
		})
		const section2 = new ReactiveLabel('modified-delay', '', (vals) => {
			const delay = calculateDelay(...vals)
			return (delay/60).toFixed(2)
		}).withFormatting(' (', ' seconds per round)')
		this.appendComponent(section1)
		this.appendComponent(section2)
	}
}