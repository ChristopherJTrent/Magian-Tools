import { Component, generateUEID } from "../../lib/Nyzul/index.mjs";
import { tpPerHit } from "../../util/TP.js";
import ReactiveLabel from "../util/reactive-label.js";


export default class TpDisplay extends Component {
    constructor() {
        super()
        this.element.id = 'tp-display';
        this.perhitId = generateUEID('tp-display-per-hit')
        this.to1kId = generateUEID('tp-display-to-1k')
    }
    render() {
        const section1 = new ReactiveLabel('tp-per-hit', '', true)
                                .withFormatting('', ' TP per hit (');
        const section2 = new ReactiveLabel('tp-per-hit', '', (v) => Math.ceil(1000 / tpPerHit(...v)))
                                .withFormatting('', ' hits to 1000 TP)');
        this.appendComponent(section1)
        this.appendComponent(section2)
        return this.finalize();
    }
}