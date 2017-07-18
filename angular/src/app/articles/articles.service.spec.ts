/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticlesService } from './articles.service';
import { Article } from './article';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from './log.service';

describe('ArticlesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ArticlesService, Logger, LogService]
		});
	});

	it('should ...', inject([ArticlesService], (service: ArticlesService) => {
		expect(service).toBeTruthy();
	}));

	describe('#getAll()', () => {
  		it('should return a list of 3 hardcoded articles.', inject([ArticlesService], (service: ArticlesService) => {
  			expect(service.getAll().length).toEqual(3);
			console.log('Finished test... ArticlesService t1-a.');
  		}));
	});

});
