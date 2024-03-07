import { NyzulNode } from "./_node.js";
/**
 * Extend this class to create your own components.
 * You *must* override `render` with your own html generation code.
 */
export default class Component extends NyzulNode{
    constructor(element) {
        element ??= document.createElement('div')
        super(element);
    }
    /**
     * @returns {HTMLElement} the html rendered for this component.
     */
    render() {}
}