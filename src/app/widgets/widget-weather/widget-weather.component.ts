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

  public weather_model: WeatherModel;
  /*
  * get texts
  */
  public icon: any;
  public city: string;
  public condition: any;
  public day: any;
  public small_icon: any;
  public temapature: number;
  public chill: number;
  public direction: number;
  public speed: number;
  public forecasts: any;
  public current_observation: any;
  public icontitle: any;

  /*
  * return days
  */
  public DailyWeather: DailyWeather;

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
    @Inject(DomSanitizer) public readonly sanitizer: DomSanitizer,
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
