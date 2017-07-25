import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { DownloadItem } from './download-item';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';

@Injectable()
// NOTE: For now, there is no DB so data is stored in memory only.
export class DownloadsService {

	log: LogService;

	// Placeholder for items.
	items: DownloadItem[] = [];

	constructor(private _logger:LogService) {
		this.log = _logger;
		this.log.debug('DownloadsService.constructor()');

		// Populate downloads list
		this.items = [
		  new DownloadItem({name: 'Manager Resume',
		                    url: 'assets/doc/manager-resume.docx',
		                    image: 'assets/images/thumbnails/manager-resume.png'}),
		  new DownloadItem({name: 'Developer Resume',
		                    url: 'assets/doc/developer-resume.docx',
                        image: 'assets/images/thumbnails/developer-resume.png'}),
		  new DownloadItem({name: 'Cover Letter',
		                    url: 'assets/doc/leadership-cover-letter.docx',
                        image: 'assets/images/thumbnails/cover-letter.png'}),
    ];
	}

	// GET /downloads
	getAll(): DownloadItem[] {
		this.log.debug('DownloadsService.getAll() count=' + this.items.length);
		return this.items;
	}

}
