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

	constructor(private _logger:LogService) {
		this.log = _logger;
		this.log.debug('ArticlesService.constructor()');

		// Populate articles list
		this.items = [
		  new Article({title: 'How to Improve Software Organizations',
		               url: 'https://toughnickel.com/business/Improving-Software-Organizations',
		               host: 'https://toughnickel.com',
		               hostname: 'toughnickel.com',
		               image: 'assets/images/thumbnails/improve-software-orgs.png'}),
		  new Article({title: 'Making Accurate Software Project Estimates',
		               url: 'https://toughnickel.com/business/Estimating-Software-Projects-Effectively',
		               host: 'https://toughnickel.com',
		               hostname: 'toughnickel.com',
		               image: 'assets/images/thumbnails/accurate-estimates.png'}),
		  new Article({title: 'Common Leadership Anti-Patterns',
		               url: 'https://toughnickel.com/business/Common-Leadership-Anti-Patterns',
		               host: 'https://toughnickel.com',
		               hostname: 'toughnickel.com',
		               image: 'assets/images/thumbnails/leadership-antipatterns.png'})
    ];
	}

	// GET /articles
	getAll(): Article[] {
		this.log.debug('ArticlesService.getAll() count=' + this.items.length);
		return this.items;
	}

}
