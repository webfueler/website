import { Options } from 'html-webpack-plugin';
import { HtmlFileService } from './HtmlFileService';
import { FileSystemService } from './FileSystemService';
import { ParametersFileService } from './ParametersFileService';

export class PageService {
	private defaultOptions: Options = {
		inject: true,
		minify: true,
	};

	constructor(
		private defaultTemplate: string,
		private htmlFileService: HtmlFileService,
		private parametersFileService: ParametersFileService,
	) {}

	async htmlPluginOptions(): Promise<Options> {
		const parameters = await this.parametersFileService.getParameters();

		return {
			...this.defaultOptions,
			template: FileSystemService.absolutePath(this.htmlFileService.template || this.defaultTemplate),
			filename: this.htmlFileService.file.filename,
			templateParameters: {
				...parameters,
				markdown: this.htmlFileService.file.content,
			},
		}
	}
}
