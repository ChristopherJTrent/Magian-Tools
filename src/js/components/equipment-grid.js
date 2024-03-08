import { Component } from "../lib/Nyzul/index.mjs";
import {Storehouse} from '../lib/Storehouse/index.mjs';
import FlexBreak from "./flex-break.js";
import ReactiveLabel from "./reactive-label.js";

export default class EquipmentGrid extends Component {
    /**
     * 
     * @param {String} dataStoreKey 
     */
    constructor(dataStoreKey) {
        super(document.createElement('span'))
        this.element.classList.add('equipment-grid')
        this.dataStoreKey = dataStoreKey;
        const [set, get] = Storehouse.registerArrayProvider(this.dataStoreKey, Array(16).fill(0));
        this.setValue = set;
        this.getValue = get;
        this.element.id = `equipment-grid-${this.dataStoreKey}`;
    }
    fieldMinimum(val) {
        this.fieldMinVal = val;
        return this
    }
    fieldMaximum(val) {
        this.fieldMaxVal = val;
        return this
    }
    overallMinMax(min = 0, max = 25) {
        this.min = min;
        this.max = max;
        return this;
    }
    formatLabel(prepend = ": ", append) {

    }
    render() {
        const dataGrid = this.getValue();
        const label = new ReactiveLabel(this.dataStoreKey, this.dataStoreKey.replace('-', ' '), true)
                          .withFormatting(": ", `%/${this.max}%`)
        label.element.classList.add('equipPanelLabel');
        this.appendComponent(label)
        this.appendComponent(new FlexBreak())
        for (let i = 0; i < 16; i++) {
            dataGrid.push(0);
            let box = document.createElement('input')
            box.setAttribute('type', 'number');
            box.setAttribute('data-index', `${i}`)
            box.addEventListener('input', this.updateListeners.bind(this))
            this.appendChild(box)
        }
        setTimeout(() => Storehouse.forceUpdate(this.dataStoreKey), 1)
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