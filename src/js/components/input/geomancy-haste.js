import { Component, Nyzul } from '../../lib/Nyzul/index.mjs'
import { Storehouse } from '../../lib/Storehouse/index.mjs'
import wrapWithRightSideLabel from '../util/checklist-element.js'

export default class GeomancyHaste extends Component {
	constructor() {
		console.log('constructing geomancy haste')
		super()
		this.element = Nyzul.createElement({
			type: 'fieldset',
			classes: ['flexContainer', 'horizontal'],
			id: 'geomancy-haste'
		});
		[
			this.setSpellType,
			this.getSpellType
		] = Storehouse.registerProvider('geo-spell-type', '');
		[
			this.setSkill, 
			this.getSkill
		] = Storehouse.registerArrayProvider('geo-combined-skill', [0,0]);
		[
			this.setGeomancyBonus,
			this.getGeomancyBonus
		] = Storehouse.registerProvider('geomancy+', 0);
		[
			this.setJobActions,
			this.getJobActions
		] = Storehouse.registerArrayProvider('geo-job-actions', 
			[false, false, false]);
		[
			this.setTrust,
			this.getTrust
		] = Storehouse.registerArrayProvider('geo-trust', [false, false])
	}

	render() {
		this.appendChild(Nyzul.createElement({
			type:'legend',
			innerText:'Geomancy'
		}))
		this.appendChild(wrapWithRightSideLabel(Nyzul.createElement({
			id: 'geomancy-skill-input',
			type: 'input',
			classes: ['smallInput'],
			attributes: {
				type: 'number',
				min: 0,
				max: 557	
			},
			eventCallbacks: [
				{
					type: 'change',
					listener: (e) => this.setSkill(0, e.target.value)
				}
			]
		}), 'Geomancy Skill'))
		this.appendChild(wrapWithRightSideLabel(Nyzul.createElement({
			id: 'handbell-skill-input',
			type: 'input',
			classes: ['smallInput'],
			attributes: {
				type: 'number',
				min: 0,
				max: 518
			},
			eventCallbacks: [
				{
					type: 'change',
					listener: (e) => this.setSkill(1, e.target.value)
				}
			]
		}), 'Handbell Skill'))
		this.appendChild(wrapWithRightSideLabel(Nyzul.createElement({
			id: 'geomancy-bonus-input',
			type: 'input',
			classes: ['smallInput'],
			attributes: {
				type: 'number',
				min: 0,
				max: 10
			},
			eventCallbacks: [{
				type: 'change',
				listener: (e) => this.setGeomancyBonus(e.target.value)
			}]
		}), 'Geomancy +'))	
	}
}