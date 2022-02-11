import { IMarkdownFile, IPageParameters } from './interfaces';

interface IParametersFileService {
	getParameters(): Promise<IPageParameters>
}

class ParametersFileService implements IParametersFileService {
	private defaultParameters: IPageParameters = {
		meta: {
			title: 'Default Title'
		}
	}

	constructor(
		private markdownFile: IMarkdownFile,
	) {}

	public getParameters(): Promise<IPageParameters> {
		const parameterFileToImport = this.markdownFile.absolutePath.replace('.md', '.ts');

		return import(parameterFileToImport)
			.then((parameters: { default : IPageParameters}) => {
				if (parameters && parameters.default && parameters.default.meta) {
					return parameters.default;
				}

				return this.defaultParameters;
			})
			.catch(() => {
				console.log('couldn\'t load parameters file', parameterFileToImport);
				return this.defaultParameters;
			});
	}
}

export { ParametersFileService };
