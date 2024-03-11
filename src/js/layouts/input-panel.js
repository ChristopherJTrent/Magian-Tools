import { Component } from "../lib/Nyzul/index.mjs";
import { Storehouse } from "../lib/Storehouse/index.mjs";
import { tpPerHit } from "../util/TP.js";
import EquipmentPanel from "./equipment-panel.js";

export default class InputPanel extends Component {
    constructor() {
        super();
        this.element.id = 'inputPanel';
        this.element.classList.add('materialPanel');
    }
    render() {
        this.appendComponent(new EquipmentPanel());
        this.afterRender();
        return this.element
    }
    afterRender() {
        Storehouse.registerCombinatorProvider('tp-per-hit', [
            {
                key: 'delay-mh'
            },
            {
                key: 'store-tp'
            }
        ], (args) => tpPerHit(...args))
        Storehouse.registerAggregateSubscriber('tp-per-hit', (v) => (v))
    }
}