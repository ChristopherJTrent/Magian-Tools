import { sum } from "./aggregators";
import DataBlock from "./data-block";
/** @template T */
export default class ArrayDataBlock extends DataBlock {

    /**
     * 
     * @param {T[]} value 
     */
    constructor(value = []) {
        this.value = value;
        this.subscribers = [];
    }

    setValueAtIndex(index, value) {
        this.value[index] = value;
        this.alertSubscribers();
    }

    /**
     * @callback subscriber
     * @param {T} value
     * @returns {null}
     * 
     * @callback aggregator
     * @param {T[]} values
     * @returns {T}
     */
    /**
     * @param {subscriber} callback A callback accepting a single value 
     * @param {aggregator} aggregator a function that accepts an array and returns a single value
     * @returns {undefined}
     */
    subscribeAggregate(callback, aggregator = sum) {
       callback(aggregator(this.value));
    }

}