import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Resume } from './resume';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';

@Injectable()
// NOTE: For now, there is no DB so data is stored in memory only.
export class ResumeService {

	log: LogService;

	// Placeholder for items.
	resume: Resume;

	constructor(private _logger:LogService) {
		this.log = _logger;
		this.log.debug('ResumeService.constructor()');

		// Populate downloads list
		this.resume = new Resume({name: 'Mike Shoemake'});
	}

	// GET /downloads
	getResume(): Resume {
		this.log.debug('ResumeService.getResume() data retrieved.');
		return this.resume;
	}

}
