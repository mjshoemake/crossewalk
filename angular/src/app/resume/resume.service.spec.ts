/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResumeService } from './resume.service';
import { Resume } from './resume';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from './log.service';

describe('ResumeService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ResumeService, Logger, LogService]
		});
	});

	it('should ...', inject([ResumeService], (service: ResumeService) => {
		expect(service).toBeTruthy();
	}));

	describe('#getAll()', () => {
  		it('should return a resume object instance.', inject([ResumeService], (service: ResumeService) => {
  			expect(service.getResume()).toBeTruthy();
			console.log('Finished test... ResumeService t1-a.');
  		}));
	});

});
