import {Franchise} from './franchise';

describe('Franchise', () => {
	it('should create an instance', () => {
		expect(new Franchise()).toBeTruthy();
		console.log('Finished test... Franchise t1.');
	});
  
	it('should accept values in the constructor', () => {
		let franchise = new Franchise({
			id: 500,
			name: 'Target', 
			website: 'http://www.target.com',
			company_email: 'support@target.com'
		});
		expect(franchise.id).toEqual(500);
		expect(franchise.name).toEqual('Target');
		expect(franchise.website).toEqual('http://www.target.com');
		expect(franchise.company_email).toEqual('support@target.com');
		console.log('Finished test... Franchise t2. DONE.');
	});
});
