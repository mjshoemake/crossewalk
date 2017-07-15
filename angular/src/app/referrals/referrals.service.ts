import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Referral } from './referral';
import { ReferralGroup } from './referral-group';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';

@Injectable()
// NOTE: For now, there is no DB so data is stored
// in memory only.
export class ReferralsService {

	log: LogService;

	// Placeholder for items.
	items: ReferralGroup[] = [];

	constructor(private _logger:LogService) {
		this.log = _logger;
		this.log.debug('ReferralsService.constructor()');

		// Populate referrals list
		this.items = [
		  new ReferralGroup({caption: 'Former Managers', referrals:
		    [
          new Referral({
	  		    group: 'mgr',
  		  	  author: 'Chip Owen',
	  		    description: "Mike's Director of Development at Amplify",
	  		    showExcerpts: true,
            collapseClass: "panel-collapse in",
		  	    excerpts: ["\"He grew quickly with his java background learning Groovy/Grails to " +
                       "build the BMC from the ground up.\"",
			                 "\"For the past year, Mike has been an Engineering Manager on key modules " +
			                 "in our Content Delivery tablet application. Mike has demonstrated his " +
                       "skills in handling demanding deadlines, complex functional requirements, " +
			                 "and integrating with multiple teams working in an overlapping code base.\""],
  	  		  referral: ["\"I have enjoyed working with Mike for 3 years here at Amplify. He joined " +
	  	  	             "our team working on the Content Publishing and Book Management Console " +
		  	               "projects. He grew quickly with his java background learning Groovy/Grails " +
                       "to build the BMC from the ground up. He created a rules engine that " +
                       "adapted the JSON output to match a changing target API allowing us to keep " +
                       "the systems communicating in spite of the moving target. He worked long and " +
                       "hard to adapt the publishing app as we received new ePub formats from " +
                       "Harper-Collins and other book publishers. Each new source had subtle 'new " +
                       "features' that would not be found until we processed sample books. Mike " +
                       "inevitably sorted out the quirks and anomalies keeping us on-track as new " +
                       "book formats arrived.",
                       "For the past year, Mike has been an Engineering Manager on key modules in " +
                       "our Content Delivery tablet application. Mike has demonstrated his skills " +
                       "in handling demanding deadlines, complex functional requirements, and " +
                       "integrating with multiple teams working in an overlapping code base. I look " +
                       "forward to the opportunity to work with Mike in the future.\""]
  		    }),
          new Referral({
	  		    group: 'mgr',
  		  	  author: 'Neil Sambol',
	  		    description: "Mike's Director of Development at Amplify",
	  		    showExcerpts: true,
            collapseClass: "panel-collapse collapse",
		  	    excerpts: ["He grew quickly with his java background learning Groovy/Grails to " +
                       "build the BMC from the ground up.",
			                 "For the past year, Mike has been an Engineering Manager on key modules " +
			                 "in our Content Delivery tablet application. Mike has demonstrated his " +
                       "skills in handling demanding deadlines, complex functional requirements, " +
			                 "and integrating with multiple teams working in an overlapping code base."],
  	  		  referral: ["I have enjoyed working with Mike for 3 years here at Amplify. He joined " +
	  	  	             "our team working on the Content Publishing and Book Management Console " +
		  	               "projects. He grew quickly with his java background learning Groovy/Grails " +
                       "to build the BMC from the ground up. He created a rules engine that " +
                       "adapted the JSON output to match a changing target API allowing us to keep " +
                       "the systems communicating in spite of the moving target. He worked long and " +
                       "hard to adapt the publishing app as we received new ePub formats from " +
                       "Harper-Collins and other book publishers. Each new source had subtle 'new " +
                       "features' that would not be found until we processed sample books. Mike " +
                       "inevitably sorted out the quirks and anomalies keeping us on-track as new " +
                       "book formats arrived.",
                       "For the past year, Mike has been an Engineering Manager on key modules in " +
                       "our Content Delivery tablet application. Mike has demonstrated his skills " +
                       "in handling demanding deadlines, complex functional requirements, and " +
                       "integrating with multiple teams working in an overlapping code base. I look " +
                       "forward to the opportunity to work with Mike in the future."]
  		    }),
          new Referral({
	  		    group: 'mgr',
  		  	  author: 'Joe Davidson',
	  		    description: "Mike's Development Manager at Amplify",
	  		    showExcerpts: true,
            collapseClass: "panel-collapse collapse",
		  	    excerpts: ["\"He grew quickly with his java background learning Groovy/Grails to " +
                       "build the BMC from the ground up.\"",
			                 "\"For the past year, Mike has been an Engineering Manager on key modules " +
			                 "in our Content Delivery tablet application. Mike has demonstrated his " +
                       "skills in handling demanding deadlines, complex functional requirements, " +
			                 "and integrating with multiple teams working in an overlapping code base.\""],
  	  		  referral: ["\"I have enjoyed working with Mike for 3 years here at Amplify. He joined " +
	  	  	             "our team working on the Content Publishing and Book Management Console " +
		  	               "projects. He grew quickly with his java background learning Groovy/Grails " +
                       "to build the BMC from the ground up. He created a rules engine that " +
                       "adapted the JSON output to match a changing target API allowing us to keep " +
                       "the systems communicating in spite of the moving target. He worked long and " +
                       "hard to adapt the publishing app as we received new ePub formats from " +
                       "Harper-Collins and other book publishers. Each new source had subtle 'new " +
                       "features' that would not be found until we processed sample books. Mike " +
                       "inevitably sorted out the quirks and anomalies keeping us on-track as new " +
                       "book formats arrived.",
                       "For the past year, Mike has been an Engineering Manager on key modules in " +
                       "our Content Delivery tablet application. Mike has demonstrated his skills " +
                       "in handling demanding deadlines, complex functional requirements, and " +
                       "integrating with multiple teams working in an overlapping code base. I look " +
                       "forward to the opportunity to work with Mike in the future.\""]
  		    })
        ]
		  }),
		  new ReferralGroup({caption: 'Former Employees', referrals:
		    [
          new Referral({
	  		    group: 'emp',
  		  	  author: 'Darren Nelsen',
	  		    description: "Web UI Developer on Mike's Team at Amplify",
	  		    showExcerpts: true,
            collapseClass: "panel-collapse in",
		  	    excerpts: ["He grew quickly with his java background learning Groovy/Grails to " +
                       "build the BMC from the ground up.",
			                 "For the past year, Mike has been an Engineering Manager on key modules " +
			                 "in our Content Delivery tablet application. Mike has demonstrated his " +
                       "skills in handling demanding deadlines, complex functional requirements, " +
			                 "and integrating with multiple teams working in an overlapping code base."],
  	  		  referral: ["I have enjoyed working with Mike for 3 years here at Amplify. He joined " +
	  	  	             "our team working on the Content Publishing and Book Management Console " +
		  	               "projects. He grew quickly with his java background learning Groovy/Grails " +
                       "to build the BMC from the ground up. He created a rules engine that " +
                       "adapted the JSON output to match a changing target API allowing us to keep " +
                       "the systems communicating in spite of the moving target. He worked long and " +
                       "hard to adapt the publishing app as we received new ePub formats from " +
                       "Harper-Collins and other book publishers. Each new source had subtle 'new " +
                       "features' that would not be found until we processed sample books. Mike " +
                       "inevitably sorted out the quirks and anomalies keeping us on-track as new " +
                       "book formats arrived.",
                       "For the past year, Mike has been an Engineering Manager on key modules in " +
                       "our Content Delivery tablet application. Mike has demonstrated his skills " +
                       "in handling demanding deadlines, complex functional requirements, and " +
                       "integrating with multiple teams working in an overlapping code base. I look " +
                       "forward to the opportunity to work with Mike in the future."]
  		    }),
          new Referral({
	  		    group: 'emp',
  		  	  author: 'Keith Eisla',
	  		    description: "Web UI Developer on Mike's Team at Amplify",
	  		    showExcerpts: true,
            collapseClass: "panel-collapse collapse",
		  	    excerpts: ["He grew quickly with his java background learning Groovy/Grails to " +
                       "build the BMC from the ground up.",
			                 "For the past year, Mike has been an Engineering Manager on key modules " +
			                 "in our Content Delivery tablet application. Mike has demonstrated his " +
                       "skills in handling demanding deadlines, complex functional requirements, " +
			                 "and integrating with multiple teams working in an overlapping code base."],
  	  		  referral: ["I have enjoyed working with Mike for 3 years here at Amplify. He joined " +
	  	  	             "our team working on the Content Publishing and Book Management Console " +
		  	               "projects. He grew quickly with his java background learning Groovy/Grails " +
                       "to build the BMC from the ground up. He created a rules engine that " +
                       "adapted the JSON output to match a changing target API allowing us to keep " +
                       "the systems communicating in spite of the moving target. He worked long and " +
                       "hard to adapt the publishing app as we received new ePub formats from " +
                       "Harper-Collins and other book publishers. Each new source had subtle 'new " +
                       "features' that would not be found until we processed sample books. Mike " +
                       "inevitably sorted out the quirks and anomalies keeping us on-track as new " +
                       "book formats arrived.",
                       "For the past year, Mike has been an Engineering Manager on key modules in " +
                       "our Content Delivery tablet application. Mike has demonstrated his skills " +
                       "in handling demanding deadlines, complex functional requirements, and " +
                       "integrating with multiple teams working in an overlapping code base. I look " +
                       "forward to the opportunity to work with Mike in the future."]
  		    }),
          new Referral({
	  		    group: 'emp',
  		  	  author: 'Brad Wiederholt',
	  		    description: "Web UI Developer on Mike's Team at Amplify",
	  		    showExcerpts: true,
            collapseClass: "panel-collapse collapse",
		  	    excerpts: ["He grew quickly with his java background learning Groovy/Grails to " +
                       "build the BMC from the ground up.",
			                 "For the past year, Mike has been an Engineering Manager on key modules " +
			                 "in our Content Delivery tablet application. Mike has demonstrated his " +
                       "skills in handling demanding deadlines, complex functional requirements, " +
			                 "and integrating with multiple teams working in an overlapping code base."],
  	  		  referral: ["I have enjoyed working with Mike for 3 years here at Amplify. He joined " +
	  	  	             "our team working on the Content Publishing and Book Management Console " +
		  	               "projects. He grew quickly with his java background learning Groovy/Grails " +
                       "to build the BMC from the ground up. He created a rules engine that " +
                       "adapted the JSON output to match a changing target API allowing us to keep " +
                       "the systems communicating in spite of the moving target. He worked long and " +
                       "hard to adapt the publishing app as we received new ePub formats from " +
                       "Harper-Collins and other book publishers. Each new source had subtle 'new " +
                       "features' that would not be found until we processed sample books. Mike " +
                       "inevitably sorted out the quirks and anomalies keeping us on-track as new " +
                       "book formats arrived.",
                       "For the past year, Mike has been an Engineering Manager on key modules in " +
                       "our Content Delivery tablet application. Mike has demonstrated his skills " +
                       "in handling demanding deadlines, complex functional requirements, and " +
                       "integrating with multiple teams working in an overlapping code base. I look " +
                       "forward to the opportunity to work with Mike in the future."]
  		    })
        ]
		  })
    ];
	}

	// GET /referral
	getAll(): ReferralGroup[] {
		this.log.debug('ReferralsService.getAll() count=' + this.items.length);
		return this.items;
	}

}
