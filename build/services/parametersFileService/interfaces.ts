interface IPageMeta {
	title?: string;
	description?: string;
	name?: string;
}

interface IPageParameters {
	meta: IPageMeta;
}

interface IParametersFileService {
	getParameters(): Promise<IPageParameters>
}

export {
	IPageParameters,
	IParametersFileService
}
