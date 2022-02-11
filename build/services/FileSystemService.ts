import * as path from 'path';

class FileSystemService {
	static absolutePath(_path: string): string {
		return path.resolve(__dirname, '..', _path);
	}

	static filename(_path: string, basePath = ''): string {
		const absoluteBasePath = FileSystemService.absolutePath(basePath);
		const absoluteFilenamePath = FileSystemService.absolutePath(_path);
		return absoluteFilenamePath.replace(absoluteBasePath,'').replace('.md','').slice(1);
	}
}

export { FileSystemService }
