import { Component, Nyzul } from '../../lib/Nyzul/index.mjs'
import { Storehouse } from '../../lib/Storehouse/index.mjs'
import calculateBardHaste from '../../util/bard.js'
import wrapWithRightSideLabel from '../util/checklist-element.js'
import ReactiveLabel from '../util/reactive-label.js'

export default class BardHaste extends Component {
	constructor() {
		super()

		this.element = Nyzul.createElement({
			type:'fieldset',
			classes: ['flexContainer', 'vertical'],
			id: 'bard-haste'
		});

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
		] = Storehouse.registerArrayProvider('b-job-action', [false, false]);
		[
			this.setTrust,
			this.getTrust
		] = Storehouse.registerProvider('b-song-trust', false)
	}

	render() {
		this.appendChild(Nyzul.createElement({
			type: 'legend',
			innerText: 'Bard Music'
		}))
		this.appendChild(wrapWithRightSideLabel(Nyzul.createElement({
			type: 'input',
			id: 'a-march',
			attributes: {
				type: 'checkbox'
			},
			eventCallbacks: [
				{
					type: 'change',
					listener: (e) => {
						this.setSongs(0, e.target.checked)
					} 
				}
			]
		}), 'Advancing March'))

		this.appendChild(wrapWithRightSideLabel(Nyzul.createElement({
			type: 'input',
			id: 'v-march',
			attributes: {
				type: 'checkbox'
			},
			eventCallbacks: [
				{
					type: 'change',
					listener: (e) => {
						this.setSongs(1, e.target.checked)
					}
				}
			]
		}), 'Victory March'))
		const trustDisabled = Nyzul.createElement({
			type: 'fieldset',
			id: 'bsongs-trust-disabled',
			classes: ['phantom']
		})

		trustDisabled.appendChild(wrapWithRightSideLabel(Nyzul.createElement({
			type: 'input',
			id: 'h-march',
			attributes: { type: 'checkbox' },
			eventCallbacks: [
				{
					type: 'change',
					listener: (e) => this.setSongs(2, e.target.checked)
				}
			]
		}), 'Honor March'))

		trustDisabled.append(wrapWithRightSideLabel(Nyzul.createElement({
			type:'input',
			id: 'songBonusSlider',
			attributes: {
				type: 'range',
				min: 0,
				max: 8,
				value: 0
			},
			eventCallbacks: [
				{
					type: 'change',
					listener: (e) => this.setSongBonus(parseInt(e.target.value))
				}
			]
		}), new ReactiveLabel('b-song-bonus', 'Song Bonus: +', false)))
		
		trustDisabled.appendChild(wrapWithRightSideLabel(Nyzul.createElement({
			type: 'input',
			id: 'soulVoiceCheckbox',
			attributes: {
				type: 'checkbox'
			},
			eventCallbacks: [
				{
					type: 'change',
					listener: (e) => {
						if (e.target.checked) {
							document.getElementById('marcatoCheckbox').checked = false
						}
					}
				},
				{
					type: 'change',
					listener: (e) => this.setJobActions(0, e.target.checked)
				}
			]
		}), 'Soul Voice'))

		trustDisabled.appendChild(wrapWithRightSideLabel(Nyzul.createElement({
			type:'input',
			id: 'marcatoCheckbox',
			attributes: {
				type: 'checkbox'
			},
			eventCallbacks: [
				{
					type: 'change',
					listener: (e) => {
						if (e.target.checked) {
							document.getElementById('soulVoiceCheckbox').checked = false
						}
					}
				},
				{
					type: 'change',
					listener: (e) => {
						this.setJobActions(1, e.target.checked)
					}
				}
			]
		}), 'Marcato'))

		this.appendChild(trustDisabled)

		this.appendChild(wrapWithRightSideLabel(Nyzul.createElement({
			type: 'input',
			id: 'trustCheckbox',
			attributes: {
				type: 'checkbox'
			},
			eventCallbacks: [
				{
					type: 'change',
					listener: (e) => {
						document.getElementById('bsongs-trust-disabled')
							.disabled = e.target.checked
						this.setTrust(e.target.checked)
					}
				}
			]
		}), 'Trust'))
		this.afterRender()
		return this.finalize()
	}

	afterRender() {
		Storehouse.registerCombinatorProvider('bard-haste', [
			{ key: 'b-songs', aggregator: v => v},
			{ key: 'b-song-bonus' },
			{ key: 'b-job-action', aggregator: v => v},
			{ key: 'b-song-trust'}
		], (v) => calculateBardHaste(...v))
	}
}