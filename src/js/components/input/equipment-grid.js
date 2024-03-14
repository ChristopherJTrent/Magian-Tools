import { Component } from "../../lib/Nyzul/index.mjs";
import {Storehouse} from '../../lib/Storehouse/index.mjs';
import FlexBreak from "../util/flex-break.js";
import ReactiveLabel from "../util/reactive-label.js";

export default class EquipmentGrid extends Component {
    static SLOTS = ['Main Hand', 'Off-Hand', 'Ranged', 'Ammo', 
                    'Head',      'Neck',     'Ear 1',  'Ear 2', 
                    'Body',      'Hands',    'Ring 1', 'Ring 2', 
                    'Back',      'Waist',    'Legs',   'Feet']
    /**
     * A component that displays 16 numeric inputs with a label that reacts to changes in the inputs
     * @param {String} dataStoreKey 
     */
    constructor(dataStoreKey) {
        super(document.createElement('span'))
        this.dataStoreKey = dataStoreKey;
        [this.setValue, this.getValue] = Storehouse.registerArrayProvider(dataStoreKey, Array(16).fill(0));
        this.element.id = `equipment-grid-${this.dataStoreKey}`;
        this.element.classList.add('equipment-grid')
    }
    /**
     * set the lowest value permitted in any of the 16 cells
     * @param {Number} val 
     * @returns {EquipmentGrid} this
     */
    fieldMinimum(val) {
        this.fieldMinVal = val;
        return this
    }
    /**
     * set the highest value allowed in any of the 16 cells
     * @param {Number} val 
     * @returns {EquipmentGrid}
     */
    fieldMaximum(val) {
        this.fieldMaxVal = val;
        return this
    }
    /**
     * Sets the boundaries of the range of valid values
     * @param {Number} min the bottom end of the range (Currently Unused)
     * @param {Number} max the top end of the range
     * @returns {EquipmentGrid}
     */
    overallMinMax(min = 0, max = 25) {
        this.min = min;
        this.max = max;
        return this;
    }
    /**
     * defines the pre/post formatting for the label displayed at the top of this element
     * @param {String} prepend text to be displayed before the reactive element
     * @param {String} append text to be displayed after the reactive element
     * @returns {EquipmentGrid} this
     */
    formatLabel(prepend, append) {
        this.prepend = prepend
        this.append = append
        return this
    }

    render() {
        console.log(this.dataStoreKey)
        const label = new ReactiveLabel(this.dataStoreKey, this.dataStoreKey.replace('-', ' '), true)
                          .withFormatting(this.prepend ?? ": ", this.append ?? `%/${this.max}%`)
        label.element.classList.add('equipPanelLabel');
        this.appendComponent(label)
        this.appendComponent(new FlexBreak())
        for (let i = 0; i < 16; i++) {
            this.appendChild(this.#generateEquipBox(i))
        }
        setTimeout(() => Storehouse.forceUpdate(this.dataStoreKey), 1)
        return this.element;
    }

    #generateEquipBox(index) {
        const container = document.createElement('span')
        const box = document.createElement('input')
        const label = document.createElement('span')

        if (this.fieldMinVal) box.setAttribute('min', this.fieldMinVal)
        if (this.fieldMaxVal) box.setAttribute('max', this.fieldMaxVal)
        
        label.classList.add('label')
        container.classList.add('iblock')
        label.innerText = EquipmentGrid.SLOTS[index]

        box.setAttribute('type', 'number');
        box.setAttribute('data-index', `${index}`)
        box.addEventListener('input', this.updateListeners.bind(this))
        
        container.appendChild(box)
        container.appendChild(document.createElement('br'))
        container.appendChild(label)
        return container
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