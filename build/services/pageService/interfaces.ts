import { Options } from "html-webpack-plugin";

interface IMenuItem {
	name: string;
	pathname: string;
}
interface IPageService {
	htmlPluginOptions: (menu?: IMenuItem[]) => Options;
	pathname: string;
}

export type {
	IPageService,
	IMenuItem
}
