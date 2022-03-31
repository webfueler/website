interface IMarkdownFile {
	path: string;
	absolutePath: string;
	content: string;
	type: 'md' | 'mdx';
}

interface IMarkdownFileService {
	file: IMarkdownFile;
}

export {
	IMarkdownFile,
	IMarkdownFileService
}
