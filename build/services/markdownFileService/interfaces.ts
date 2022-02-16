interface IMarkdownFile {
	path: string;
	absolutePath: string;
	content: string;
}

interface IMarkdownFileService {
	file: IMarkdownFile;
}

export {
	IMarkdownFile,
	IMarkdownFileService
}
