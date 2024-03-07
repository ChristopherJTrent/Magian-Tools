import { Component } from "../lib/Nyzul/index.mjs";
import {Storehouse} from '../lib/Storehouse/index.mjs';

export default class EquipmentGrid extends Component {
    constructor(dataStoreKey) {
        super(document.createElement('span'))
        this.element.classList.add('equipment-grid')
        this.dataStoreKey = dataStoreKey;
        const [set, get] = Storehouse.registerArrayProvider(this.dataStoreKey);
        this.setValue = set;
        this.getValue = get;

        this.element.id = `equipment-grid-${this.dataStoreKey}`;
    }
    render() {
        const dataGrid = this.getValue();
        for (let i = 0; i < 16; i++) {
            dataGrid.push(0);
            let box = document.createElement('input')
            box.setAttribute('type', 'number');
            box.setAttribute('data-index', `${i}`)
            box.addEventListener('input', this.updateListeners.bind(this))
            this.appendChild(box)
        }
        return this.element;
    }
    /**
     * 
     * @param {InputEvent} e 
     */
    updateListeners(e) {
        e.stopPropagation();
        this.setValue(
            e.target.dataset.index,
            parseInt(e.target.value)
        )
    }
}