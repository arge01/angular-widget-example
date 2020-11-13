import { Component, OnInit } from '@angular/core'
import { NewsModel, Articles, Caps, CapsApi } from 'src/app/widgets/widget-news/news-model'
import { WidgetRequest } from 'src/app/widgets/widgets-request-model'
import { FacebookServices, InstagramServices } from '../../widgets/widgets-request-model';
import { NewsApi } from '../../widgets/widget-news/news-model';

@Component({
  selector: 'app-instagram-widget',
  templateUrl: './instagram-widget.component.html',
  styleUrls: ['./instagram-widget.component.css']
})
export class InstagramWidgetComponent implements OnInit {
  private response: object;
  private data: NewsModel[] = [];
  constructor (private instagram: InstagramServices) {}

  ngOnInit () {
    this.instagram.get().subscribe( (res: any) => {
      res.data.forEach( (element: Articles) => {
        this.data.push(
          new NewsModel(
              { 
                author: element.user.full_name,
                title: element.caption.text,
                description: "",
                url: element.link,
                urlToImage: element.images.standard_resolution.url,
                source: "",
                caps:<Caps> new CapsApi({ likes: element.likes.count, share: element.link, comments: element.comments.count })
              })
        )
      });
    });
  }
}
