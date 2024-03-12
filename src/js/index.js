import AboutModal from "./components/util/about-modal.js";
import Header from "./components/util/header.js";
import FeedbackSidebar from "./layouts/feedback-sidebar.js";
import InputPanel from "./layouts/input-panel.js";
import { Nyzul } from "./lib/Nyzul/index.mjs";

const nyzul = new Nyzul();

nyzul.appendComponent(new Header())
nyzul.appendComponent(new InputPanel())
nyzul.appendComponent(new FeedbackSidebar())
nyzul.appendComponent(new AboutModal())