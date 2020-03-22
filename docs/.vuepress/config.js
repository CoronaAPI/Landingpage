module.exports = {
  title: "CoronaAPI",
  description:
    "The CoronaAPI that scales :-) Here you can find all information to consume or contribute data of the COVID-19 virus.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Examples", link: "/examples/" },
      { text: "API", link: "https://corona.ndo.dev/api-docs/swagger-ui" },
      { text: "Data Scraper", link: "https://coronadatascraper.com/" },
      { text: "GitHub", link: "https://github.com/CoronaAPI" }
    ]
  },
  plugins: [
    "vuepress-plugin-element-tabs",
    "code-switcher",
    ["vuepress-plugin-code-copy", { color: "#ccc837" }]
  ]
};
