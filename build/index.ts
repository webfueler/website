import { PageService } from './services/pageService/PageService';
import { HtmlFileService } from './services/htmlFileService/HtmlFileService';
import { MarkdownFileService } from './services/markdownFileService/MarkdownFileService';
import { ParametersFileService } from './services/parametersFileService/ParametersFileService';
import { Options } from 'html-webpack-plugin';
import { FileSystemService } from './services/fileSystemService/FileSystemService';
import { ConverterService } from './services/converterService/ConverterService';

const PAGES_PATH = '../src/pages/';

const files = FileSystemService.getFilesInFolder(PAGES_PATH, '**/*.md*');

const pages: PageService[] = files.map((file) => {
	const markdownFileService = new MarkdownFileService(PAGES_PATH + file);
	const markdownFile = markdownFileService.file;
	const converter = new ConverterService(markdownFileService);
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
