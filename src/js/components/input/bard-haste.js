import { Component } from '../../lib/Nyzul/index.mjs'
import { Storehouse } from '../../lib/Storehouse/index.mjs'
import calculateBardHaste from '../../util/bard.js'

export default class BardHaste extends Component {
	constructor() {
		super()
		this.element = document.createElement('form')
		this.element.id = 'bard-haste'

		this.element.classList.add('flexContainer', 'vertical');

		[
			this.setSongs, 
			this.getSongs
		] = Storehouse.registerArrayProvider('b-songs', [false, false, false]);
		[
			this.setSongBonus, 
			this.getSongBonus
		] = Storehouse.registerProvider('b-song-bonus', 0);
		[
			this.setJobActions,
			this.getJobActions
		] = Storehouse.registerArrayProvider('b-job-action', [false, false])
	}

	render() {
		return this.finalize()
	}

	afterRender() {
		Storehouse.registerCombinatorProvider('bard-haste', [
			{ key: 'b-songs' },
			{ key: 'b-song-bonus' },
			{ key: 'b-job-action' }
		], calculateBardHaste)
	}
}