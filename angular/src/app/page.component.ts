import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from './log.service';

@Component({
	selector: 'page',
	templateUrl: './page.component.html',
//	styles: [":host {'style': 'min-height: 100%; display: flex; flex-direction: column; flex-wrap: nowrap; width: 100%;'}"],
	styleUrls: []
})

@Injectable()
export class PageComponent  {
	pageName: string = '%PageName';

	// Preferences
	showBreadcrumbs: boolean = true;
	showHint: boolean = true;
	
	// Messages
	//alertMsg: string = 'Danger, Will Robinson!!  Danger!!';
	alertMsg: string = undefined;
	alertType: string = 'alert-success';
	hintText: string = 'This part of the page is used to communicate helpful hints to the user while on this page. The user should have the ability to turn off this hint using the "Don&quot;t Show This Anymore" button.';
	
	log: LogService;

	constructor(private _logger: LogService) {
		this.log = _logger; 
		this.log.debug('HeaderComponent.constructor() BEGIN');
		this.log.info('HeaderComponent.constructor() BEGIN');
	}
	
}