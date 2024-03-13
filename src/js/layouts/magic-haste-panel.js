import WhiteBlueMagicHaste from "../components/input/white-blue-magic-haste.js";
import { Component } from "../lib/Nyzul/index.mjs";


export default class MagicHastePanel extends Component {
    
    constructor() {
        super();
        this.element.classList.add('materialCard')
    }

    render() {
        this.appendComponent(new WhiteBlueMagicHaste())
        return this.finalize();
    }
}