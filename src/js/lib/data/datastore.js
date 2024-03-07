import { sum } from "./aggregators";
import ArrayDataBlock from "./array-data-block";
import DataBlock from "./datablock"

export default class DataStore {
    /** @type {Map<String, DataBlock} */
    static storage = new Map()

    static registerProvider(key, startingValue = 0) {
        DataStore.storage.set(key, new DataBlock(startingValue))
        return [
            (value) => {
                DataStore.storage.get(key).setValue(value);
                DataStore.storage.get(key).alertSubscribers();
            },
            () => DataStore.storage.get(key).value
        ]
    }
    static registerAggregateProvider(key, startingValue = []) {
        DataStore.storage.set(key, new ArrayDataBlock(startingValue));
        return [
            (index, value) => {
                DataStore.storage.get(key).updateValue((v) => {
                    let arr = v;
                    arr[index] = value;
                    return arr;
                })
                DataStore.storage.get(key).alertSubscribers();
            },
            () => DataStore.storage.get(key).value
        ]
    }
    static registerSubscriber(key, callback) {
        return DataStore.storage.get(key).subscribe(callback);
    }
    static registerAggregateSubscriber(key, callback, aggregator = sum) {
        const block = DataStore.get(key)
        if(! block.hasOwnProperty('subscribeAggregate') ) { 
            throw new TypeError(`${key} is not an aggregate provider`)
        }
        return block.subscribeAggregate(callback, aggregator);
    }
}