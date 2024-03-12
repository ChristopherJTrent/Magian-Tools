import Meter from "../components/util/meter.js";
import TpDisplay from "../components/output/tp-display.js";
import Component from "../lib/Nyzul/engine/component.js";
import DelayDisplay from "../components/output/delay-display.js";

export default class FeedbackSidebar extends Component {
    constructor() {
        super();
        this.element.id = "feedbackSidebar";
        this.element.classList.add("flexContainer", 'vertical', 'center', 'materialCard');
    }
    render() {
        this.appendComponent(new DelayDisplay())

        this.appendComponent(new TpDisplay())

        this.appendChild(document.createElement('hr'))

        this.appendComponent(new Meter('Equipment Haste', 'haste', 
                                        FeedbackSidebar.hasteAggregator)
                                    .min(0)
                                    .low(250)
                                    .optimum(256)
                                    .high(260)
                                    .max(300)
                                    .formatLabel(': ', '/256'))
        return this.element
    }
    /**
     * 
     * @param {number[]} values 
     * @returns 
     */
    static hasteAggregator(values) {
        ("hasteAg")
        return values.reduce((a, e) => a + (e * 10), 0)
    }
}