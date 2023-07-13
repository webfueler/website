import Prism from 'prismjs';
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";

const init = (): void => {
	const elements = document.querySelectorAll("pre");
	elements.forEach((elem) => {
		Prism.highlightAllUnder(elem);
	});
}

export { init }
