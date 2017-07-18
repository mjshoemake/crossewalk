import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';
import { Resume } from './resume';
import { ResumeService } from './resume.service';
import { PageComponent } from '../page.component';
import { CollapsiblePanelComponent } from '../shared/collapsible-panel.component';
//import { CollapsibleSubPanelComponent } from '../shared/collapsible-sub-panel.component';

@Component({
	selector: 'resume',
	templateUrl: './resume.component.html',
 	styleUrls: []
})

@Injectable()
export class ResumeComponent  {
	log: LogService;
	resumeService: ResumeService;
	resume: Resume;

	constructor(private _logger: LogService,
	            private _resumeService: ResumeService,
	            private _pageComp: PageComponent) {
		this.log = _logger;
		this.log.info('ResumeService.constructor() BEGIN');
		this.resumeService = _resumeService;

		// Set up page data.
		_pageComp.pageName = 'Resume';
		_pageComp.subTitle = 'I am a leader and mentor who is skilled in building high performing software development teams. I cast a clear vision for the team, focusing on efficiency, teamwork, collaboration, and growing technical knowledge. I am also a developer who has built quality web applications for over 20 years.';
		this.resume = this.resumeService.getResume();
		this.log.info('ResumeComponent.constructor() Resume data retrieved.');
	}

}
