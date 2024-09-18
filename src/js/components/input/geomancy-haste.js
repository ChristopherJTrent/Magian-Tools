import { Component, Nyzul } from '../../lib/Nyzul/index.mjs'
import { Storehouse } from '../../lib/Storehouse/index.mjs'

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
			innerText:'test'
		}))
		this.appendChild(Nyzul.createElement({
			
		}))
		this.appendChild(Nyzul.createElement({
			type:'input',
			id:'testInput',
			attributes: {
				type: 'text'
			}
		}))
		return this.finalize()
	}
}