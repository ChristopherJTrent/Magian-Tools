import { sum } from "./aggregators";
import DataBlock from "./datablock";
export default class ArrayDataBlock extends DataBlock {
    /**
     * @callback subscriber
     * @param {Number|String} value
     * @returns {null}
     */
    /**
     * 
     * @param {any[]} value 
     */
    constructor(value = []) {
        this.value = value;
        this.subscribers = [];
    }
    /**
     * 
     * @param {subscriber} callback A callback accepting a single value 
     * @param {Function} aggregation a function that accepts an array and returns a single value
     * @returns {undefined}
     */
    subscribeAggregate(callback, aggregator = sum) {
        callback(aggregator(this.value));
    }
}