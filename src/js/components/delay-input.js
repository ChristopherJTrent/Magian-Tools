import { Component, generateUEID } from '../lib/Nyzul/index.mjs'
import { Storehouse } from '../lib/Storehouse/index.mjs';

export default class DelayInput extends Component {
    constructor() {
        super();
        [this.setMh, this.getMh] = Storehouse.registerProvider('delay-mh', 240)
        //TODO: implement dual-wielding jobs (BLU, DNC, THF, NIN)
        //[this.setOh, this.getOh] = Storehouse.registerProvider('delay-oh', -1)
    }
    render() {
        this.element.classList.add('flexContainer', 'vertical', 'center')

        const label = document.createElement('label')
        const mainHand = document.createElement('input')
        mainHand.id = 'main-hand-delay'

        label.setAttribute('for', mainHand.id)
        label.innerText = 'Main Hand base delay'

        mainHand.setAttribute('type', 'number')
        mainHand.setAttribute('min', '1')
        mainHand.setAttribute('max', '999')
        mainHand.setAttribute('value', this.getMh().value)

        mainHand.addEventListener('input', () => this.setMh(mainHand.valueAsNumber))

        mainHand.classList.add('smallInput')

        this.appendChild(label)
        this.appendChild(mainHand)
        return this.element;
    }
}