import { Component } from "../lib/Nyzul/index.mjs";
import { sum } from "../lib/Storehouse/data/aggregators.js";
import { Storehouse } from "../lib/Storehouse/index.mjs";


export default class Meter extends Component {
    /**
     * 
     * @param {String} label text to display as a label attached to the meter
     * @param {String} key the Storehouse key used to hold the value for this meter
     * @param {boolean|Function} [aggregate=true] set to false for no aggregation, true for default (sum), and pass a callback for custom.
     */
    constructor(label, key, aggregate = true) {
        super()
        if (aggregate === true || typeof aggregate === 'function') { 
            if (aggregate === true ) aggregate = sum
            this.useAggregation = true;
        } else {
            this.useAggregation = false;
        }
        this.aggregate = aggregate;
        this.label = label;
        this.key = key;
    }
    render() {
        const label = document.createElement('label')
        label.setAttribute('for', `meter-${this.key}`)
        label.innerText = this.label
        this.appendChild(label)
        const meter = document.createElement('meter');
        meter.id = `meter-${this.key}`
        this.registerConsumer(meter)
        this.appendChild(meter)
        return this.element;
    }
    registerConsumer(meter) {
        const _meterCallback = (value) => {
            meter.setAttribute('value', value.toString())
        }
        if (this.useAggregation) {
            Storehouse.registerAggregateSubscriber(this.key, _meterCallback, this.aggregate)
        } else {
            Storehouse.registerSubscriber(this.key, _meterCallback)
        }
    }
}