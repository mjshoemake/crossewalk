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
		  	    excerpts: ["\"I have known and worked with Mike for nearly fifteen years. I have worked with Mike " +
                       "at three different companies. I hired Mike at two of these companies and I would hire " +
                       "Mike again.\"",
			                 "\"Overall, Mike is hardworking, pays attention to detail, is reliable, friendly, well " +
			                 "regarded by his teammates and peers, cares about his teammates and learns and applies new " +
			                 "technologies quickly. Mike would make a fantastic addition to any development team.\""],
  	  		  referral: ["\"I have known and worked with Mike for nearly fifteen years. I have worked with Mike at " +
  	  		             "three different companies. I hired Mike at two of these companies and I would hire Mike " +
  	  		             "again.",
                       "At Mike's latest job, Amplify, I hired Mike as a developer to work on a portion of a product " +
                       "that was implemented in a technology stack that was new to Mike. Mike quickly learned the new " +
                       "technology stack and product requirements and was contributing to the implementation of this " +
                       "product in a very short period of time.",
                       "Later at Amplify, I asked Mike to step into a development manager role that had recently become " +
                       "available. Mike stepped into this role under difficult circumstances: different technology stack, " +
                       "different business requirements, new development team, compressed schedule. Mike quickly stepped " +
                       "into the role, mastered the new technology stack and requirements and gained the confidence and " +
                       "respect of the development team. Mike led the team through a number of successful sprints delivering " +
                       "on time with quality.",
                       "Mike is a passionate practitioner of the Agile methodology. He has a great deal of experience " +
                       "applying Agile principles but can be quite flexible and pragmatic in the application of Agile " +
                       "methodologies.",
                       "Overall, Mike is hardworking, pays attention to detail, is reliable, friendly, well regarded by his " +
                       "teammates and peers, cares about his teammates and learns and applies new technologies quickly. " +
                       "Mike would make a fantastic addition to any development team.\""]
  		    }),
          new Referral({
	  		    group: 'mgr',
  		  	  author: 'Neil Sambol',
	  		    description: "Mike's Director of Development at Amplify",
	  		    showExcerpts: true,
            collapseClass: "panel-collapse collapse",
		  	    excerpts: ["\"Mike is a kind and generous soul that thoroughly embodies 'Servant Leadership' principles.\"",
                       "\"Mike is not content to manage from the back-row. He has VERY strong Java skills and is in the " +
                       "trenches with his team working on the most difficult problems.\"",
			                 "\"As a Java Developer, a Software Development Manager, or as a Scrum Master Mike is a team player " +
                       "and well liked and respected by his peers, his team and his manager.\""],
  	  		  referral: ["\"Mike is a kind and generous soul that thoroughly embodies 'Servant Leadership' principles. " +
                       "Instead of cracking the whip, he supports, nurtures, and mentors his team. As a ScrumMaster and " +
                       "manager, he removes impediments from his team and lets them run at top speed. The team responds with " +
                       "amazing loyalty and devotion.",
  	  		             "Mike is not content to manage from the back-row. He has VERY strong Java skills and is in the " +
                       "trenches with his team working on the most difficult problems. His team respects and admires him; " +
                       "his product owner adores him.",
  	  		             "As a Java Developer, a Software Development Manager, or as a Scrum Master Mike is a team player " +
                       "and well liked and respected by his peers, his team and his manager. I recommend him wholeheartedly " +
                       "in any and all of those positions or combination thereof.\""]
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
		  	    excerpts: ["\"Mike is one of the best dev managers I've worked with in my entire career.\"",
			                 "\"He sets a great tone, staying levelheaded and lighthearted amongst chaos. He provides excellent insight " +
                       "into technical issues, knows how to work with outside vendors, seamlessly handles cross team communication " +
                       "and coordination.\""],
  	  		  referral: ["\"Mike is one of the best dev managers I've worked with in my entire career. He's honest, " +
                       "straightforward, understanding, diplomatic, technical, and funny. I've immensely enjoyed " +
                       "working with Mike as a member of the digital curriculum team at Amplify. He looks out for " +
                       "his team members and makes sure everyone has what they need. He sets a great tone, staying " +
                       "levelheaded and lighthearted amongst chaos. He provides excellent insight into technical issues, " +
                       "knows how to work with outside vendors, seamlessly handles cross team communication and coordination. " +
                       "Plus, he makes us laugh. I'm grateful every day for the opportunity to work with Mike. It's been a " +
                       "lot of fun. I'd work with him again any time.\""]
  		    }),
          new Referral({
	  		    group: 'emp',
  		  	  author: 'Keith Eisla',
	  		    description: "Web UI Developer on Mike's Team at Amplify",
	  		    showExcerpts: true,
            collapseClass: "panel-collapse collapse",
		  	    excerpts: ["\"Mike has been the best dev manager I have worked for.\"",
			                 "\"He really looks after his team to help them grow and give them opportunities to improve themselves in their " +
                       "career path. On a personal level he is very easy going and fun to talk to.\""],
  	  		  referral: ["\"Mike has been the best dev manager I have worked for. He is always upfront and open about everything " +
                       "going on in the company and the team. He really looks after his team to help them grow and give them " +
                       "opportunities to improve themselves in their career path. On a personal level he is very easy going and " +
                       "fun to talk to. There is never a dull moment when we are in the office together. It is really hard to find " +
                       "a person you can get along with on a personal and business level who is really looking out for your well-being. " +
                       "I am extremely grateful to have had the opportunity to work with Mike and without a doubt I would gladly work " +
                       "with him again and I hope I do.\""]
  		    }),
          new Referral({
	  		    group: 'emp',
  		  	  author: 'Brad Wiederholt',
	  		    description: "Web UI Developer on Mike's Team at Amplify",
	  		    showExcerpts: true,
            collapseClass: "panel-collapse collapse",
		  	    excerpts: ["\"Mike led the team during a high-stress time: product needs were constantly shifting and Mike used his skills as manager " +
                       "and agile process expert to keep the team moving to worthwhile goals. In addition to these skills, Mike was able to contribute " +
                       "to the team as a software developer as well, and was instrumental in shaping the new microservices the team was producing.\""],
  	  		  referral: ["\"During my contract with Amplify, Mike served as team lead and oversaw the development of all software related to " +
                       "in-classroom education and testing. Classwork was a crucial part of the Amplify application, and only seasoned " +
                       "professionals were involved in the management and creation of these pieces. Mike led the team during a high-stress " +
                       "time: product needs were constantly shifting and Mike used his skills as manager and agile process expert to keep " +
                       "the team moving to worthwhile goals. In addition to these skills, Mike was able to contribute to the team as a software " +
                       "developer as well, and was instrumental in shaping the new microservices the team was producing. I welcome the " +
                       "opportunity to work with Mike in future engagements.\""]
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
