import { Options } from "html-webpack-plugin";

interface IPageService {
	htmlPluginOptions: () => Promise<Options>;
}

export {
	IPageService
}
