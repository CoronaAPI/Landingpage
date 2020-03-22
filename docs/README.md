<div style="text-align:center">
  <h1>CoronaAPI</h1>
  <img src="./assets/Ringe.svg" alt="logo">
</div>

<div style="display:flex; margin-top:125px; margin-bottom:50px; flex-wrap: wrap; justify-content: space-between;">
  <div style="margin-right: 5px; display: flex; flex-direction: column; align-items: center;">
    <img src="./assets/easy.svg" alt="logo" height="125">
    <p style="font-size: 1.3em;">Easy To Use</p>
    <div style="width:150px; text-align: center;">Get the data via your own <a href=“https://vuejs.org“>Vue</a>-component or copy it directly from your browser.  </div>
  </div>
  <div style="margin-right: 5px; display: flex; flex-direction: column; align-items: center;">
    <img src="./assets/scalable.svg" alt="logo" height="125">
    <p style="font-size: 1.3em;">It scales</p>
    <div style="width:150px; text-align: center;">The API is based on data collected via scapers. The integration of more scrapers will amplify the power of the API. </div>
  </div>
  <div style="margin-right: 5px; display: flex; flex-direction: column; align-items: center;">
    <img src="./assets/open_source.svg" alt="logo" height="125">
    <p style="font-size: 1.3em;">Open Source</p>
    <div style="width:150px; text-align: center;"> Both, the scraper collection and the API are open source and everyone is welcome to contribute. </div>
  </div>
</div>

## Our Aim 
Our goal is to merge the power of all APIs regarding the current COVID-19 cases out there to one: **this COVID-19-API**. It is supposed to provide simplified access to verified datasets from all over the world. This enables everyone to perform further analyses, visualizations or simulations – without much effort and with a high degree of transparency. With it, we want to support developers, scientists or journalists who in turn can communicate their findings to the public or to decision makers. 
And the best thing is that it can be upscaled to more data that is available on the new SARS-CoV-2 virus and its related disease! 

## How You Can Use The API
Our API is based on the [Corona Data Scraper](https://coronadatascraper.com/#home). This wonderful open-source project allows everyone to implement srapers which gather COVID-19 related data. The COVID19-API in turn provides a well defined and easy to use gateway to it. Using it you can access structured real-time data without checking every scraper or data source separately. You can for example get all known cases of the COVID-19 pandemic and filter it for specific geographical locations or for certain timepoints.

As of now, the API can give you the following case outputs:
- referred country
- source name and link
- timepoints

Your best bet is to look at out Swagger documentation to get more information on to how to use it.


## How You Can Contribute
You already have your own scraper and want to share it? Yay! We are open source and we'd be happy to also include your datasets. It would be great if we team up to extend the API to more detailed data on regional occurrences in cities or rural municipalities for example.

You would like to participate and write your own scraper but don't know how? [Find out!](https://github.com/CoronaAPI/coronadatascraper) 

