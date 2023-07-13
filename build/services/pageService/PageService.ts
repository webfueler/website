import { Options } from 'html-webpack-plugin';
import { HtmlFileService } from '../htmlFileService/HtmlFileService';
import { FileSystemService } from '../fileSystemService/FileSystemService';
import { IMenuItem, IPageService } from './interfaces';
import { HTML_WEBPACK_PLUGIN_OPTIONS } from './constants';

export class PageService implements IPageService {
	private defaultOptions = HTML_WEBPACK_PLUGIN_OPTIONS;

	constructor(
		private defaultTemplate: string,
		private htmlFileService: HtmlFileService,
	) {}

	public get pathname(): string {
		return '/' + this.htmlFileService.file.filename.replace("index.html", "");
	}

	public get name(): string | undefined {
		return this.htmlFileService.file.params?.meta.name;
	}

	public get description(): string | undefined {
		return this.htmlFileService.file.params?.meta.description;
	}
	public htmlPluginOptions(menu?: IMenuItem[]): Options {
		const parameters = this.htmlFileService.file.params;

		return {
			...this.defaultOptions,
			template: FileSystemService.absolutePath(this.htmlFileService.template || this.defaultTemplate),
			filename: this.htmlFileService.file.filename,
			templateParameters: {
				...parameters,
				menu,
				markdown: this.htmlFileService.file.content,
			},
		}
	}
}
