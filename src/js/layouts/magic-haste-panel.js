import { Component } from "../lib/Nyzul/index.mjs";


export default class MagicHastePanel extends Component {
    constructor() {
        super();
        this.element.classList.add('materialCard')
    }

    render() {
        return this.finalize();
    }
}