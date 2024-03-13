import { Component } from "../../lib/Nyzul/index.mjs";
import { Storehouse } from "../../lib/Storehouse/index.mjs";

export default class WhiteBlueMagicHaste extends Component {
    static FIELD_DEFS = [
        {
            label: "No Magical Haste",
            id: 'noHaste',
            value: 0,
            default: true
        },
        {
            label: "Haste",
            id: 'haste1',
            value: 150
        },
        {
            label: "Haste II",
            id: 'haste2',
            value: 307
        },
        {
            label: "Hastega",
            id: 'hastega',
            value: 153
        },
        {
            label: "Hastega II",
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
        super();
        this.element.id = 'white-blue-magic-haste';

        this.eventCallback = this.handleInputEvent.bind(this);
        this.embravaCallback = this.embrava.bind(this)
        this.mightyGuardCallback= this.mightyGuard.bind(this)

        this.element.classList.add('flexContainer', 'vertical');
        [this.setProvider, this.getProvider] = Storehouse.registerArrayProvider('wb-magic-haste', [0,0,0])
    }
    render() {
        const containingBlock = document.createElement('div')
        for (const def of WhiteBlueMagicHaste.FIELD_DEFS) {
            this.element.innerHTML += `
            <label for="${def.id}">
                <input type="radio" name="${this.element.id}" value="${def.value}" ${def.default ? "checked" : ""} id="${def.id}">
                ${def.label}
            </label>`
            setTimeout(() => document.getElementById(def.id).addEventListener('input', this.eventCallback), 10)
        }
        this.setProvider(0,0)
        this.appendChild(document.createElement('hr'))
        const mightyGuard = document.createElement('label')
        mightyGuard.setAttribute('for', 'mightyGuard')
        
        const mgCheckbox = document.createElement('input')
        mgCheckbox.setAttribute('name', 'mighty-guard')
        mgCheckbox.setAttribute('type', 'checkbox')
        mgCheckbox.id = 'mightyGuard'
        mightyGuard.appendChild(mgCheckbox)
        mightyGuard.innerHTML += '\nMighty Guard'
        setTimeout(() => document.getElementById('mightyGuard').addEventListener('input', this.mightyGuardCallback))
        this.appendChild(mightyGuard)
        this.setProvider(1, 0)
        const embrava = document.createElement('label')
        embrava.setAttribute('for', 'embrava')
        const embravaCheckbox = document.createElement('input')
        embravaCheckbox.setAttribute('name', 'embrava')
        embravaCheckbox.setAttribute('type', 'checkbox')
        embravaCheckbox.id = 'embrava'
        embrava.appendChild(embravaCheckbox)
        embrava.innerHTML += '\n Embrava'
        setTimeout(() => document.getElementById('embrava').addEventListener('input', this.embravaCallback))
        this.appendChild(embrava)
        this.setProvider(2, 0)
        return this.finalize();
    }
    /**
     * 
     * @param {InputEvent} e 
     */
    handleInputEvent(e) {
        e.stopPropagation()
        this.setProvider(0, parseInt(e.target.value))
    }
    embrava(e) {
        e.stopPropagation()
        if(e.target.checked) {
            this.setProvider(2, 266)
        } else {
            this.setProvider(2, 0)
        }
    }
    mightyGuard(e) {
        e.stopPropagation()
        if(e.target.checked) {
            this.setProvider(1, 150)
        } else {
            this.setProvider(1, 0)
        }
    }
}