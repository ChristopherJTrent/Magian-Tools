import EquipmentGrid from "../components/equipment-grid.js";
import Component from "../lib/Nyzul/engine/component.js";

export default class EquipmentPanel extends Component {
    constructor() { super() }
    render() {
        this.appendComponent(new EquipmentGrid('haste'));
        this.appendComponent(new EquipmentGrid('store-tp'));
        
    }
}