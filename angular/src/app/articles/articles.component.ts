import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/app/core/logger';
import { LogService } from '../log.service';
import { Article } from './article';
import { ArticlesService } from './articles.service';
import { PageComponent } from '../page.component';
import { CollapsiblePanelComponent } from '../shared/collapsible-panel.component';

@Component({
	selector: 'articles',
	templateUrl: './articles.component.html',
 	styleUrls: []
})

@Injectable()
export class ArticlesComponent  {
	log: LogService;
	articlesService: ArticlesService;
	articles: Article[];

	constructor(private _logger: LogService,
	            private _articlesService: ArticlesService,
	            private _pageComp: PageComponent) {
		this.log = _logger;
		this.log.info('ArticlesService.constructor() BEGIN');
		this.articlesService = _articlesService;

		// Set up page data.
		_pageComp.pageName = 'Articles';
		_pageComp.subTitle = 'Articles written by Mike Shoemake';
		this.articles = this.articlesService.getAll();
		this.log.info('ArticlesComponent.constructor() Article count: ' + this.articles.length);
    for (var item of this.articles) {
      this.log.info('ArticlesComponent.constructor()   - ' + item.title);
    }
	}

}
