import Meter from "../components/meter.js";
import Component from "../lib/Nyzul/engine/component.js";

export default class FeedbackSidebar extends Component {
    constructor() {
        super();
        this.element.id = "feedbackSidebar";
        this.element.classList.add("materialCard");
    }
    render() {
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
    static hasteAggregator(values) {
        ("hasteAg")
        return values.reduce((a, e) => a + (e * 10))
    }
}