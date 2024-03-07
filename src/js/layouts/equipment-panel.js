import EquipmentGrid from "../components/equipment-grid.js";
import Component from "../lib/Nyzul/engine/component.js";

export default class EquipmentPanel extends Component {
    constructor() { 
        super();
        this.element.id = 'equipmentPanel';
        this.element.classList.add('materialCard');
    }
    render() {
        this.appendComponent(new EquipmentGrid('haste'));
        this.appendComponent(new EquipmentGrid('store-tp'));
        this.appendComponent(new EquipmentGrid('dual-wield'))
        this.appendComponent(new EquipmentGrid('double-attack'))
        this.appendComponent(new EquipmentGrid('triple-attack'))
        this.appendComponent(new EquipmentGrid('quadruple-attack'))
        return this.element;
    }
}