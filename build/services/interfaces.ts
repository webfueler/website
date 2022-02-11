interface IMarkdownFile {
	path: string;
	absolutePath: string;
	content: string;
}

interface IHtmlFile {
	filename: string;
	content: string;
}

interface IPage {
	markdownFile: IMarkdownFile;
	htmlFile: IHtmlFile;
}

interface IPageMeta {
	title: string;
}

interface IPageParameters {
	meta: IPageMeta;
}

export {
	IMarkdownFile,
	IHtmlFile,
	IPage,
	IPageParameters,
}
