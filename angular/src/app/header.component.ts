import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from './log.service';

@Component({
	selector: 'appHeader',
	templateUrl: './header.component.html',
	styleUrls: []
})

@Injectable()
export class HeaderComponent  {
	appName: string = 'Map My Shop';
	headerImage: string = 'images/shopping-cart2.png';
	log: LogService;

	constructor(private _logger: LogService) {
		this.log = _logger; 
		this.log.debug('HeaderComponent.constructor() BEGIN');
		this.log.info('HeaderComponent.constructor() BEGIN');
	}
	
}