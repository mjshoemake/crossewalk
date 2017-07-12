/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FranchiseService } from './franchise.service';
import {Franchise} from './franchise';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from './log.service';

describe('FranchiseService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FranchiseService, Logger, LogService]
		});
	});

	it('should ...', inject([FranchiseService], (service: FranchiseService) => {
		expect(service).toBeTruthy();
	}));
  
	describe('#getAll()', () => {
  		it('should return an empty array by default', inject([FranchiseService], (service: FranchiseService) => {
  			expect(service.getAll()).toEqual([]);
			console.log('Finished test... FranchiseService t1-a.');
  		}));
  		
  		it('should return all items', inject([FranchiseService], (service: FranchiseService) => {
			let item1 = new Franchise({franchise_pk: 1, 
			                           name: 'Walmart', 
			                           website: 'http://www.walmart.com', 
			                           company_email: 'support@walmart.com'});
			let item2 = new Franchise({franchise_pk: 2, 
			                           name: 'Kroger', 
			                           website: 'http://www.kroger.com', 
			                           company_email: 'support@kroger.com'});
			service.add(item1);
			service.add(item2);
			expect(service.getAll()).toEqual([item1, item2]);
			console.log('Finished test... FranchiseService t1-b.');
  		}));
	});
	
	describe('#add(franchise)', () => {
  		it('should automatically assign an incrementing id', inject([FranchiseService], (service: FranchiseService) => {
			let item1 = new Franchise({franchise_pk: 1, 
			                           name: 'Walmart', 
			                           website: 'http://www.walmart.com', 
			                           company_email: 'support@walmart.com'});
			let item2 = new Franchise({franchise_pk: 2, 
			                           name: 'Kroger', 
			                           website: 'http://www.kroger.com', 
			                           company_email: 'support@kroger.com'});
			service.add(item1);
			service.add(item2);
			expect(service.getById(1)).toEqual(item1);
			expect(service.getById(2)).toEqual(item2);
			console.log('Finished test... FranchiseService t2.');
  		}));
	});
	
	describe('#deleteById(id)', () => {
  		it('should remove item with the corresponding id', inject([FranchiseService], (service: FranchiseService) => {
			let item1 = new Franchise({franchise_pk: 1, 
			                           name: 'Walmart', 
			                           website: 'http://www.walmart.com', 
			                           company_email: 'support@walmart.com'});
			let item2 = new Franchise({franchise_pk: 2, 
			                           name: 'Kroger', 
			                           website: 'http://www.kroger.com', 
			                           company_email: 'support@kroger.com'});
			service.add(item1);
			service.add(item2);
			expect(service.getAll()).toEqual([item1, item2]);
			service.deleteById(1);
			expect(service.getAll()).toEqual([item2]);
			service.deleteById(2);
			expect(service.getAll()).toEqual([]);
			console.log('Finished test... FranchiseService t3-a.');
  		}));

  		it('should not removing anything if item with corresponding id is not found', inject([FranchiseService], (service: FranchiseService) => {
			let item1 = new Franchise({franchise_pk: 1, 
			                           name: 'Walmart', 
			                           website: 'http://www.walmart.com', 
			                           company_email: 'support@walmart.com'});
			let item2 = new Franchise({franchise_pk: 2, 
			                           name: 'Kroger', 
			                           website: 'http://www.kroger.com', 
			                           company_email: 'support@kroger.com'});
			service.add(item1);
			service.add(item2);
			expect(service.getAll()).toEqual([item1, item2]);
			service.deleteById(3);
			expect(service.getAll()).toEqual([item1, item2]);
			console.log('Finished test... FranchiseService t3-b.');
  		}));
	});
	
	describe('#updateById(id, values)', () => {
  		it('should return todo with the corresponding id and updated data', inject([FranchiseService], (service: FranchiseService) => {
			let item1 = new Franchise({franchise_pk: 1, 
			                           name: 'Walmart', 
			                           website: 'http://www.walmart.com', 
			                           company_email: 'support@walmart.com'});
			service.add(item1);
			let updatedItem = service.updateById(1, {
				name: 'Walmart changed!!'
			});
			expect(updatedItem.name).toEqual('Walmart changed!!');	
			//expect(service.getById(1)).name.toEqual('Walmart changed!!');
			console.log('Finished test... FranchiseService t4-a.');
  		}));

  		it('should return null if todo is not found', inject([FranchiseService], (service: FranchiseService) => {
			let item1 = new Franchise({franchise_pk: 1, 
			                           name: 'Walmart', 
			                           website: 'http://www.walmart.com', 
			                           company_email: 'support@walmart.com'});
			service.add(item1);
			let updatedItem = service.updateById(2, {
				name: 'Walmart changed!!'
			});
			expect(updatedItem).toEqual(null);	
			console.log('Finished test... FranchiseService t4-b.');
  		}));
	});
	
});
