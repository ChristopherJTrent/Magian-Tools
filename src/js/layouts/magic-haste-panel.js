import WhiteBlueMagicHaste from "../components/input/white-blue-magic-haste.js";
import { Component } from "../lib/Nyzul/index.mjs";
import { sum } from "../lib/Storehouse/data/aggregators.js";
import { Storehouse } from "../lib/Storehouse/index.mjs";


export default class MagicHastePanel extends Component {

    constructor() {
        super();
        this.element.classList.add('materialCard')
    }

    render() {
        this.appendComponent(new WhiteBlueMagicHaste())

        this.afterRender()
        return this.finalize();
    }

    afterRender() {
        Storehouse.registerCombinatorProvider('total-magic-haste', [
            {
                key: 'wb-magic-haste',
            }
        ], (vals) => Math.max(sum(vals.map((v) => Integer(v))), 448))
    }
}