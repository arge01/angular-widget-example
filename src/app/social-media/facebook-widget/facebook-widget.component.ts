import { Component, OnInit } from '@angular/core'
import { NewsModel } from 'src/app/widgets/widget-news/news-model'

@Component({
  selector: 'app-facebook-widget',
  templateUrl: './facebook-widget.component.html',
  styleUrls: ['./facebook-widget.component.css']
})
export class FacebookWidgetComponent implements OnInit {
  private response: object = {
    status: 'ok',
    totalResults: 73,
    articles: [
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          'Economyyy shakes free of recession fears in striking turnaround...',
        description:
          'Economy shakes free of recession fears in striking turnaround... (First column, 2nd story, link ) Related stories: STOCKS SMASH NEW RECORDS! Homebuilder confidence best in 20 years... Drudge Report Feed needs your support! Become a Patron',
        url:
          'https://www.msn.com/en-us/news/us/u-s-economy-shakes-free-of-recession-fears-in-striking-turnaround-since-august/ar-AAK9ByW',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAK9xMw.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=1388&y=555',
        publishedAt: '2019-12-16T17:07:37Z',
        content:
          'The U.S. economy is heading into 2020 at a pace of steady, sustained growth after a series of interest rate cuts and the apparent resolution of two trade-related threats mostly eliminated the risk of a recession. \r\nThis marks a dramatic turnaround in momentum… [+8178 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          'Qantas aircraft evacuated in Sydney after smoke fills cabin - msnNOW',
        description:
          "Qantas aircraft evacuated in Sydney after smoke fills cabin msnNOW Qantas passengers use emergency slides to evacuate plane at Sydney Airport | ABC News ABC News (Australia) Qantas' passengers forced to use chutes to evacuate aircraft Airline Ratings Passenge…",
        url:
          'https://www.msn.com/en-us/news/world/qantas-aircraft-evacuated-in-sydney-after-smoke-fills-cabin/ar-AAK8YHB',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAK8n5n.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg',
        publishedAt: '2019-12-15T11:53:00Z',
        content:
          '© Provided by Associated Press\r\n FILE - In this Feb. 26, 2015, file photo, a Qantas plane maneuvers behind another parked at a gate at Sydney Airport in Sydney. Passengers on a Qantas flight from Sydney to Perth on Sunday, Dec. 15, 2019, used slides to evacua… [+1634 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          'Qantas aircraft evacuated in Sydney after smoke fills cabin - msnNOW',
        description:
          "Qantas aircraft evacuated in Sydney after smoke fills cabin msnNOW Qantas passengers use emergency slides to evacuate plane at Sydney Airport | ABC News ABC News (Australia) Qantas' passengers forced to use chutes to evacuate aircraft Airline Ratings Passenge…",
        url:
          'https://www.msn.com/en-us/news/world/qantas-aircraft-evacuated-in-sydney-after-smoke-fills-cabin/ar-AAK8YHB?li=BBnbfcL',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAK8n5n.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg',
        publishedAt: '2019-12-15T11:53:00Z',
        content:
          'SYDNEY (AP) Passengers on a Qantas flight from Sydney to Perth on Sunday used slides to evacuate the Airbus A330 after it was forced to return as the cabin filled with smoke.\r\n© Provided by Associated Press\r\n FILE - In this Feb. 26, 2015, file photo, a Qantas… [+1622 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          'Name-calling, insults and scandals dominate all-day impeachment hearing...',
        description:
          'Name-calling, insults and scandals dominate all-day impeachment hearing... (Second column, 2nd story, link ) Related stories: MCCONNELL PLAN TO ACQUIT AT TRIAL... DEM DEFECTIONS? Inside jockeying to prosecute... PAPER: THIS IS THE WHISTLEBLOWER... President s…',
        url:
          'https://www.msn.com/en-us/news/politics/name-calling-insults-and-scandals-dominate-all-day-impeachment-hearing/ar-AAK4AZS',
        urlToImage: null,
        publishedAt: '2019-12-13T01:19:37Z',
        content:
          'Hunter Bidens drug problem. Allegations about President Trumps sex life. A congressmans past DUI arrest. \r\nNo controversy even marginally related to the House impeachment proceeding was overlooked Thursday as Republican and Democratic lawmakers waged one last… [+5580 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title: 'Bipartisan $1.3 trillion deal...',
        description:
          "Bipartisan $1.3 trillion deal... (First column, 2nd story, link ) Related stories: Feds Collect Record Taxes; Historic Spending... Credit Card Debt 10-Year High... PAPER: Powell propping up economy! USA, China reach partial trade deal... 'Wimpy' agreement eno…",
        url:
          'https://www.msn.com/en-us/news/politics/congressional-negotiators-reach-tentative-dollar13-trillion-federal-spending-deal/ar-AAK4lDm',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAHxUTM.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=2010&y=1238',
        publishedAt: '2019-12-12T23:01:37Z',
        content:
          'Top congressional negotiators said Thursday they had reached a deal in principle to approve $1.3 trillion in federal spending for 2020, likely averting a government shutdown next week. \r\nThe announcement, from House Appropriations Committee Chairman Nita M. L… [+4546 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title: 'DEM DEFECTIONS?',
        description:
          'DEM DEFECTIONS? (Main headline, 2nd story, link ) Related stories: MCCONNELL PLAN TO ACQUIT TRUMP AT TRIAL Drudge Report Feed needs your support! Become a Patron',
        url:
          'https://www.msn.com/en-us/news/politics/house-democrats-brace-for-some-defections-among-moderates-on-impeachment-of-trump/ar-AAK2oCK',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAK49eE.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=1984&y=743',
        publishedAt: '2019-12-12T18:07:37Z',
        content:
          'House Democratic leaders are bracing for some defections among a group of moderate Democrats in swing districts who are concerned a vote to impeach President Trump could cost them their seats in November.\r\nLoad Error\r\nLawmakers and senior aides are privately … [+21366 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          'Planned Parenthood to open health centers at 50 LA high schools...',
        description:
          'The program is believed to be among the largest effort in the county to bring health care services to where at-risk youth can access them most easily: their schools.',
        url:
          'https://www.msn.com/en-us/news/us/planned-parenthood-to-open-reproductive-health-centers-at-50-los-angeles-high-schools/ar-AAK1S08',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAK1W2H.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg',
        publishedAt: '2019-12-11T21:34:40Z',
        content:
          'Planned Parenthood is pioneering a new model of reproductive health services for Los Angeles County teens by opening 50 clinics at area high schools. The program announced Wednesday and launched in partnership with the school district and county health depart… [+5025 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          "She found 'nice' roommate on CRAIGSLIST. Week later, he almost killed her...",
        description:
          "She found 'nice' roommate on CRAIGSLIST. Week later, he almost killed her... (Third column, 22nd story, link ) Drudge Report Feed needs your support! Become a Patron",
        url:
          'https://www.msn.com/en-us/news/crime/she-found-a-nice-roommate-on-craigslist-a-week-later-he-almost-killed-her/ar-AAK0LNE',
        urlToImage: null,
        publishedAt: '2019-12-11T19:19:41Z',
        content:
          '© Provided by The Washington PostWhen her roommate suddenly moved out in early 2016, Danielle Cabo Jones needed to find someone to help pay rent fast in her downtown Miami apartment. She posted an ad on Craigslist and soon, Jones was interviewing Byron Mitche… [+5029 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          'Built to Fail: How USA wasted billions trying to rebuild Afghanistan...',
        description:
          'Built to Fail: How USA wasted billions trying to rebuild Afghanistan... (Second column, 13th story, link ) Drudge Report Feed needs your support! Become a Patron',
        url:
          'https://www.msn.com/en-us/news/world/wasteful-spending-and-half-baked-ideas-us-officials-reveal-how-massive-rebuilding-projects-in-afghanistan-backfired/ar-BBXYeRI',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBXY68Q.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=1700&y=1033',
        publishedAt: '2019-12-11T18:22:38Z',
        content:
          'George W. Bush, Barack Obama and Donald Trump all promised the same thing: The United States would not get stuck with the burden of "nation-building" in Afghanistan. \r\n© David Guttenfelder/AP\r\n An Afghan girl plays with a clothesline in 2005 near a destroyed … [+31645 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: 'ladylove',
        title:
          '‘Our friends didn’t have to die’: Afghanistan Papers surface pain and familiar frustrations',
        description:
          'Lawmakers, veterans and experts have expressed shock and resignation after a Washington Post report Monday unveiled 18 years of distortion by U.S. officials over the prosecution of the war in Afghanistan. The documents involved — more than 2,000 pages of conf…',
        url:
          'https://www.msn.com/en-us/news/world/our-friends-didnt-have-to-die-afghanistan-papers-surface-pain-and-familiar-frustrations/ar-BBY0Cdg',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBXY69i.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=575&y=638',
        publishedAt: '2019-12-11T11:41:03Z',
        content:
          'Lawmakers, veterans and experts have expressed shock and resignation after a Washington Post report Monday unveiled 18 years of distortion by U.S. officials over the prosecution of the war in Afghanistan. \r\nThe documents involved more than 2,000 pages of conf… [+9136 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          "Trump's Dec. 15 China tariffs threaten a long list of Christmas favorites - msnNOW",
        description:
          "Trump's Dec. 15 China tariffs threaten a long list of Christmas favorites msnNOW U.S. and Chinese Trade Negotiators Planning for Delay of December Tariffs The Wall Street Journal 'Eleventh hour' US-China trade deal could happen before tariffs kick in Sunday, …",
        url:
          'https://www.msn.com/en-us/money/markets/trumps-dec-15-china-tariffs-threaten-a-long-list-of-christmas-favorites/ar-BBY2zJk',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBcfKQr.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=1103&y=965',
        publishedAt: '2019-12-10T20:30:00Z',
        content:
          "President Donald Trump has days to decide whether to impose tariffs on nearly $160 billion in Chinese consumer goods just weeks before Christmas, a move that could be unwelcome in both the United States and China.\r\nLoad Error\r\nThe White House's top economic a… [+3330 chars]"
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: 'Hello',
        title:
          "I'm a Celebrity winner Jacqueline Jossa breaks silence after turning down interviews",
        description:
          "I'm a Celebrity winner Jacqueline Jossa has broken her silence after turning down interviews on TV shows including Lorraine and Good Morning Britain",
        url:
          'https://www.msn.com/en-gb/entertainment/celebrity/i-m-a-celebrity-winner-jacqueline-jossa-breaks-silence-after-turning-down-interviews/ar-BBY0gdN',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBY0gdJ.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=534&y=362',
        publishedAt: '2019-12-10T04:58:30Z',
        content:
          "© @Copyright HELLO!\r\n Hello! Magazine\r\nI'm a Celebrity winner Jacqueline Jossa turned down interview opportunities on morning television on Monday, less than a day after she was crowned Queen of the Jungle. But the former EastEnders actress has reassured her … [+2863 chars]"
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title: 'Dems expected to draft two articles against Trump...',
        description:
          "Dems expected to draft two articles against Trump... (Top headline, 1st story, link ) Related stories: Abuse of power, obstruction of Congress... STARR: MY IMPEACHMENT WAS BETTER THAN YOURS... DOJ Watchdog Forces Barr To Scramble... 'Crossfire Hurricane' Turn…",
        url:
          'https://www.msn.com/en-us/news/politics/democrats-expected-to-draft-two-articles-of-impeachment-against-trump-one-on-abuse-of-power-the-other-on-obstruction-of-congress/ar-BBY0DbE',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBY0Adh.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=2056&y=884',
        publishedAt: '2019-12-10T02:19:36Z',
        content:
          'Democrats are expected to unveil two articles of impeachment against President Trump on Tuesday that will focus on abuse of power and obstructing Congress and would be voted on by the full House next week, according to three officials familiar with the matter… [+11577 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title: 'COMEY: Truth is finally out...',
        description:
          "COMEY: Truth is finally out... (Second column, 10th story, link ) Related stories: WATCHDOG: FBI's Russia probe justified, no bias found... MANY MISTAKES... Scathing critique of FBI wiretap application... Agents Trashed Clinton as 'Criminal', Celebrated Trump…",
        url:
          'https://www.msn.com/en-us/news/opinion/opinions-james-comey-the-truth-is-finally-out-the-fbi-fulfilled-its-mission/ar-BBY08vk',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFc83j.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=1691&y=996',
        publishedAt: '2019-12-09T23:34:38Z',
        content:
          'Editors note: The opinions in this article are the authors, as published by our content partner, and do not necessarily represent the views of MSN or Microsoft.\r\n© Matt McClain/The Washington Post\r\n Former FBI Director, James B. Comey appears before the Senat… [+5877 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          'Officials misled public about Afghan war, confidential docs reveal...',
        description:
          'For nearly two decades, U.S. leaders have sounded a constant refrain: We are making progress. They were not, and they knew it.',
        url:
          'https://www.msn.com/en-us/news/world/confidential-documents-reveal-us-officials-failed-to-tell-the-truth-about-the-war-in-afghanistan/ar-BBXY8l1',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBXY3OE.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg',
        publishedAt: '2019-12-09T13:52:36Z',
        content:
          '© Moises Saman/Magnum Photos\r\n Afghan soldiers carry a wounded comrade to a U.S. helicopter in Konar province in 2010.\r\n[This story has been optimized for offline reading on our apps. For a richer experience, you can find the full version of this story here. … [+36557 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title:
          'She was pregnant and terribly itchy. Something was going very wrong. The ailment was intrahepatic cholestasis - msnNOW',
        description:
          'She was pregnant and terribly itchy. Something was going very wrong. The ailment was intrahepatic cholestasis msnNOW The invisible pregnancy itch that led to terrifying complications New Zealand Herald She was pregnant and terribly itchy. Something was going …',
        url:
          'https://www.msn.com/en-us/health/medical/she-was-pregnant-and-terribly-itchy-something-was-going-very-wrong/ar-BBXVsjZ',
        urlToImage:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBXVJ8m.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=2542&y=1072',
        publishedAt: '2019-12-08T18:30:00Z',
        content:
          'Ashley Sicher had an invisible itch. It had begun in early spring2017, in the third trimester of her first pregnancy. During the day, the itch was noticeable, but concentrated on her palms and feet. At night, the itch became unbearable, spreading up her arms … [+6445 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: 'www.msn.com',
        title:
          "Hit by fires and droughts, California voters call 'climate change' their top priority...",
        description: null,
        url:
          'https://www.msn.com/en-us/news/elections-2020/hit-by-fires-and-droughts-california-voters-call-climate-change-their-top-priority/ar-bbxr6i5',
        urlToImage: null,
        publishedAt: '2019-12-07T01:00:05Z',
        content:
          "Hit by fires and droughts, California voters call 'climate change' their top priority... site_name: www.msn.com host: www.msn.com url: https://www.msn.com/en-us/news/elections-2020/hit-by-fires-and-droughts-california-voters-call-climate-change-their-top-prio… [+124 chars]"
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: 'www.msn.com',
        title:
          "Accused of Killing Gambino Mob Boss, He's Presenting Novel Defense...",
        description: null,
        url:
          'https://www.msn.com/en-us/news/crime/accused-of-killing-a-gambino-mob-boss-hes-presenting-a-novel-defense/ar-bbxqdmj',
        urlToImage: null,
        publishedAt: '2019-12-07T01:00:05Z',
        content:
          "Accused of Killing Gambino Mob Boss, He's Presenting Novel Defense... site_name: www.msn.com host: www.msn.com url: https://www.msn.com/en-us/news/crime/accused-of-killing-a-gambino-mob-boss-hes-presenting-a-novel-defense/ar-bbxqdmj captured: 12/7/2019 1:00:0… [+80 chars]"
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: 'www.msn.com',
        title:
          'FDA Green-Lighting Drugs at Breakneck Speed -- and Raising Alarm...',
        description: null,
        url:
          'https://www.msn.com/en-us/news/money/fda-is-green-lighting-drugs-at-breakneck-speed-and-raising-alarm/ar-bbxrmmr',
        urlToImage: null,
        publishedAt: '2019-12-06T21:00:04Z',
        content:
          'FDA Green-Lighting Drugs at Breakneck Speed -- and Raising Alarm... site_name: www.msn.com host: www.msn.com url: https://www.msn.com/en-us/news/money/fda-is-green-lighting-drugs-at-breakneck-speed-and-raising-alarm/ar-bbxrmmr captured: 12/6/2019 9:00:04 PM U… [+75 chars]'
      },
      {
        source: { id: null, name: 'Msn.com' },
        author: null,
        title: 'US nonfarm payrolls increase by the most in 10 months - msnNOW',
        description:
          'US nonfarm payrolls increase by the most in 10 months msnNOW View full coverage on Google News',
        url:
          'https://www.msn.com/en-us/money/markets/us-nonfarm-payrolls-increase-by-the-most-in-10-months/ar-BBXQOkW?li=BBnbfcN',
        urlToImage: null,
        publishedAt: '2019-12-06T13:31:00Z',
        content:
          "U.S. job growth increased by the most in 10 months in November as former striking workers returned to General Motors' payrolls and the healthcare industry stepped up hiring, confirming that the economy remained on a moderate expansion path despite a prolonged… [+4292 chars]"
      }
    ]
  }
  private data: any[]
  constructor () {}

  ngOnInit () {
    this.data = [
      new NewsModel(
          { author: this.response['articles'][0]['author'], title: this.response['articles'][0]['title'], description: this.response['articles'][0]['description'], url: this.response['articles'][0]['url'], urlToImage: this.response['articles'][0]['urlToImage'] }),
      new NewsModel(
          { author: this.response['articles'][1]['author'], title: this.response['articles'][1]['title'], description: this.response['articles'][1]['description'], url: this.response['articles'][1]['url'], urlToImage: this.response['articles'][1]['urlToImage'] }),
      new NewsModel(
          { author: this.response['articles'][2]['author'], title: this.response['articles'][2]['title'], description: this.response['articles'][2]['description'], url: this.response['articles'][2]['url'], urlToImage: this.response['articles'][2]['urlToImage'] }),
      new NewsModel(
          { author: this.response['articles'][3]['author'], title: this.response['articles'][3]['title'], description: this.response['articles'][3]['description'], url: this.response['articles'][3]['url'], urlToImage: this.response['articles'][3]['urlToImage'] }),
      new NewsModel(
          { author: this.response['articles'][4]['author'], title: this.response['articles'][4]['title'], description: this.response['articles'][4]['description'], url: this.response['articles'][4]['url'], urlToImage: this.response['articles'][4]['urlToImage'] })
    ]
  }
}
