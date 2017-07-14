import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';
import { PageComponent } from '../page.component';

@Component({
	selector: 'preferences',
	templateUrl: './prefs.component.html',
	styleUrls: []
})

@Injectable()
export class PreferencesComponent  {
	log: LogService;

	constructor(private _logger: LogService,
	            private _pageComp: PageComponent) {
		this.log = _logger; 
		this.log.debug('PreferencesComponent.constructor() BEGIN');
		this.log.info('PreferencesComponent.constructor() BEGIN');
		_pageComp.pageName = 'Preferences';
	}
	
}