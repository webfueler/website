import { Options } from 'html-webpack-plugin';
import { HtmlFileService } from '../htmlFileService/HtmlFileService';
import { FileSystemService } from '../fileSystemService/FileSystemService';
import { ParametersFileService } from '../parametersFileService/ParametersFileService';
import { IPageService } from './interfaces';
import { HTML_WEBPACK_PLUGIN_OPTIONS } from './constants';

export class PageService implements IPageService {
	private defaultOptions = HTML_WEBPACK_PLUGIN_OPTIONS;

	constructor(
		private defaultTemplate: string,
		private htmlFileService: HtmlFileService,
		private parametersFileService: ParametersFileService,
	) {}

	async htmlPluginOptions(): Promise<Options> {
		const parameters = this.htmlFileService.file.params || await this.parametersFileService.getParameters();

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
