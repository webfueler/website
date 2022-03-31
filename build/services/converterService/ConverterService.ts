import { Converter } from 'showdown';
import matter from 'gray-matter';
import { IMarkdownFileService } from '../markdownFileService/interfaces';
import { IPageParameters } from '../parametersFileService/interfaces';

class ConverterService {
	private mdConverter;
	public parameters?: IPageParameters;
	public html = '';

	constructor(private markdownFileService: IMarkdownFileService) {
		this.mdConverter = new Converter();
		const { data, content } = matter(this.markdownFileService.file.content);

		this.html = this.mdConverter.makeHtml(content);
		try {
			this.parameters = { meta: data as never };
		} catch(e) { console.log(e); }
	}
}

export { ConverterService };
