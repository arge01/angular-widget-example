import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { WidgetsComponent } from './widgets/widgets.component'
import { WidgetWeatherComponent } from './widgets/widget-weather/widget-weather.component'
import { WidgetBourseComponent } from './widgets/widget-bourse/widget-bourse.component'
import { WidgetNewsComponent } from './widgets/widget-news/widget-news.component'
import { SocialMediaComponent } from './social-media/social-media.component'
import { TwitterWidgetComponent } from './social-media/twitter-widget/twitter-widget.component'
import { FacebookWidgetComponent } from './social-media/facebook-widget/facebook-widget.component'
import { InstagramWidgetComponent } from './social-media/instagram-widget/instagram-widget.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WidgetRequest, TwitterServices, FacebookServices, InstagramServices } from './widgets/widgets-request-model';
import { BourseIcon, BourseModel } from './widgets/widget-bourse/bourse-model';
import { ApiSettings } from './widgets/api-settings';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetWeatherComponent,
    WidgetBourseComponent,
    WidgetNewsComponent,
    SocialMediaComponent,
    TwitterWidgetComponent,
    FacebookWidgetComponent,
    InstagramWidgetComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    WidgetRequest,
    HttpClient,
    BourseIcon,
    ApiSettings,
    TwitterServices,
    FacebookServices,
    InstagramServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
