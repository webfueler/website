const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV !== "development";

const customWebpackConfig = async () => {
	const htmlFilesCreator = (await import('./build')).default;
	const htmlFiles = await htmlFilesCreator();

	const config = {
		entry: path.resolve(__dirname, "src/index.ts"),
		output: {
			filename: isProduction ? "index.[fullhash].module.js" : "index.js",
			path: path.resolve(__dirname, "dist"),
		},
		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"resolve-url-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						}
					}
					],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
						loader: 'file-loader',
						},
					],
				},
				{
					test: /\.tsx?$/,
					loader: "ts-loader"
				}
			],
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js"]
		},
		plugins: [
			new MiniCssExtractPlugin(),
			...htmlFiles.map((elem) => new HtmlWebpackPlugin(elem)),
			new CopyPlugin({
				patterns: [
					{ from: path.resolve(__dirname, './src/assets'), to: path.resolve(__dirname, './dist/assets') }
				]
			})
		],
	};
	return config;
}

module.exports = customWebpackConfig();
