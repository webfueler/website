import { PageService } from './services/pageService/PageService';
import { HtmlFileService } from './services/htmlFileService/HtmlFileService';
import { MarkdownFileService } from './services/markdownFileService/MarkdownFileService';
import { Converter } from 'showdown';
import { ParametersFileService } from './services/parametersFileService/ParametersFileService';
import { Options } from 'html-webpack-plugin';
import { FileSystemService } from './services/fileSystemService/FileSystemService';

const converter = new Converter();
const PAGES_PATH = '../src/pages/';

const files = FileSystemService.getFilesInFolder(PAGES_PATH, '**/*.md');

const pages: PageService[] = files.map((file) => {
	const markdownFile = new MarkdownFileService(PAGES_PATH + file).file;
	const parameters = new ParametersFileService(markdownFile);
	const htmlService = new HtmlFileService(
		markdownFile,
		converter,
		PAGES_PATH,
	);

	return new PageService('../src/template.ejs', htmlService, parameters)
});

const getPages = async (): Promise<Options[]> => {
	const promises = pages.map((page) => page.htmlPluginOptions());
	return Promise.all(promises)
}

export default getPages
