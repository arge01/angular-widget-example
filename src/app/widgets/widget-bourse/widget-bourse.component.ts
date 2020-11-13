import { Component, OnInit } from '@angular/core';
import { BourseModel, BourseIcon, BourseApi } from './bourse-model';
import { WidgetRequest } from '../widgets-request-model';

@Component({
  selector: 'app-widget-bourse',
  templateUrl: './widget-bourse.component.html',
  styleUrls: ['./widget-bourse.component.css']
})

export class WidgetBourseComponent implements OnInit {
  private data: BourseModel[] = [];
  
  constructor(
    private widget_request: WidgetRequest,
    private get_icon: BourseIcon
  ){}

  ngOnInit() {
    this.widget_request.bourseWidgets().subscribe( (res: BourseApi) => {
      let i = 0;
      res.forEach( ( el: BourseApi ) => {
        if ( i < 10 ) {
          this.data.push(
            new BourseModel(
              el["0"]["0"],
              this.get_icon.getIcon(i),
              "Döviz",
              el["A"]["0"],
              el["S"]["0"]
            )
          );
        }
        i++;
      });
    });
  }

}
