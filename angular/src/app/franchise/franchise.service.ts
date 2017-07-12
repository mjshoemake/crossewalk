import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Franchise } from './franchise';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';

@Injectable()
// NOTE: For now, there is no DB so data is stored 
// in memory only.
export class FranchiseService {

	// Placeholder for last ID so we can simulate
	// automatic incrementing of IDs.
	lastId: number = 1;
	log: LogService;

	// Placeholder for items.
	items: Franchise[] = [];

	constructor(private _logger:LogService) {
		this.log = _logger; 
		this.log.debug('FranchiseService.constructor()');
	}
	
	// GET /franchises
	getAll(): Franchise[] {
		this.log.debug('FranchiseService.getAll()');
		return this.items;
	}

	// POST /franchises
	add(franchise: Franchise): FranchiseService {
		this.log.debug('FranchiseService.add()');
		if (! franchise.franchise_pk) {
			franchise.franchise_pk = ++this.lastId;
		}
		this.items.push(franchise);
		return this;
	}

	// DELETE /franchises/:id
	deleteById(id: number): FranchiseService {
		this.log.debug('FranchiseService.deleteById()');
		this.items = this.items.filter(item => item.franchise_pk !== id);
		return this;
	}

	// GET /franchises/:id
	getById(id: number): Franchise {
		this.log.debug('FranchiseService.getById()');
		return this.items.filter(franchise => franchise.franchise_pk === id)
		.pop();
	}

	// PUT /franchises/:id
	updateById(id: number, values: Object = {}): Franchise {
		this.log.debug('FranchiseService.updateById()');
		let item = this.getById(id);
		if (! item) {
    		return null;
		}
		Object.assign(item, values);
		return item;
	}

}
