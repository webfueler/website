import { readFileSync } from 'fs';
import { FileSystemService } from '../fileSystemService/FileSystemService';
import { IMarkdownFileService, IMarkdownFile } from './interfaces';

class MarkdownFileService implements IMarkdownFileService {
	private markdownFile: IMarkdownFile = {
		content: '', path: '', absolutePath: '', type: 'md'
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
			type: this.getMarkdownFileType(),
		}
	}

	get file() : IMarkdownFile {
		return this.markdownFile;
	}

	private getMarkdownFileType(): 'md' | 'mdx' {
		if (this.absolutePath.endsWith('.md')) {
			return 'md';
		}

		return 'mdx';
	}

	private getMardownFileContent(): string {
		return readFileSync(this.absolutePath).toString();
	}
}

export { MarkdownFileService };
