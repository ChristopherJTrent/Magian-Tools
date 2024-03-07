import { Component } from "../lib/Nyzul/index.mjs";
import EquipmentPanel from "./equipment-panel.js";

export default class InputPanel extends Component {
    constructor() {
        super();
        this.element.id = 'inputPanel';
        this.element.classList.add('materialPanel');
    }
    render() {
        this.appendComponent(new EquipmentPanel());
        return this.element
    }
}