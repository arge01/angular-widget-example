import { Component, OnInit } from '@angular/core';
import { NewsModel, NewsApi, Articles } from './news-model';
import { WidgetRequest } from '../widgets-request-model';
import { element } from 'protractor';

@Component({
  selector: 'app-widget-news',
  templateUrl: './widget-news.component.html',
  styleUrls: ['./widget-news.component.css']
})
export class WidgetNewsComponent implements OnInit {
  
  private data: NewsModel[] = [];
  constructor(
    private widget_request: WidgetRequest
  ) { }

  ngOnInit() 
  {
    this.widget_request.widgetArticles().subscribe( (res: NewsApi) => {
      res.articles.forEach( (element: Articles) => {
        this.data.push(
          new NewsModel(
              { author: element.author, title: element.title, description: element.description, url: element.url, urlToImage: element.urlToImage, source: element.source })
        )
      });
    });
  }

}
