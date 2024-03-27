import { NyzulNode } from '../../lib/Nyzul/engine/_node.js'
import { Nyzul } from '../../lib/Nyzul/index.mjs'

/**
 * 
 * @param {any extends HTMLElement} element 
 * @param {(NyzulNode|any extends HTMLElement|string)} label 
 * @returns {HTMLElement}
 */
export default function wrapWithRightSideLabel(element, label) {
	const wrapper = Nyzul.createElement({
		type: 'label',
		attributes: {
			for: element.id
		}
	})
	wrapper.appendChild(element)
	if (label instanceof HTMLElement) {
		wrapper.appendChild(label)
	} else if (label instanceof NyzulNode) {
		wrapper.appendChild(label.render())
	} else {
		wrapper.append(label)
	}
	return wrapper
}