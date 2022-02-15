import { IMarkdownFile } from '../markdownFileService/interfaces';
import { DEFAULT_PAGE_PARAMETERS } from './constants';
import { IPageParameters, IParametersFileService } from './interfaces';

class ParametersFileService implements IParametersFileService {
	private defaultParameters = DEFAULT_PAGE_PARAMETERS;

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
