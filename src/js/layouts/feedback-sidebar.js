import Meter from "../components/meter.js";
import Component from "../lib/Nyzul/engine/component.js";

export default class FeedbackSidebar extends Component {
    constructor() {
        super();
        this.element.id = "feedbackSidebar";
        this.element.classList.add("materialCard");
    }
    render() {
        this.appendComponent(new Meter('Equipment Haste', 'haste'))
        return this.element
    }
}