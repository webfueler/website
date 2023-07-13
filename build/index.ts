import { PageService } from './services/pageService/PageService';
import { HtmlFileService } from './services/htmlFileService/HtmlFileService';
import { MarkdownFileService } from './services/markdownFileService/MarkdownFileService';
import { ParametersFileService } from './services/parametersFileService/ParametersFileService';
import { Options } from 'html-webpack-plugin';
import { FileSystemService } from './services/fileSystemService/FileSystemService';
import { ConverterService } from './services/converterService/ConverterService';
import type { IMenuItem } from './services/pageService/interfaces';

const PAGES_PATH = '../src/pages/';

const files = FileSystemService.getFilesInFolder(PAGES_PATH, '**/*.md*');

const menu: IMenuItem[] = [];

const pages: PageService[] = files.map((file) => {
	const markdownFileService = new MarkdownFileService(PAGES_PATH + file);
	const markdownFile = markdownFileService.file;
	const converter = new ConverterService(markdownFileService);
	const htmlService = new HtmlFileService(
		markdownFile,
		converter,
		PAGES_PATH,
	);

	const page = new PageService('../src/template.ejs', htmlService)

	if (page.name) {
		const { name, pathname } = page;

		// make sure Home if the first menu item
		page.pathname === "/" ?
			menu.unshift({ name, pathname }) :
			menu.push({ name, pathname})
	}

	return page;
});

const getPages = (): Options[] => pages.map((page) => page.htmlPluginOptions(menu));

export default getPages
