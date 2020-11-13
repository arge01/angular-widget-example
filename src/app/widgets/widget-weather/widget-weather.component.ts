import { Component, OnInit, Inject } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherModel, WeekDays, DailyWeather, WeatherData, weatherApi, weatherJson } from './weather-model';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';
import { WidgetRequest } from '../widgets-request-model';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.css', './widget-weather.weather.color.css']
})
export class WidgetWeatherComponent implements OnInit {

  private weather_model: WeatherModel;
  /*
  * get texts
  */
  private icon: any;
  private city: string;
  private condition: any;
  private day: any;
  private small_icon: any;
  private temapature: number;
  private chill: number;
  private direction: number;
  private speed: number;
  private forecasts: any;
  private current_observation: any;
  private icontitle: any;

  /*
  * return days
  */
  private DailyWeather: DailyWeather;

  /*
  * weekdays
  */
  private _weekday() {
    return new WeekDays();
  }

  /*
  * dailywether return foreach
  */
  private _DailyWeather(): DailyWeather {
    return new DailyWeather;
  }

  private data: weatherJson;

  constructor(
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    private widget_request: WidgetRequest
  ) 
  {
    this.DailyWeather = this._DailyWeather();
    this.day = this._weekday().getDay(new Date().getDay());
  }

  ngOnInit() 
  {
    this.widget_request.widgetWeather().subscribe( (res: any) => {
      /*
      * new data
      */
      this.data = new WeatherData(res);
      /*
      * new property
      */
      this.icontitle = this.data.current_observation()['condition']['text'];
      this.forecasts = this.data.forecasts();
      this.weather_model = new WeatherModel(this.data.current_observation()['condition']['code']);
      this.icon = this.weather_model['icon'];
      this.condition = this.weather_model['description'];
      this.city = this.data.location()['city'];
      this.temapature = this.data.current_observation()['condition']['temperature'];
      this.chill = this.data.current_observation()['wind']['chill'];
      this.direction = this.data.current_observation()['wind']['direction'];
      this.speed = this.data.current_observation()['wind']['speed'];
    });
  }
}
