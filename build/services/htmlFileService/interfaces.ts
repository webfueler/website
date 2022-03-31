import type{ IPageParameters } from "../parametersFileService/interfaces";

interface IHtmlFile {
	filename: string;
	content: string;
	params?: IPageParameters;
}

interface IHtmlFileService {
	file: IHtmlFile;
	template?: string;
}

export {
	IHtmlFile,
	IHtmlFileService
}
