export default class DataBlock {
    /**
     * 
     * @param {Number|String} startingValue 
     */
    constructor(startingValue = 0) {
        this.value = startingValue
        this.subscribers = []
    }
    subscribe(func) {
        this.subscribers.push(func)
        return this.value
    }
    setValue(val) {
        this.value = val
    }
    updateValue(func) {
        this.value = func(this.value)
    }
    alertSubscribers() {
        for (const sub of this.subscribers) {
            sub(this.value);
        }
    }
}