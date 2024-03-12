import DelayInput from "../components/input/delay-input.js";
import EquipmentGrid from "../components/input/equipment-grid.js";
import FlexBreak from "../components/util/flex-break.js";
import Component from "../lib/Nyzul/engine/component.js";
import { EQUIP_HASTE_MAX, EQUIP_HASTE_MIN, EQUIP_HASTE_MIN_OVERALL } from "../util/constants.js";

export default class EquipmentPanel extends Component {
    constructor() { 
        super();
        this.element.id = 'equipmentPanel';
        this.element.classList.add('materialCard');
    }
    render() {

        this.appendComponent(new DelayInput())
        this.appendComponent(new FlexBreak())
        this.appendComponent(new EquipmentGrid('haste')
                                .fieldMinimum(EQUIP_HASTE_MIN)
                                .fieldMaximum(EQUIP_HASTE_MAX)
                                .overallMinMax(EQUIP_HASTE_MIN_OVERALL, 
                                    EQUIP_HASTE_MAX));
        
        this.appendComponent(new EquipmentGrid('store-tp')
                                .formatLabel(undefined, ''));
        //TODO: get the project to a point where these lines can be uncommented
        // this.appendComponent(new EquipmentGrid('dual-wield'))
        // this.appendComponent(new EquipmentGrid('double-attack'))
        // this.appendComponent(new EquipmentGrid('triple-attack'))
        // this.appendComponent(new EquipmentGrid('quadruple-attack'))
        return this.element;
    }
}