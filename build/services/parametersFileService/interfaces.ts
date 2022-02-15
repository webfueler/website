interface IPageMeta {
	title: string;
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
