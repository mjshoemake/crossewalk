import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';
import { PageComponent } from '../page.component';

@Component({
	selector: 'franchiseList',
	templateUrl: './franchise-list.component.html',
	styleUrls: []
})

@Injectable()
export class FranchiseListComponent  {
	log: LogService;

	constructor(private _logger: LogService,
	            private _pageComp: PageComponent) {
		this.log = _logger; 
		this.log.debug('FranchiseListComponent.constructor() BEGIN');
		this.log.info('FranchiseListComponent.constructor() BEGIN');
		_pageComp.pageName = 'My Stores';
	}
	
}