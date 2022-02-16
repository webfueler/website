interface IHtmlFile {
	filename: string;
	content: string;
}

interface IHtmlFileService {
	file: IHtmlFile;
	template?: string;
}

export {
	IHtmlFile,
	IHtmlFileService
}
