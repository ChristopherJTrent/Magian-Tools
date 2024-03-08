import EquipmentGrid from "../components/equipment-grid.js";
import Component from "../lib/Nyzul/engine/component.js";

export default class EquipmentPanel extends Component {
    constructor() { 
        super();
        this.element.id = 'equipmentPanel';
        this.element.classList.add('materialCard');
    }
    render() {
        this.appendComponent(new EquipmentGrid('haste')
                                .fieldMinimum(-5)
                                .fieldMaximum(26)
                                .overallMinMax(-25, 26));
        this.appendComponent(new EquipmentGrid('store-tp'));
        this.appendComponent(new EquipmentGrid('dual-wield'))
        this.appendComponent(new EquipmentGrid('double-attack'))
        this.appendComponent(new EquipmentGrid('triple-attack'))
        this.appendComponent(new EquipmentGrid('quadruple-attack'))
        return this.element;
    }
}