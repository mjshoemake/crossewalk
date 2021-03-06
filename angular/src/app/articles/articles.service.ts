import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Article } from './article';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';

@Injectable()
// NOTE: For now, there is no DB so data is stored in memory only.
export class ArticlesService {

	log: LogService;

	// Placeholder for items.
	items: Article[] = [];
	suffix: string = '';

	constructor(private _logger:LogService) {
		this.log = _logger;
		this.log.debug('ArticlesService.constructor()');



		// Populate articles list
		this.items = [
      new Article({title: 'The Magic of Agile Swarming',
                   url: 'https://toughnickel.com/business/The-Magic-of-Agile-Swarming',
                   host: 'https://toughnickel.com',
                   hostname: 'toughnickel.com',
                   image: 'assets/images/thumbnails/swarming.jpg',
                   content: "<p>Being an agile software development team certainly means different things to different people. There are degrees of adoption across a very wide spectrum, with apparently very few organizations that think they do it well. According to VersionOne’s State of Agile Survey (released April of 2017), 80% of their respondents say they are \“at or below a still maturing level.\” Unfortunately, development teams often don’t put a lot of effort into the \“learn\” part of the iteration. We want to hurry up and get the Scrum ceremonies over with so we can get back to writing code. After all, there’s so much work to do! But is insufficient coding time really the problem?</p><p>For many of us, fire fighting might as well be specifically listed in our job description. We go to work every day knowing that we need to be ready to slide down the pole at a moment’s notice, grab our hats, and jump on the truck. We accept it as just the way things are, and we assume there’s nothing we can do about it. But, what if the root cause of our struggles is a severe lack of efficiency? Everyone knows how important it is to do it better than that other company over there. We just can’t seem to get there--we don’t seem to have the bandwidth. Managers add more people and balloon up the size of their organizations and still have the same struggles. You can’t seem to get over the hump because your teams aren’t developing software efficiently (and you’re not alone).</p>"}),
		  new Article({title: 'How to Improve Software Organizations',
		               url: 'https://toughnickel.com/business/Improving-Software-Organizations',
		               host: 'https://toughnickel.com',
		               hostname: 'toughnickel.com',
		               image: 'assets/images/thumbnails/improve-software-orgs.png',
		               collapseClass: 'panel-collapse in',
		               content: "<p>Is your software development organization performing as it should?  Wherever you are on the continuum, it's important to identify where you need to go and how to get there, because organizations need a clear vision to help everyone drive in the same direction. We should evaluate our processes, technology, product line, documentation, culture, and our people themselves. But, what do we evaluate them against? How do we measure our progress? I believe there are three key measuring sticks for evaluating a team or organization, and if we keep these things in focus productivity will skyrocket.</p><div><ul><li>Quality</li><li>Efficiency</li><li>Balance</li></ul>Let's look closely at each one.</div>"}),
		  new Article({title: 'Making Accurate Software Project Estimates',
		               url: 'https://toughnickel.com/business/Estimating-Software-Projects-Effectively',
		               host: 'https://toughnickel.com',
		               hostname: 'toughnickel.com',
		               image: 'assets/images/thumbnails/accurate-estimates.png',
		               collapseClass: 'panel-collapse in',
		               content: "<p>Estimation is just hard. Unfortunately, it's also very necessary. Companies use estimates to project out release schedules, make commitments to their customers, decide whether a proposed feature is worth implementing, track teams' velocity, and prioritize the work effectively. Executives often want to know when a feature or deliverable will be ready for production. After all, software development is not a trivial investment. Without estimates, how would the project manager make an assessment? If humans could predict the future accurately, people wouldn't only win at horse races 2% of the time. Estimation is the great conundrum. It's essential and necessary for companies to ask their people to do the impossible: predict the future.</p><p>First, let's review some popular estimation methods (in case you missed some of the excitement). Then we can look at what this means to us and our projects.</p>"}),
		  new Article({title: 'Common Leadership Anti-Patterns',
		               url: 'https://toughnickel.com/business/Common-Leadership-Anti-Patterns',
		               host: 'https://toughnickel.com',
		               hostname: 'toughnickel.com',
		               image: 'assets/images/thumbnails/leadership-antipatterns.png',
		               collapseClass: 'panel-collapse in',
		               content: "<p>If you're a leader in the software industry, perhaps you pause every now and then to ask yourself if you're a good one. If not, I would encourage you to start. You may have been tagged as a natural leader when you were young. Some people think they can spot \"natural leaders\" in much the same way you might spot a natural runner or a natural swimmer. Unfortunately, being a good leader is much more complicated than that&mdash;it requires effort and intentionality. In particular, good leaders evaluate their mistakes so they can learn from them.</p><p>We all make mistakes. From my perspective, failure is less about the mistakes we make and more about our inability to learn from them. But, wouldn't it be even better if we could learn from the mistakes of those around us? To that end, let's take a look at some common leadership anti-patterns, or examples of what not to do. I hope you find a useful nugget or two as we walk along the path.</p>"})
    ];
	}

	// GET /articles
	getAll(): Article[] {
		this.log.debug('ArticlesService.getAll() count=' + this.items.length);
		return this.items;
	}

}
