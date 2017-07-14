export class Referral {
	group: string = '';
	author: string = '';
  description: string = '';
  collapseClass: string = 'panel-collapse collapse';
  showExcerpts: boolean = true;
  excerpts: string[] = [];
  referral: string[] = [];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}

