/**
 * A wrapper around HtmlElement that adds component functionality
 */
export class NyzulNode {
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }
    /**
     * appends an HTMLElement to this node
     * @param {HTMLElement} element 
     */
    appendChild(element) {
        this.element.appendChild(element);
    }
    /**
     * appends the render output of a component to the DOM tree of this node
     * @param {Component} component 
     */
    appendComponent(component) {
        this.appendChild(component.render());
    }
    /**
     * appends a node to this object
     * @param {NyzulNode} node
     */
    appendNode(node) {
        this.appendChild(node.element);
    }
}