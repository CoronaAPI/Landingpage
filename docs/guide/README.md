# Getting Started

Welcome to our 'getting started' guides. There are two primary ways we envision people interacting with our project:

1. You are a developer and would like to consume the latest COVID-19 data in your application / website.

2. You are a healthcare worker / government employee / anyone else who may have other (accurate) COVID-19 data you would like to add.

:::: tabs stretch
::: tab I want to consume data

To get started consuming our data you can checkout our Swagger Docs for the endpoints here: [data.corona-api.org](https://data.corona-api.org/api-docs)

(If you want to get all the data as CSV you can checkout this page here: [Corona CSV](https://coronadatascraper.com/#data.csv))

As an example, you can use the browser built-in `fetch` method to query the data:

```javascript
fetch('https://data.corona-api.org/v1/daily)
  .then(data => data.json())
  .then(resp => {
    console.log('Result: ', resp)
  })
  .catch(err => console.error(err))
```

:::

::: tab I want to add a new data source

To add a new datasource, you can add a new scraper to the [@lazd/coronadatascraper](https://github.com/lazd/coronadatascraper) repo.

A scraper is simply a small program that gets executed and can "scrape" the data from, for example, news articles from the Berlin Morningpost to get the newest data into a useable format.

Adding a new scraper is as easy as adding the code to their repo. In short, it should return an object with the following info:

- city - The city name (not required if defined on scraper object)
- county - The county or parish (not required if defined on scraper object)
- state - The state, province, or region (not required if defined on scraper object)
- country - ISO 316 6-1 alpha-3 country code
- cases - Total number of cases
- deaths - Total number of deaths
- recovered - Total number recovered
- tested - Total number tested
- population - The estimated population of the location
- coordinates - Array of coordinates as [longitude, latitude]

An example scraper looks like this:

```js
  {
    url: 'https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv',
    country: 'USA',
    state: 'IN',
    scraper: async function() {
      let data = await fetch.csv(this.url);

      let counties = [];
      for (let county of data) {
        counties.push({
          county: geography.addCounty(parse.string(county.COUNTYNAME)), // Add " County" to the end
          cases: parse.number(county.Total_Positive),
          deaths: parse.number(county.Total_Deaths),
          tested: parse.number(county.Total_Tested)
        });
      }

      // Also return data for IN itself
      counties.push(transform.sumData(counties));

      return counties;
    }
  },
```

For more information, please visit: [https://github.com/lazd/coronadatascraper#contributing](https://github.com/lazd/coronadatascraper#contributing)

:::
::::

<headway />
