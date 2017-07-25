/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DownloadsService } from './downloads.service';
import { DownloadItem } from './downloadItem';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from './log.service';

describe('DownloadsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [DownloadsService, Logger, LogService]
		});
	});

	it('should ...', inject([DownloadsService], (service: DownloadsService) => {
		expect(service).toBeTruthy();
	}));

	describe('#getAll()', () => {
  		it('should return a list of 3 hardcoded download items.', inject([DownloadsService], (service: DownloadsService) => {
  			expect(service.getAll().length).toEqual(3);
			console.log('Finished test... DownloadsService t1-a.');
  		}));
	});

});
