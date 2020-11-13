import { Injectable, OnInit } from '@angular/core';
import { AuthorizedRequestService } from './autreq.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsApi } from './widget-news/news-model';
import { BourseApi } from './widget-bourse/bourse-model';
import { ApiSettings } from './api-settings';
import { weatherApi, weatherJson } from './widget-weather/weather-model';
import * as CryptoJS from 'crypto-js';
import * as jQuery from 'jquery';
import { OAuthService, OAuthToken, OAuthKey } from './oauth.service';
import { Sha1Service } from './sha1.service';

export interface ServiceConfig {
    head: any;
    method: any;
    url: string;
    data: any;
    baseUri: string;
}

@Injectable()
export class WidgetRequest {
    private head: any;
    private method: any;
    private url: string;
    private data: any;
    private baseUri: string;

    constructor(
        private http: HttpClient,
        private settings: ApiSettings
    ){}

    widgetWeather()
    {
        const url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
        const method = 'GET';
        const app_id = 'MVva1J5a';
        const consumer_key = 'dj0yJmk9NE5sZXlGOWtMNnFBJmQ9WVdrOVRWWjJZVEZLTldFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTJh';
        const consumer_secret = 'bf9d0d4d98623fc8ef6869b2e526a289f09ba7be';
        const concat = '&';
        const querys = {'lat': '39.9035557', 'lon': '32.7173148', 'u': 'c', 'language': 'tr-TR', 'format': 'json'};
        const oauth = {
            'oauth_consumer_key': consumer_key,
            'oauth_nonce': Math.random().toString(36).substring(2),
            'oauth_signature_method': 'HMAC-SHA1',
            'oauth_timestamp': parseInt( String(new Date().getTime() / 1000) ).toString(),
            'oauth_version': '1.0'
        };
        const merged = {};
        jQuery.extend(merged, querys, oauth);

        const merged_arr = Object.keys(merged).sort().map(function (k) {
            return [k + '=' + encodeURIComponent(merged[k])];
        });
        const signature_base_str = method
            + concat + encodeURIComponent(url)
            + concat + encodeURIComponent(merged_arr.join(concat));

        const composite_key = encodeURIComponent(consumer_secret) + concat;
        const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
        const signature = hash.toString(CryptoJS.enc.Base64);

        oauth['oauth_signature'] = signature;
        const auth_header = 'OAuth ' + Object.keys(oauth).map(function (k) {
            return [k + '="' + oauth[k] + '"'];
        }).join(',');

        this.url = url + '?' + jQuery.param(querys);
        this.head = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': auth_header,
                'X-Yahoo-App-Id': app_id
            })
        };
        return this.http.get<weatherJson>(this.url, this.head);
    }

    widgetArticles()
    {
        return this.http.get<NewsApi>(`https://newsapi.org/v2/everything?domains=${this.settings.domains()}&apiKey=bc254e4729544151b9310d64cb7056eb`);
    }

    bourseWidgets()
    {
        return this.http.get<BourseApi>("http://arifgevenci.com/api/doviz/");
    }
    
}

@Injectable()
export class TwitterServices {
    private authRequest: AuthorizedRequestService;

    constructor(private http: HttpClient)
    {
        this.authRequest = new AuthorizedRequestService(
            new OAuthService(new Sha1Service()),
            this.http
        );
    }

    get(url: string, query: any, oauthKey: OAuthKey, oauthToken: OAuthToken) 
    {
        return this.authRequest.get(url, query, oauthKey, oauthToken);
    }

    post(url: string, params: any, oauthKey: OAuthKey, oauthToken: OAuthToken) 
    {
        return this.authRequest.post(url, params, oauthKey, oauthToken);
    }
}

@Injectable()
export class FacebookServices {
    
}

@Injectable()
export class InstagramServices {
    private token: any;
    private count: any;
    private head: any;

    constructor(private http: HttpClient, private api_settings: ApiSettings) 
    {
        this.token = this.api_settings.instagramSeettings()['token'];
        this.count = this.api_settings.instagramSeettings()['count'];
    }

    get() 
    {
        this.head = new HttpHeaders().set('dataType', 'jsonp');
        return this.http.get<NewsApi>(`https://api.instagram.com/v1/users/self/media/recent?access_token=${this.token}&count=${this.count}&callback=JSON_CALLBACK`, this.head);
    }
}