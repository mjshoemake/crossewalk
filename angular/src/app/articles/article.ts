export class Article {

	title: string = '';
	url: string = '';
	image: string = '';
	host: string = '';
	hostname: string = '';

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}

