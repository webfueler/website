import { readFileSync } from 'fs';
import { FileSystemService } from '../fileSystemService/FileSystemService';
import { IMarkdownFileService, IMarkdownFile } from './interfaces';

class MarkdownFileService implements IMarkdownFileService {
	private markdownFile: IMarkdownFile = {
		content: '', path: '', absolutePath: ''
	};
	private absolutePath = '';

	constructor(
		path: string,
	) {
		this.absolutePath = FileSystemService.absolutePath(path);
		const content = this.getMardownFileContent();
		this.markdownFile = {
			content,
			path,
			absolutePath: this.absolutePath,
		}
	}

	get file() : IMarkdownFile {
		return this.markdownFile;
	}

	private getMardownFileContent(): string {
		return readFileSync(this.absolutePath).toString();
	}
}

export { MarkdownFileService };
