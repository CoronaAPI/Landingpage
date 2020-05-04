module.exports = {
  title: "CoronaAPI",
  description:
    "The CoronaAPI that scales :-) Here you can find all information to consume or contribute data of the COVID-19 virus.",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicon/android-chrome-192x192.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/favicon/android-chrome-512x512.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/favicon/safari-pinned-tab.svg",
        color: "#3a0839"
      }
    ],
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    [
      "script",
      {
        type: "text/javascript",
        src: "https://cdn.headwayapp.co/widget.js"
      }
    ],
    [
      ("link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" })
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3a0839" }],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "/favicon/browserconfig.xml"
      }
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Test", link: "/testaoe/" },
      { text: "Guide", link: "/guide/" },
      { text: "Examples", link: "/examples/" },
      {
        text: "API",
        link: "https://data.corona-api.org/api-docs",
        target: "_blank"
      },
      {
        text: "GraphQL (pre-alpha)",
        link: "https://554o1tyyx8.execute-api.eu-central-1.amazonaws.com/dev/graphql",
        target: "_blank"
      },
      {
        text: "Status",
        link: "https://status.corona-api.org",
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
