import { Component } from "../../lib/Nyzul/index.mjs";

export default class FlexBreak extends Component {
    render() {
        this.element.classList.add('flex-break');
        return this.element;
    }
}