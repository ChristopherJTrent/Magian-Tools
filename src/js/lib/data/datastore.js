import DataBlock from "./datablock"

class DataStore {
    /** @type {Map<String, DataBlock} */
    static storage = new Map()
    static registerProvider(key, startingValue) {
        DataStore.storage.set(key, new DataBlock(startingValue))
        return [
            (value) => {
                DataStore.storage.get(key).setValue(value);
                DataStore.storage.get(key).alertSubscribers();
            },
        ]
    }
}