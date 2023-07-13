import { IHtmlFile, IHtmlFileService } from './interfaces';
import { IMarkdownFile } from '../markdownFileService/interfaces';
import { FileSystemService } from '../fileSystemService/FileSystemService';
import { ConverterService } from '../converterService/ConverterService';

class HtmlFileService implements IHtmlFileService {
	private convertedFile: IHtmlFile = { content: '', filename: ''};

	constructor(
		private markdownFile: IMarkdownFile,
		private converterService: ConverterService,
		private basePath?: string,
		public template?: string,
	) {
		const content = this.getHtmlContentFromMarkdownFile();
		const filename = this.getHtmlFilenameFromMarkdownFile();
		const params = this.converterService.parameters;
		this.convertedFile = {
			content,
			filename,
			params
		};
	}

	get file() : IHtmlFile {
		return this.convertedFile;
	}

	private replaceMarkdownLinksWithHtmlLinks(value: string): string {
		return value.replace(/.mdx?/g,'.html').replace(/\/index.html/g, '/');
	}

	private getHtmlContentFromMarkdownFile(): string {
		return this.replaceMarkdownLinksWithHtmlLinks(this.converterService.html);
	}

	private getHtmlFilenameFromMarkdownFile	(): string {
		return `${FileSystemService.filename(this.markdownFile.path, this.basePath)}.html`;
	}
}

export { HtmlFileService };
