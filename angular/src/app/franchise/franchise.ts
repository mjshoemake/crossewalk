export class Franchise {
	franchise_pk: number;
	name: string = '';
	website: string = '';
	company_email: string = '';

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}

