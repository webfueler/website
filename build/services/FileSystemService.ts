import * as path from 'path';
import { GlobSync } from 'glob';

class FileSystemService {
	static absolutePath(_path: string): string {
		return path.resolve(__dirname, '..', _path);
	}

	static filename(_path: string, basePath = ''): string {
		const absoluteBasePath = FileSystemService.absolutePath(basePath);
		const absoluteFilenamePath = FileSystemService.absolutePath(_path);
		return absoluteFilenamePath.replace(absoluteBasePath,'').replace('.md','').slice(1);
	}

	static getFilesInFolder(folder: string, pattern: string): string[] {
		const absoluteBasePath = FileSystemService.absolutePath(folder);
		const glob = new GlobSync(FileSystemService.absolutePath(folder + pattern));

		return glob.found.map((file) => {
			const relativeFilePage = file.replace(absoluteBasePath, '').slice(1);
			return relativeFilePage;
		})
	}
}

export { FileSystemService }
