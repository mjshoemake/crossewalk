import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';
import { DownloadItem } from './download-item';
import { DownloadsService } from './downloads.service';
import { PageComponent } from '../page.component';
import { CollapsiblePanelComponent } from '../shared/collapsible-panel.component';
//import { CollapsibleSubPanelComponent } from '../shared/collapsible-sub-panel.component';

@Component({
	selector: 'downloads',
	templateUrl: './downloads.component.html',
 	styleUrls: []
})

@Injectable()
export class DownloadsComponent  {
	log: LogService;
	downloadsService: DownloadsService;
	downloadItems: DownloadItem[];

	constructor(private _logger: LogService,
	            private _downloadsService: DownloadsService,
	            private _pageComp: PageComponent) {
		this.log = _logger;
		this.log.info('DownloadsService.constructor() BEGIN');
		this.downloadsService = _downloadsService;

		// Set up page data.
		_pageComp.pageName = 'Downloads';
		_pageComp.subTitle = 'Latest resumes and other documents in MS Word format.';
		this.downloadItems = this.downloadsService.getAll();
		this.log.info('DownloadsComponent.constructor() Download item count: ' + this.downloadItems.length);
    for (var item of this.downloadItems) {
      this.log.info('DownloadsComponent.constructor()   - ' + item.name);
    }
	}

}
