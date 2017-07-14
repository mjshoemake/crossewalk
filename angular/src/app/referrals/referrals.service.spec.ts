/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReferralsService } from './referrals.service';
import {Referral} from './referral';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from './log.service';

describe('ReferralService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ReferralsService, Logger, LogService]
		});
	});

	it('should ...', inject([ReferralsService], (service: ReferralsService) => {
		expect(service).toBeTruthy();
	}));

	describe('#getAll()', () => {
  		it('should return a list of 6 hardcoded referrals.', inject([ReferralsService], (service: ReferralsService) => {
  			expect(service.getAll().length).toEqual(6);
			console.log('Finished test... FranchiseService t1-a.');
  		}));
	});

});
