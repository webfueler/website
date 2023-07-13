import "./styles/main.scss";

import { init as initPrism } from "./lib/prism";
import { init as initMenu } from "./lib/menu";

document.addEventListener('DOMContentLoaded', () => {
	initPrism();
	initMenu();
});
