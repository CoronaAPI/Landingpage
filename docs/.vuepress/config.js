module.exports = {
  title: "CoronaAPI",
  description:
    "The CoronaAPI that scales :-) Here you can find all information to consume or contribute data of the COVID-19 virus.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Examples", link: "/examples/" },
      {
        text: "API",
        link: "https://corona.ndo.dev/api-docs/swagger-ui",
        target: "_blank"
      },
      {
        text: "Data Scraper",
        link: "https://coronadatascraper.com/",
        target: "_blank"
      }
    ],
    searchPlaceholder: "Search...",
    repo: "CoronaAPI",
    repoLabel: "Github",
    smoothScroll: true,
    editLinks: true,
    editLinkText: "Help us improve this page!",
    footer: "testt",
    lastUpdated: "Last Updated"
  },
  footer: "testt",
  plugins: [
    "vuepress-plugin-element-tabs",
    "code-switcher",
    "@vuepress/back-to-top",
    [("vuepress-plugin-code-copy", { color: "#ccc837" })]
  ]
};
