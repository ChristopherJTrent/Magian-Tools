import { NyzulNode } from "./_node.js";

export default class Nyzul extends NyzulNode {
    constructor(rootId = 'pageContainer') {
        super();
        this.element = document.getElementById(rootId);
    }
}