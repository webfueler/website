import { PageService } from './services/PageService';
import { HtmlFileService } from './services/HtmlFileService';
import { MarkdownFileService } from './services/MarkdownFileService';
import { Converter } from 'showdown';
import { ParametersFileService } from './services/ParametersFileService';
import { Options } from 'html-webpack-plugin';

const converter = new Converter();
const PAGES_PATH = '../src/pages/';

const indexMarkdownFile = new MarkdownFileService(PAGES_PATH + 'index.md').file;
const indexParameters = new ParametersFileService(indexMarkdownFile);
const indexFile = new HtmlFileService(
	indexMarkdownFile,
	converter,
	PAGES_PATH
);

const aboutMarkdownFile = new MarkdownFileService(PAGES_PATH + 'about.md').file;
const aboutParameters = new ParametersFileService(aboutMarkdownFile);
const aboutFile = new HtmlFileService(
	aboutMarkdownFile,
	converter,
	PAGES_PATH
);

const blogGettingStartedMarkdownFile = new MarkdownFileService(PAGES_PATH + 'blog/getting-started.md').file;
const blogGettingStartedParameters = new ParametersFileService(blogGettingStartedMarkdownFile);
const blogGettingStartedFile = new HtmlFileService(
	blogGettingStartedMarkdownFile,
	converter,
	PAGES_PATH
);

const getPages = async (): Promise<Options[]> => {
	const indexPageOptions = await new PageService('../src/template.ejs', indexFile, indexParameters).htmlPluginOptions();
	const aboutPageOptions = await new PageService('../src/template.ejs', aboutFile, aboutParameters).htmlPluginOptions();
	const blogGettingStartedOptions = await new PageService('../src/template.ejs', blogGettingStartedFile, blogGettingStartedParameters).htmlPluginOptions();

	return [
		indexPageOptions, aboutPageOptions, blogGettingStartedOptions
	]
}

export default getPages
