import EquipmentGrid from "./components/equipment-grid.js";
import { Nyzul } from "./lib/Nyzul/index.mjs";

const nyzul = new Nyzul();

let p = document.createElement('p');
p.innerText = 'hello, world! from Nyzul!'
nyzul.appendChild(p)
nyzul.appendComponent(new EquipmentGrid('test'))