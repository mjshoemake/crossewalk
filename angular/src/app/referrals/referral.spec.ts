import {Referral} from './referral';

describe('Referral', () => {
	it('should create an instance', () => {
		expect(new Referral()).toBeTruthy();
		console.log('Finished test... Referral t1.');
	});

	it('should accept values in the constructor', () => {
		let ref = new Referral({
			group: 'mgr',
			author: 'Joe Davidson',
			description: "Mike's Development Manager at Amplify",
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
		});
		expect(franchise.group).toEqual('mgr');
		expect(franchise.author).toEqual('Joe Davidson');
		expect(franchise.description).toEqual("Mike's Development Manager at Amplify");
		console.log('Finished test... Franchise t2. DONE.');
	});
});
