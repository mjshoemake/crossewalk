import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';
import { Referral } from './referral';
import { ReferralGroup } from './referral-group';
import { ReferralsService } from './referrals.service';
import { PageComponent } from '../page.component';
import { CollapsiblePanelComponent } from '../shared/collapsible-panel.component';
//import { CollapsibleSubPanelComponent } from '../shared/collapsible-sub-panel.component';

@Component({
	selector: 'referralList',
	templateUrl: './referral-list.component.html',
	styleUrls: []
})

@Injectable()
export class ReferralListComponent  {
	log: LogService;
	referralsService: ReferralsService;
	referrals: ReferralGroup[];

	constructor(private _logger: LogService,
	            private _referralsService: ReferralsService,
	            private _pageComp: PageComponent) {
		this.log = _logger;
		this.log.info('ReferralListComponent.constructor() BEGIN');
		this.referralsService = _referralsService;

		// Set up page data.
		_pageComp.pageName = 'Referrals';
		_pageComp.subTitle = 'Referrals for Mike Shoemake written by former colleagues.';
		this.referrals = this.referralsService.getAll();
		this.log.info('ReferralListComponent.constructor() Referral group count: ' + this.referrals.length);
    for (var group of this.referrals) {
      this.log.info('ReferralListComponent.constructor()   - ' + group.caption);
    }

	}

	showExcerpts(referral: Referral) {
	  referral.showExcerpts = true;
	}

	showFull(referral: Referral) {
	  referral.showExcerpts = false;
	}

	showReferral(group: ReferralGroup, referral: Referral) {
	  if (referral.collapseClass === "panel-collapse collapse") {
      for (var next of group.referrals) {
        if (next === referral) {
          next.collapseClass = "panel-collapse in"
        } else {
          next.collapseClass = "panel-collapse collapse"
        }
      }
	  } else {
	    referral.collapseClass = "panel-collapse collapse";
	  }
	}

	showReferralByAuthor(author: string) {
	  if (author != "[object MouseEvent]") {
		  this.log.info('ReferralListComponent.showReferral() BEGIN author=' + author);
      for (var group of this.referrals) {
        let referral: Referral = group.getReferralByAuthor(author);
        if (referral) {
		      this.log.info('ReferralListComponent.showReferral() Group ' + group.caption + ' contains referral ' + author + '.');
          group.onlyShowReferral(referral);
          this.log.info('ReferralListComponent.showReferral() Showing only ' + author + '. Others collapsed.');
          return;
        }
      }
	  }
	}

}
