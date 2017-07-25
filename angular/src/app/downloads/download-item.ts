export class DownloadItem {

	name: string = '';
	url: string = '';
	image: string = '';

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}

