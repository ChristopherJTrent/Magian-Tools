import DelayInput from "./components/delay-input.js";
import Header from "./components/header.js";
import FeedbackSidebar from "./layouts/feedback-sidebar.js";
import InputPanel from "./layouts/input-panel.js";
import { Nyzul } from "./lib/Nyzul/index.mjs";

const nyzul = new Nyzul();

nyzul.appendComponent(new Header())
nyzul.appendComponent(new InputPanel())
nyzul.appendComponent(new FeedbackSidebar())