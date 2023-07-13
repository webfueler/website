import "./styles/main.scss";
import Prism from 'prismjs';

import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";

document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll("pre");
	elements.forEach((elem) => {
		Prism.highlightAllUnder(elem);
	});
})
