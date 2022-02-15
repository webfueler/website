import "./styles/main.scss";
import Prism from 'prismjs';

document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll("pre");
	elements.forEach((elem) => {
		Prism.highlightAllUnder(elem);
	});
})
