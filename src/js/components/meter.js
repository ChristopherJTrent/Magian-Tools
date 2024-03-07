import { Component } from "../lib/Nyzul/index.mjs";
import { sum } from "../lib/Storehouse/data/aggregators.js";


export default class Meter extends Component {
    /**
     * 
     * @param {String} label text to display as a label attached to the meter
     * @param {String} key the Storehouse key used to hold the value for this meter
     * @param {boolean|Function} [aggregate=true] set to false for no aggregation, true for default (sum), and pass a callback for custom.
     */
    constructor(label, key, aggregate = true) {
        if (aggregate === true || typeof aggregate === 'function') { 
            if (aggregate === true ) aggregate = sum;
        }
    }
}