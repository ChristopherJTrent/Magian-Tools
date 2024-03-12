import FeedbackSidebar from "../../layouts/feedback-sidebar.js";
import { Component } from "../../lib/Nyzul/index.mjs";
import { sum } from "../../lib/Storehouse/data/aggregators.js";
import { Storehouse } from "../../lib/Storehouse/index.mjs";
import FlexBreak from "./flex-break.js";
import ReactiveLabel from "./reactive-label.js";


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
        this.meter = document.createElement('meter');
        this.element.classList.add('meterContainer')
    }
    min(val) {
        this.meter.setAttribute('min', val)
        return this
    }
    max(val) {
        this.meter.setAttribute('max', val)
        return this
    }
    low(val) {
        this.meter.setAttribute('low', val)
        return this
    }
    high(val) {
        this.meter.setAttribute('high', val)
        return this
    }
    optimum(val) {
        this.meter.setAttribute('optimum', val)
        return this
    }
    formatLabel(prepend, append) {
        this.prepend = prepend
        this.append = append
        return this
    }
    render() {
        const label = new ReactiveLabel(this.key, this.label, this.aggregate)
                            .withFormatting(this.prepend ?? '', this.append ?? '')
        this.appendComponent(label)
        //this.appendComponent(new FlexBreak())
        this.meter.id = `meter-${this.key}`
        this.registerConsumer(this.meter)
        Storehouse.storage.get(this.key).alertSubscribers();
        this.appendChild(this.meter)
        return this.element;
    }
    registerConsumer(meter) {
        const _meterCallback = (value) => {
            meter.setAttribute('value', value?.toString())
        }
        if (this.useAggregation) {
            ('using aggregation')
            Storehouse.registerAggregateSubscriber(this.key, _meterCallback, this.aggregate)
        } else {
            ('not using aggregation')
            Storehouse.registerSubscriber(this.key, _meterCallback)
        }
    }
}