import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "ESPN",
      },
      author: "Jenna Laine",
      title:
        "Antonio Brown releases lengthy statement, tells his side of story days after leaving Tampa Bay Buccaneers game - ESPN",
      description:
        "In a lengthy statement released Wednesday night, Antonio Brown said he was forced by the Bucs to play through an ankle injury and alleged that the team has since tried to cover up what actually happened.",
      url: "https://www.espn.com/nfl/story/_/id/33002723/antonio-brown-releases-lengthy-statement-tells-side-story-days-leaving-tampa-bay-buccaneers-game",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0103%2Fr957541_1296x729_16%2D9.jpg",
      publishedAt: "2022-01-06T04:29:16Z",
      content:
        "TAMPA, Fla. -- In his first statement since leaving the field in the third quarter of the Tampa Bay Buccaneers' game at the New York Jets on Sunday, Antonio Brown said he was forced to play on an inj… [+11226 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Capitol riot: Biden to blame Trump for 'carnage' one year on - BBC News",
      description:
        'On the attack\'s anniversary, Mr Biden will say his predecessor holds "singular responsibility".',
      url: "https://www.bbc.com/news/world-us-canada-59889760",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1674B/production/_122597919_976_reutershi071914487.jpg",
      publishedAt: "2022-01-06T03:47:19Z",
      content:
        "Media caption, Watch: Officer Harry Dunn is still traumatised by the attack on the Capitol\r\nPresident Joe Biden will blame Donald Trump for the US Capitol riot as he marks the anniversary of the atta… [+7125 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "Shia Kapos, Nick Niedzwiadek",
      title:
        "Chicago mayor: Teachers union made us a 'laughingstock' - POLITICO",
      description:
        "As the Omicron variant triggers a new wave of Covid-19 cases, educators in the nation's third-largest school district voted late Tuesday to not report to work.",
      url: "https://www.politico.com/news/2022/01/05/chicago-mayor-lightfood-teachers-union-laughingstock-526600",
      urlToImage:
        "https://static.politico.com/3e/cb/eda91f1144dd85a6e236f765b229/ap21271728658155.jpg",
      publishedAt: "2022-01-06T03:31:14Z",
      content:
        "Chicago is the nation's largest district to close, and the only major one shuttered by a labor dispute.\r\nIts unclear if the unions move will inspire educators elsewhere to follow suit as they see the… [+5716 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Brian Lewis",
      title:
        "Returning Kyrie Irving comes up big as Nets rally past Pacers - New York Post ",
      description:
        "Kyrie Irving finally got the long-awaited season debut he wanted. And the Nets got the lift they needed.",
      url: "https://nypost.com/2022/01/05/returning-kyrie-irving-comes-up-big-as-nets-rally-past-pacers/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/01/Kyrie-Irving-2.jpg?quality=90&strip=all&w=1024",
      publishedAt: "2022-01-06T03:27:00Z",
      content:
        "INDIANAPOLIS Kyrie Irving finally got the long-awaited season debut he wanted.\r\nAnd the Nets got the lift they needed.\r\nIrving shook off some early rust and the Nets shook off a huge deficit, stormin… [+3639 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Kim Kardashian & Pete Davidson ALL SMILES in the Bahamas - E! News",
      description:
        'The "KUWTK" alum and Pete Davidson get cozy following a boat ride in the Bahamas. Plus, Kanye "Ye" West is spotted with actress Julia Fox in NYC. Watch!',
      url: "https://www.youtube.com/watch?v=C80-6gL4xRE",
      urlToImage: "https://i.ytimg.com/vi/C80-6gL4xRE/maxresdefault.jpg",
      publishedAt: "2022-01-06T02:52:46Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "Human remains found near suspected origin of Colorado wildfire - The Guardian",
      description:
        "Partial remains of adult discovered south of Boulder but experts say tally of two missing is strikingly low for a blaze of this ferocity",
      url: "https://amp.theguardian.com/us-news/2022/jan/05/colorado-wildfire-human-remains-marshall-fire",
      urlToImage: null,
      publishedAt: "2022-01-06T02:35:00Z",
      content:
        "ColoradoPartial remains of adult discovered south of Boulder but experts say tally of two missing is strikingly low for a blaze of this ferocity\r\nGuardian staff and agencies\r\nInvestigators have found… [+3618 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Katherine Dillinger, CNN",
      title:
        "CDC recommends Pfizer/BioNTech Covid-19 vaccine boosters for children as young as 12 - CNN",
      description:
        "The US Centers for Disease Control and Prevention updated its recommendations for the Pfizer/BioNTech Covid-19 vaccine booster on Wednesday to include children as young as 12, at least five months after they finish the primary vaccine series.",
      url: "https://www.cnn.com/2022/01/05/health/cdc-acip-pfizer-covid-vaccine-boosters-adolescents/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220105143231-02-pfizer-booster-120221-super-tease.jpg",
      publishedAt: "2022-01-06T02:23:00Z",
      content:
        "(CNN)The US Centers for Disease Control and Prevention updated its recommendations for the Pfizer/BioNTech Covid-19 vaccine booster on Wednesday to include children as young as 12, at least five mont… [+3790 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Ghislaine Maxwell to seek new trial after juror's sexual abuse claim -lawyer - Reuters",
      description:
        "Ghislaine Maxwell, who was convicted last week of aiding Jeffrey Epstein's sexual abuses, deserves a new trial, her lawyer said on Wednesday after a juror told media including Reuters that he had been a victim of sexual abuse.",
      url: "https://www.reuters.com/world/us/ghislaine-maxwells-prosecutors-seek-inquiry-into-jurors-sexual-abuse-claim-2022-01-05/",
      urlToImage:
        "https://www.reuters.com/resizer/SpMFUWHCAhaTPCyt4g5yye1q560=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DX5YFE5JJBPWBO6XZE75ZGHFPI.jpg",
      publishedAt: "2022-01-06T02:20:00Z",
      content:
        "NEW YORK, Jan 5 (Reuters) - Ghislaine Maxwell, who was convicted last week of aiding Jeffrey Epstein's sexual abuses, deserves a new trial, her lawyer said on Wednesday after a juror told media inclu… [+5139 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Italy extends COVID vaccine mandate to everyone over 50 - Reuters",
      description:
        "Italy on Wednesday made COVID-19 vaccination mandatory for people from the age of 50, one of very few European countries to take a similar steps, in an attempt to ease pressure on its health service and reduce fatalities.",
      url: "https://www.reuters.com/world/europe/italy-make-covid-jab-mandatory-over-50s-tighten-curbs-draft-2022-01-05/",
      urlToImage:
        "https://www.reuters.com/resizer/o1dw_EvgH11zRh1jDtVVJTKUG18=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7XESQJXOYJOVNJJ6OULEM3SZFE.jpg",
      publishedAt: "2022-01-06T02:17:00Z",
      content:
        "ROME, Jan 5 (Reuters) - Italy on Wednesday made COVID-19 vaccination mandatory for people from the age of 50, one of very few European countries to take a similar steps, in an attempt to ease pressur… [+3027 chars]",
    },
    {
      source: {
        id: null,
        name: "FOX 29 News Philadelphia",
      },
      author: "Steve Keeley",
      title:
        "Philadelphia fire: 12 dead, including 8 children, after Fairmount row home fire - FOX 29 Philadelphia",
      description:
        "Authorities now say 12 people, including eight children, have died as a result of Wednesday morning's fire in Philadelphia's Fairmount neighborhood. The property was owned, operated, and inspected by the Philadelphia Housing Authority.",
      url: "https://www.fox29.com/news/philadelphia-fire-12-dead-including-8-children-after-fairmount-row-home-fire",
      urlToImage:
        "https://images.foxtv.com/static.fox29.com/www.fox29.com/content/uploads/2022/01/1280/720/snapshot-1.jpg?ve=1&tl=1",
      publishedAt: "2022-01-06T02:10:06Z",
      content:
        "PHILADELPHIA - 12 people have died, including eight children, following a fire inside of a Philadelphia Housing Authority row home in Philadelphia's Fairmount neighborhood Wednesday morning. \r\nFirefi… [+5541 chars]",
    },
    {
      source: {
        id: null,
        name: "Investor's Business Daily",
      },
      author: "Investor's Business Daily",
      title:
        "Dow Jones Futures: Hawkish Fed Stuns Wall Street; Tesla, Microsoft, Google Break Key Levels - Investor's Business Daily",
      description:
        "Stocks sold off after the Fed signaled faster tightening. Tesla and Microsoft are showing strain.",
      url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-hawkish-fed-slams-market-rally-tesla-microsoft-google-break-key-levels/",
      urlToImage:
        "https://www.investors.com/wp-content/uploads/2019/10/stock-Federal-Reserve-fall-12-shutter.jpg",
      publishedAt: "2022-01-06T01:50:00Z",
      content:
        "Dow Jones futures tilted lower overnight, along with S&amp;P 500 futures and Nasdaq futures. The stock market rally turned sharply negative Wednesday on hawkish Federal Reserve comments, closing at s… [+8544 chars]",
    },
    {
      source: {
        id: null,
        name: "KSAT San Antonio",
      },
      author:
        "Ivan Herrera, Garrett Brnger, Luis Cienfuegos, Myra Arthur, Steve Spriester",
      title:
        "Metro Health opening three new COVID-19 testing sites amid surging demand across San Antonio - KSAT San Antonio",
      description:
        "The City of San Antonio will be adding three new COVID-19 testing sites through a partnership with Community Labs to address testing capacity and wait times that some have said lasted hours.",
      url: "https://www.ksat.com/news/local/2022/01/06/metro-health-opening-three-new-covid-19-testing-sites-amid-surging-demand-across-san-antonio/",
      urlToImage:
        "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/01-05-2022/t_a94346f00216402cbcc428abf196fca4_name_image.jpg?_a=ATABlcW0",
      publishedAt: "2022-01-06T01:43:13Z",
      content:
        "SAN ANTONIO The City of San Antonio will be adding three new COVID-19 testing sites through a partnership with Community Labs to address testing capacity and wait times that some have said lasted hou… [+5684 chars]",
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title:
        "James Webb Space Telescope Successfully Deploys Secondary Mirror – “Another Banner Day for JWST!” - SciTechDaily",
      description:
        "Today, Webb teams successfully deployed the observatory’s secondary mirror support structure. When light from the distant universe hits Webb’s iconic 18 gold primary mirrors, it will reflect off and hit the smaller, 2.4-foot (.74-meter) secondary mirror, whic…",
      url: "https://scitechdaily.com/james-webb-space-telescope-successfully-deploys-secondary-mirror-another-banner-day-for-jwst/",
      urlToImage:
        "https://scitechdaily.com/images/Webb-Space-Telescope-Secondary-Mirror-Deployment.gif",
      publishedAt: "2022-01-06T01:32:42Z",
      content:
        "ByNASAJanuary 5, 2022\r\nWebb Space Telescope Secondary Mirror deployment. Credit: NASA’s Goddard Space Flight Center Conceptual Image Lab\r\nToday, Webb teams successfully deployed the observatory’s sec… [+2440 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Royal Caribbean, Norwegian Cruise cancel voyages amid Omicron scare - Reuters",
      description:
        "Royal Caribbean and Norwegian Cruise Line on Wednesday canceled sailings amid rising fears of Omicron-related coronavirus infections that have dampened the nascent recovery of the pandemic-ravaged cruise industry.",
      url: "https://www.reuters.com/business/norwegian-cruise-cancels-several-sailings-omicron-cases-surge-2022-01-05/",
      urlToImage:
        "https://www.reuters.com/resizer/PMcy--SrQ89H6Xpv-_fWpX_IFtI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LERN2N3ITJLDFFPSRFEKIADA3Q.jpg",
      publishedAt: "2022-01-06T01:26:00Z",
      content:
        "Jan 5 (Reuters) - Royal Caribbean and Norwegian Cruise Line on Wednesday canceled sailings amid rising fears of Omicron-related coronavirus infections that have dampened the nascent recovery of the p… [+2476 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Austin Ramzy, John Yoon",
      title:
        "Hong Kong Suspends Flights From Eight Countries - The New York Times",
      description:
        "The new measures will deepen the city’s isolation and mark a return to the tough restrictions from the early days of the pandemic, as officials race to contain the Omicron variant.",
      url: "https://www.nytimes.com/2022/01/05/world/asia/hong-kong-flights.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/01/05/world/05virus-briefing-hk/merlin_198393228_5991694a-e6ac-4696-b0f9-47256645c77a-facebookJumbo.jpg",
      publishedAt: "2022-01-06T01:06:26Z",
      content:
        "Hong Kong has reported a growing number of imported cases involving the Omicron variant, with 133 as of Tuesday. \r\nIf this continues, there will be tremendous strain on our quarantine and health care… [+1571 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Rob Picheta, Anna Chernova, Radina Gigova and Ivan Watson, CNN",
      title:
        "Emergency declared in Kazakhstan as fuel protests rage and government resigns - CNN",
      description:
        "Unrest broke out in cities across Kazakhstan on Wednesday, as thousands angrily protested a sharp fuel price hike that sparked the resignation of the Central Asian country's government.",
      url: "https://www.cnn.com/2022/01/05/asia/kazakhstan-fuel-protests-emergency-wednesday-intl/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220104213301-05-kazakhstan-protest-emergency-010522-super-tease.jpg",
      publishedAt: "2022-01-06T00:45:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "KCRA Sacramento",
      },
      author: "Daniel Macht",
      title:
        "‘Omicron is here’: California extends indoor mask mandate through Feb. 15 - KCRA Sacramento",
      description:
        "California health officials will extend an indoor mask mandate at public places for another month as the omicron variant has led to concerns about strains on the hospital system.",
      url: "https://www.kcra.com/article/omicron-is-here-california-extends-indoor-mask-mandate-through-feb-15/38679038",
      urlToImage:
        "https://kubrick.htvapps.com/vidthumb/4d56e7fa-917c-4509-8661-d1c911332207/4d56e7fa-917c-4509-8661-d1c911332207_image.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2022-01-06T00:06:00Z",
      content:
        "California health officials will extend an indoor mask mandate at public places for another month as the omicron variant has led to concerns about strains on the hospital system.\r\nDr. Mark Ghaly, the… [+1371 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Alex Heigl",
      title:
        "Corey Gamble shows off Tristan Thompson jersey amid paternity scandal - Page Six",
      description:
        "The 41-year-old Gamble was snapped outside of the arena after Thompson’s Sacramento Kings matchup against the Los Angeles Lakers, which the Kings lost 114-122.",
      url: "https://pagesix.com/2022/01/05/corey-gamble-shows-off-tristan-thompson-jersey-amid-paternity-scandal/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/01/corey-comp.jpg?quality=90&strip=all&w=1200",
      publishedAt: "2022-01-06T00:02:00Z",
      content:
        "That was Jenner-ous of him.\r\nKris Jenner’s boyfriend, Corey Gamble, made a surprising show of support for Tristan Thompson Tuesday, holding up the NBA player’s No. 13 jersey for paparazzi in LA.\r\nThe… [+2607 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Azmi Haroun",
      title:
        "Unvaccinated teen in LA tests positive for co-infection of 'flurona' - Business Insider",
      description:
        'The LA County Department of Public Health told the Los Angeles Times that co-infections are "exceedingly common," with COVID-19 and the flu.',
      url: "https://www.businessinsider.com/unvaccinated-teen-la-tests-positive-for-co-infection-of-flurona-2022-1",
      urlToImage:
        "https://i.insider.com/61d610d495f1b90018376d52?width=1200&format=jpeg",
      publishedAt: "2022-01-05T23:07:44Z",
      content:
        'A Los Angeles teenager who was unvaccinated against the flu and COVID-19 has tested positive for a dual infection of both illnesses, dubbed "flurona," according to the Los Angeles Times.\r\nThe co-infe… [+1537 chars]',
    },
    {
      source: {
        id: null,
        name: "Daily Mail",
      },
      author: "Carly Johnson, Brian Gallagher",
      title:
        "Kanye West gets caught wearing SAME clothes after taking Julia Fox back to hotel - Daily Mail",
      description:
        "Kanye West took his new lady love Julia Fox back to his hotel after the pair enjoyed a romantic dinner and a Broadway show in New York City on Tuesday night.",
      url: "https://www.dailymail.co.uk/tvshowbiz/article-10373155/Kanye-West-gets-caught-wearing-clothes-taking-Julia-Fox-hotel.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/01/05/23/52593485-0-image-a-98_1641423924083.jpg",
      publishedAt: "2022-01-05T23:07:20Z",
      content:
        "Kanye West took his new lady love Julia Fox back to his hotel after the pair enjoyed a romantic dinner and a Broadway show in New York City on Tuesday night.\r\nAnd the 44-year-old rapper was caught we… [+8027 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello Iam constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top Headings </h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
