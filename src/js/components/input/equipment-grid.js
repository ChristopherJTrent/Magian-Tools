import { Component } from '../../lib/Nyzul/index.mjs'
import {Storehouse} from '../../lib/Storehouse/index.mjs'
import FlexBreak from '../util/flex-break.js'
import ReactiveLabel from '../util/reactive-label.js'

export default class EquipmentGrid extends Component {
	static SLOTS = ['Main Hand', 'Off-Hand', 'Ranged', 'Ammo', 
		'Head',      'Neck',     'Ear 1',  'Ear 2', 
		'Body',      'Hands',    'Ring 1', 'Ring 2', 
		'Back',      'Waist',    'Legs',   'Feet']
	/**
     * 
     * @param {String} dataStoreKey 
     */
	constructor(dataStoreKey) {
		super(document.createElement('span'))
		this.element.classList.add('equipment-grid')
		this.dataStoreKey = dataStoreKey
		const [set, get] = Storehouse.registerArrayProvider(this.dataStoreKey, Array(16).fill(0))
		this.setValue = set
		this.getValue = get
		this.element.id = `equipment-grid-${this.dataStoreKey}`
	}
	fieldMinimum(val) {
		this.fieldMinVal = val
		return this
	}
	fieldMaximum(val) {
		this.fieldMaxVal = val
		return this
	}
	overallMinMax(min = 0, max = 25) {
		this.min = min
		this.max = max
		return this
	}
	formatLabel(prepend, append) {
		this.prepend = prepend
		this.append = append
		return this
	}
	render() {
		const dataGrid = this.getValue()
		const label = new ReactiveLabel(this.dataStoreKey, this.dataStoreKey.replace('-', ' '), true)
			.withFormatting(this.prepend ?? ': ', this.append ?? `%/${this.max}%`)
		label.element.classList.add('equipPanelLabel')
		this.appendComponent(label)
		this.appendComponent(new FlexBreak())
		for (let i = 0; i < 16; i++) {
			const container = document.createElement('span')
			container.classList.add('iblock')
			dataGrid.push(0)
			let box = document.createElement('input')
			box.setAttribute('type', 'number')
			box.setAttribute('data-index', `${i}`)
			if (this.fieldMinVal) box.setAttribute('min', this.fieldMinVal)
			if (this.fieldMaxVal) box.setAttribute('max', this.fieldMaxVal)
			box.addEventListener('input', this.updateListeners.bind(this))
			container.appendChild(box)
			container.appendChild(document.createElement('br'))
			const label = document.createElement('span')
			label.classList.add('label')
			label.innerText = EquipmentGrid.SLOTS[i]
			container.appendChild(label)
			this.appendChild(container)
		}
		setTimeout(() => Storehouse.forceUpdate(this.dataStoreKey), 1)
		return this.element
	}
	/**
     * 
     * @param {InputEvent} e 
     */
	updateListeners(e) {
		e.stopPropagation()
		this.setValue(
			e.target.dataset.index,
			parseInt(e.target.value)
		)
	}
}