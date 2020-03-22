# Getting Started

Welcome to our getting started guides. There are two primary ways we envision people interacting with our project.

1. If you are a developer and would like to consume the latest COVID-19 data in your application / website.

2. You are a healthcare worker / government employee / anyone else who may have other (accurate) COVID-19 Data you would like to add to

::: I want to consume data

To get started consuming our data you can checkout our Swagger Docs for the endpoints here: [corona.ndo.dev/api-docs](https://corona.ndo.dev/api-docs/swagger-ui)

As an example, you can use the browser built-in `fetch` method to query the data:

```javascript
fetch('https://corona.ndo.dev/api/daily)
  .then(data => data.json())
  .then(resp => {
    console.log('Result: ', resp)
  })
  .catch(err => console.error(err))
```

::: I want to add a new data source

To add a new datasource, you can add a new scraper to the [@lazd/coronadatascraper](https://github.com/lazd/coronadatascraper) repo.

A scraper is a simply a small program that gets executed and can "scrape" the data from, for example, news articles from the Berlin Morningpost to get the newest data into a useable format.

To add a new scraper:

{ Add getting started on new scraper }
