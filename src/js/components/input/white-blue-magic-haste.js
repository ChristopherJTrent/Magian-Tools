import { Component } from '../../lib/Nyzul/index.mjs'
import { Storehouse } from '../../lib/Storehouse/index.mjs'

export default class WhiteBlueMagicHaste extends Component {
	static FIELD_DEFS = [
		{
			label: 'No Magical Haste',
			id: 'noHaste',
			value: 0,
			default: true
		},
		{
			label: 'Haste',
			id: 'haste1',
			value: 150
		},
		{
			label: 'Haste II',
			id: 'haste2',
			value: 307
		},
		{
			label: 'Hastega',
			id: 'hastega',
			value: 153
		},
		{
			label: 'Hastega II',
			id: 'hastega2',
			value: 307
		},
		{
			label: 'Refuelling',
			id: 'refuelling',
			value: 102
		},
		{
			label: 'Animating Wail',
			id: 'animating-wail',
			value: 150
		},
		{
			label: 'Erratic Flutter',
			id: 'erratic-flutter',
			value: 307
		}
	]
	constructor() {
		super()
		this.element = document.createElement('form')

		this.element.id = 'white-blue-magic-haste'

		this.eventCallback = this.handleInputEvent.bind(this)
		this.embravaCallback = this.embravaHandler.bind(this)
		this.mightyGuardCallback= this.mightyGuardHandler.bind(this)

		this.element.classList.add('flexContainer', 'vertical');
		[this.setProvider, this.getProvider] = Storehouse.registerArrayProvider('wb-magic-haste', [0,0,0])
	}
	render() {
		const containingBlock = document.createElement('fieldset')
		containingBlock.classList.add('flexContainer', 'vertical')
		const legend = document.createElement('legend')
		legend.innerText = 'White/Blue Magical Haste'
		containingBlock.appendChild(legend)
		for (const def of WhiteBlueMagicHaste.FIELD_DEFS) {
			containingBlock.appendChild(this.hasteSpell(def))
		}
		this.setProvider(0,0)
		containingBlock.appendChild(this.mightyGuard())
		this.setProvider(1, 0)

		containingBlock.appendChild(this.embrava())
		this.setProvider(2, 0)

		this.appendChild(containingBlock)
		return this.finalize()
	}
	/**
     * 
     * @param {InputEvent} e 
     */
	handleInputEvent(e) {
		e.stopPropagation()
		this.setProvider(0, parseInt(e.target.value))
	}

	hasteSpell(def) {
		const label = document.createElement('label')
		const input = document.createElement('input')
		label.setAttribute('for', def.id)
		input.id = def.id
		input.name = this.element.id
		input.value = def.value
		input.type = 'radio'
		if (def.default) input.defaultChecked = true
		input.addEventListener('change', this.eventCallback)
		label.appendChild(input)
		label.append(def.label)
		return label
	}

	embrava() {
		const embrava = document.createElement('label')
		embrava.setAttribute('for', 'embrava')
		const embravaCheckbox = document.createElement('input')
		embravaCheckbox.setAttribute('name', 'embrava')
		embravaCheckbox.setAttribute('type', 'checkbox')
		embravaCheckbox.id = 'embrava'
		embrava.appendChild(embravaCheckbox)
		embrava.append('\n Embrava')
		embrava.addEventListener('change', this.embravaCallback)
		return embrava
	}

	mightyGuard() {
		const mightyGuard = document.createElement('label')
		mightyGuard.setAttribute('for', 'mightyGuard')
        
		const mgCheckbox = document.createElement('input')
		mgCheckbox.setAttribute('name', 'mighty-guard')
		mgCheckbox.setAttribute('type', 'checkbox')
		mgCheckbox.id = 'mightyGuard'
		mightyGuard.appendChild(mgCheckbox)
		mightyGuard.append('\nMighty Guard')
		mgCheckbox.addEventListener('change', this.mightyGuardCallback)
		return mightyGuard
	}

	embravaHandler(e) {
		e.stopPropagation()
		if(e.target.checked) {
			this.setProvider(2, 266)
		} else {
			this.setProvider(2, 0)
		}
	}
	mightyGuardHandler(e) {
		e.stopPropagation()
		if(e.target.checked) {
			this.setProvider(1, 150)
		} else {
			this.setProvider(1, 0)
		}
	}
}