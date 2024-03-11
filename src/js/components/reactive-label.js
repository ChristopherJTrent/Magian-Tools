import { Component, generateUEID } from "../lib/Nyzul/index.mjs";
import { Storehouse } from "../lib/Storehouse/index.mjs";

export default class ReactiveLabel extends Component {
    constructor(key, text, aggregate = false) {
        super(document.createElement('span'));
        this.element.innerText = text;
        this.storehouseKey = key;
        this.aggregate = aggregate;
        this.reactiveID = generateUEID(`reactive-label-${this.storehouseKey}`);
    }
    withFormatting(prepend, append) {
        this.formatting = {prepend: prepend, append: append }
        return this;
    } 
    render() {
        let reactive = document.createElement('span')
        reactive.id = this.reactiveID ?? 'error';
        this.element.appendChild(reactive)
        if (this.aggregate) {
            if (this.aggregate === true) {
                Storehouse.registerAggregateSubscriber(this.storehouseKey, this.getUpdater())
            } else {
                Storehouse.registerAggregateSubscriber(this.storehouseKey, this.getUpdater(), this.aggregate)
            }
        } else {
            Storehouse.registerSubscriber(this.storehouseKey, this.getUpdater())
        }
        return this.element;
    }
    getUpdater() {
        const id = this.reactiveID
        const format = this.formatting ?? {}
        return (value) => {
            const reactive = document.getElementById(id)
            const formatted = `${format.prepend ?? ""}${value}${format.append ?? ""}`
            if (reactive) {
                reactive.innerText = formatted
            }
        }
    }
}