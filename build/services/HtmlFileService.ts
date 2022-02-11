import { Converter } from 'showdown';
import { IHtmlFile, IMarkdownFile } from './interfaces';
import { FileSystemService } from './FileSystemService';

interface IHtmlFileService {
	file: IHtmlFile;
	template?: string;
}

class HtmlFileService implements IHtmlFileService {
	private convertedFile: IHtmlFile = { content: '', filename: ''};

	constructor(
		private markdownFile: IMarkdownFile,
		private converterService: Converter,
		private basePath?: string,
		public template?: string,
	) {
		const content = this.getHtmlContentFromMarkdownFile();
		const filename = this.getHtmlFilenameFromMarkdownFile();
		this.convertedFile = {
			content,
			filename
		};
	}

	get file() : IHtmlFile {
		return this.convertedFile;
	}

	private getHtmlContentFromMarkdownFile(): string {
		return this.converterService.makeHtml(this.markdownFile.content).replace(/.md/g,'.html');
	}

	private getHtmlFilenameFromMarkdownFile	(): string {
		return `${FileSystemService.filename(this.markdownFile.path, this.basePath)}.html`;
	}
}

export { HtmlFileService };
