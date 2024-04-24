import { Component, Nyzul } from '../../lib/Nyzul/index.mjs'
import { Storehouse } from '../../lib/Storehouse/index.mjs'

export default class GeomancyHaste extends Component{
	constructor() {
		super()
		this.element = Nyzul.createElement({
			type: 'fieldset',
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
}