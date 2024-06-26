import { Component, OnInit } from '@angular/core'
import { NewsModel, NewsApi, Articles } from 'src/app/widgets/widget-news/news-model'
import { TwitterServices } from 'src/app/widgets/widgets-request-model'
import { Caps, CapsApi } from '../../widgets/widget-news/news-model';

@Component({
  selector: 'app-twitter-widget',
  templateUrl: './twitter-widget.component.html',
  styleUrls: ['./twitter-widget.component.css']
})
export class TwitterWidgetComponent implements OnInit {
  private response: object = {
    statuses: [
      {
        created_at: 'Wed Apr 12 04:53:25 +0000 2017',
        id: 852021818290352129,
        id_str: '852021818290352129',
        text:
          "Watch NASA's first 4K broadcast from space on April 26th - Engadget https://t.co/EfwAYeJpjF",
        truncated: false,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [
            {
              url: 'https://t.co/EfwAYeJpjF',
              expanded_url: 'http://ift.tt/2orifBN',
              display_url: 'ift.tt/2orifBN',
              indices: [68, 91]
            }
          ]
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 622857704,
          id_str: '622857704',
          name: 'Crucial-Tech',
          screen_name: 'crucial_tech',
          location: 'Worldwide',
          description:
            'Technology News | Stories | Solutions | Workarounds | Gadgets',
          url: null,
          entities: {
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 1917,
          friends_count: 841,
          listed_count: 513,
          created_at: 'Sat Jun 30 14:28:07 +0000 2012',
          favourites_count: 33,
          utc_offset: -14400,
          time_zone: 'Eastern Time (US & Canada)',
          geo_enabled: true,
          verified: false,
          statuses_count: 559097,
          lang: 'en',
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: '131516',
          profile_background_image_url:
            'http://pbs.twimg.com/profile_background_images/530442443057942528/jgQgrriz.jpeg',
          profile_background_image_url_https:
            'https://pbs.twimg.com/profile_background_images/530442443057942528/jgQgrriz.jpeg',
          profile_background_tile: true,
          profile_image_url:
            'http://pbs.twimg.com/profile_images/810537113288482816/AL7srBp3_normal.jpg',
          profile_image_url_https:
            'https://pbs.twimg.com/profile_images/810537113288482816/AL7srBp3_normal.jpg',
          profile_banner_url:
            'https://pbs.twimg.com/profile_banners/622857704/1415224702',
          profile_link_color: '3B94D9',
          profile_sidebar_border_color: '000000',
          profile_sidebar_fill_color: '000000',
          profile_text_color: '000000',
          profile_use_background_image: true,
          has_extended_profile: false,
          default_profile: false,
          default_profile_image: false,
          following: false,
          follow_request_sent: false,
          notifications: false,
          translator_type: 'none'
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 0,
        favorite_count: 0,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'en'
      },
      {
        created_at: 'Wed Apr 12 04:53:08 +0000 2017',
        id: 8.5202174412671e17,
        id_str: '852021744126705664',
        text:
          'RT @TechCrunch: NASA and Amazon will stream from space in 4K for the first time on April 26 https://t.co/KWMfvRg1Hs',
        truncated: false,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [
            {
              screen_name: 'TechCrunch',
              name: 'TechCrunch',
              id: 816653,
              id_str: '816653',
              indices: [3, 14]
            }
          ],
          urls: [
            {
              url: 'https://t.co/KWMfvRg1Hs',
              expanded_url: 'http://tcrn.ch/2nB1aGU',
              display_url: 'tcrn.ch/2nB1aGU',
              indices: [92, 115]
            }
          ]
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source:
          '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 18961853,
          id_str: '18961853',
          name: 'Hongik Kim',
          screen_name: 'nottora2',
          location: 'Seoul, Korea',
          description: '',
          url: 'http://t.co/WpOh7jvYit',
          entities: {
            url: {
              urls: [
                {
                  url: 'http://t.co/WpOh7jvYit',
                  expanded_url: 'http://sttora2.net',
                  display_url: 'sttora2.net',
                  indices: [0, 22]
                }
              ]
            },
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 713,
          friends_count: 232,
          listed_count: 255,
          created_at: 'Wed Jan 14 01:17:32 +0000 2009',
          favourites_count: 14,
          utc_offset: -36000,
          time_zone: 'Hawaii',
          geo_enabled: true,
          verified: false,
          statuses_count: 45276,
          lang: 'en',
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: '1A1B1F',
          profile_background_image_url:
            'http://abs.twimg.com/images/themes/theme9/bg.gif',
          profile_background_image_url_https:
            'https://abs.twimg.com/images/themes/theme9/bg.gif',
          profile_background_tile: false,
          profile_image_url:
            'http://pbs.twimg.com/profile_images/420186574/0001_normal.jpg',
          profile_image_url_https:
            'https://pbs.twimg.com/profile_images/420186574/0001_normal.jpg',
          profile_link_color: '2FC2EF',
          profile_sidebar_border_color: '181A1E',
          profile_sidebar_fill_color: '252429',
          profile_text_color: '666666',
          profile_use_background_image: true,
          has_extended_profile: false,
          default_profile: false,
          default_profile_image: false,
          following: false,
          follow_request_sent: false,
          notifications: false,
          translator_type: 'none'
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        retweeted_status: {
          created_at: 'Wed Apr 12 01:48:02 +0000 2017',
          id: 8.5197516353722e17,
          id_str: '851975163537219585',
          text:
            'NASA and Amazon will stream from space in 4K for the first time on April 26 https://t.co/KWMfvRg1Hs',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: 'https://t.co/KWMfvRg1Hs',
                expanded_url: 'http://tcrn.ch/2nB1aGU',
                display_url: 'tcrn.ch/2nB1aGU',
                indices: [76, 99]
              }
            ]
          },
          metadata: {
            iso_language_code: 'en',
            result_type: 'recent'
          },
          source:
            '<a href="http://www.socialflow.com" rel="nofollow">SocialFlow</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 816653,
            id_str: '816653',
            name: 'TechCrunch',
            screen_name: 'TechCrunch',
            location: 'San Francisco, CA',
            description:
              'Breaking technology news, analysis, and opinions from TechCrunch. The number one guide for all things tech. Got a tip? Let us know tips@techcrunch.com',
            url: 'https://t.co/b5Oyx12qGG',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/b5Oyx12qGG',
                    expanded_url: null,
                    indices: [0, 23]
                  }
                ]
              },
              description: {
                urls: []
              }
            },
            protected: false,
            followers_count: 8841742,
            friends_count: 900,
            listed_count: 108869,
            created_at: 'Wed Mar 07 01:27:09 +0000 2007',
            favourites_count: 1911,
            utc_offset: -25200,
            time_zone: 'Pacific Time (US & Canada)',
            geo_enabled: true,
            verified: true,
            statuses_count: 153722,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: true,
            profile_background_color: '149500',
            profile_background_image_url:
              'http://pbs.twimg.com/profile_background_images/621096023751004161/BAKy7hCT.png',
            profile_background_image_url_https:
              'https://pbs.twimg.com/profile_background_images/621096023751004161/BAKy7hCT.png',
            profile_background_tile: false,
            profile_image_url:
              'http://pbs.twimg.com/profile_images/615392662233808896/EtxjSSKk_normal.jpg',
            profile_image_url_https:
              'https://pbs.twimg.com/profile_images/615392662233808896/EtxjSSKk_normal.jpg',
            profile_banner_url:
              'https://pbs.twimg.com/profile_banners/816653/1490894597',
            profile_link_color: '097000',
            profile_sidebar_border_color: 'FFFFFF',
            profile_sidebar_fill_color: 'DDFFCC',
            profile_text_color: '222222',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 132,
          favorite_count: 156,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        is_quote_status: false,
        retweet_count: 132,
        favorite_count: 0,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'en'
      },
      {
        created_at: 'Wed Apr 12 04:52:50 +0000 2017',
        id: 8.5202166885153e17,
        id_str: '852021668851531776',
        text:
          "RT @snowdenka: cool down\nturnin' up\nforever\nreal\nthe life\ni love to love you\nuntitled (based from bret's story)\n\neto yung alam natin na nas\u2026",
        truncated: false,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [
            {
              screen_name: 'snowdenka',
              name: '\u2744 Macy \u270b\ud83d\udca4\u2728',
              id: 2330241865,
              id_str: '2330241865',
              indices: [3, 13]
            }
          ],
          urls: []
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source:
          '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 2433542798,
          id_str: '2433542798',
          name: '\u256e(\u2500\u25bd\u2500)\u256d',
          screen_name: 'hallowjayn',
          location: 'shyschai',
          description: "I can tweet whatever I want. It's my twitter.",
          url: null,
          entities: {
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 697,
          friends_count: 217,
          listed_count: 7,
          created_at: 'Tue Apr 08 12:29:46 +0000 2014',
          favourites_count: 6775,
          utc_offset: -25200,
          time_zone: 'Pacific Time (US & Canada)',
          geo_enabled: true,
          verified: false,
          statuses_count: 37632,
          lang: 'en',
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: '89C9FA',
          profile_background_image_url:
            'http://pbs.twimg.com/profile_background_images/618681903441252352/rjLy48Ga.jpg',
          profile_background_image_url_https:
            'https://pbs.twimg.com/profile_background_images/618681903441252352/rjLy48Ga.jpg',
          profile_background_tile: true,
          profile_image_url:
            'http://pbs.twimg.com/profile_images/851045496906854400/z1iIPlRm_normal.jpg',
          profile_image_url_https:
            'https://pbs.twimg.com/profile_images/851045496906854400/z1iIPlRm_normal.jpg',
          profile_banner_url:
            'https://pbs.twimg.com/profile_banners/2433542798/1491546365',
          profile_link_color: '9266CC',
          profile_sidebar_border_color: '5ED4DC',
          profile_sidebar_fill_color: '95E8EC',
          profile_text_color: '3C3940',
          profile_use_background_image: true,
          has_extended_profile: true,
          default_profile: false,
          default_profile_image: false,
          following: false,
          follow_request_sent: false,
          notifications: false,
          translator_type: 'none'
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        retweeted_status: {
          created_at: 'Tue Apr 11 15:16:25 +0000 2017',
          id: 8.5181621006066e17,
          id_str: '851816210060660737',
          text:
            "cool down\nturnin' up\nforever\nreal\nthe life\ni love to love you\nuntitled (based from bret's story)\n\neto yung alam natin na nasa palm dreams.",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: []
          },
          metadata: {
            iso_language_code: 'en',
            result_type: 'recent'
          },
          source:
            '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 2330241865,
            id_str: '2330241865',
            name: '\u2744 Macy \u270b\ud83d\udca4\u2728',
            screen_name: 'snowdenka',
            location: '',
            description:
              'JaDine, Harry Potter, JPop, Anime | fangirling. fanworks. random thoughts. kalokohan. whinings about life | IG: jadinex \u2022 YT: JaDinex \u2022 WP: kooridenka',
            url: 'https://t.co/UqnYe2vdrc',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/UqnYe2vdrc',
                    expanded_url: 'http://jadinex.livejournal.com',
                    display_url: 'jadinex.livejournal.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: {
                urls: []
              }
            },
            protected: false,
            followers_count: 2962,
            friends_count: 244,
            listed_count: 34,
            created_at: 'Thu Feb 06 12:41:08 +0000 2014',
            favourites_count: 39812,
            utc_offset: -25200,
            time_zone: 'Pacific Time (US & Canada)',
            geo_enabled: false,
            verified: false,
            statuses_count: 102431,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url:
              'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https:
              'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url:
              'http://pbs.twimg.com/profile_images/845930850210361344/fgHcvMFy_normal.jpg',
            profile_image_url_https:
              'https://pbs.twimg.com/profile_images/845930850210361344/fgHcvMFy_normal.jpg',
            profile_banner_url:
              'https://pbs.twimg.com/profile_banners/2330241865/1491408790',
            profile_link_color: 'DD2E44',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 61,
          favorite_count: 70,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        is_quote_status: false,
        retweet_count: 61,
        favorite_count: 0,
        favorited: false,
        retweeted: false,
        lang: 'en'
      }
    ],
    search_metadata: {
      completed_in: 0.034,
      max_id: 8.5202181829035e17,
      max_id_str: '852021818290352129',
      query: 'from%253ANasa%2520OR%2520%2523nasa',
      refresh_url:
        '?since_id=852021818290352129&q=from%253ANasa%2520OR%2520%2523nasa&include_entities=1',
      count: 15,
      since_id: 0,
      since_id_str: '0'
    }
  }
  public data: NewsModel[] = [];
  constructor (private twitter: TwitterServices) {}

  ngOnInit () 
  {
    this.response['statuses'].forEach( (el: Articles) => {
      this.data.push(
        new NewsModel({
          author: "", title: el.text, description: "", url: "", urlToImage: "", source: "", caps:<Caps> new CapsApi({ likes: 0, share: "", comments: 0 })
        })
      )
    });
  }

  getHomeTimeline ()
  {
    this.twitter
      .get(
        'https://api.twitter.com/1.1/statuses//user_timeline.json',
        {
          count: 5
        },
        {
          consumerKey: 'sqrzNfTYAhdKKFe8i0jkbmfJc',
          consumerSecret: 'UY4UiIjYTuB4Z09Kh5ZeC8nA1M9rPT9VNNutZa8wPivVCj6SoV'
        },
        {
          token: '217674868-6jGUXSmNd1ldEgPm19Ms0sOVd1NWHlqOPOvDjD1Z',
          tokenSecret: 'KehU1HYSmeo5JrNhlWbPrqXPaVWJMr2gi72UINuaDAufQ'
        }
      )
      .subscribe((res: NewsApi) => {
        console.log(res)
      })
  }
}
