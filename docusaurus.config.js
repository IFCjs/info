/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "IFC.js",
  tagline: "BIM toolkit for JavaScript.",
  url: "https://IFCjs.github.io",
  baseUrl: "/info/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "IFCjs", // Usually your GitHub org/user name.
  projectName: "info", // Usually your repo name.
  stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "zh"],
    localeConfigs: {
      en: {
        label: "English",
      },
      ja: {
        label: "日本語",
      },
      zh: {
        label: "中文",
      },
    },
  },
  themeConfig: {
    image: "img/social-card.png",
    prism: {
      theme: require("./src/codeThemes/duotoneLight"),
      darkTheme: require("./src/codeThemes/nightOwl"),
    },
    navbar: {
      title: "IFC.js",
      logo: {
        alt: "IFC.js Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "Introduction",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://discord.gg/FXfyR4XrKT",
          label: "Community",
          position: "right",
        },
        {
          href: "https://github.com/IFCjs",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/FXfyR4XrKT",
            },
            {
              label: "Funding",
              href: "https://opencollective.com/ifcjs",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ifc_js",
            },
            {
              label: "Twitch",
              href: "https://www.twitch.tv/ifc_js/about",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/IFCjs",
            },
            {
              label: "Roadmap",
              href: "https://trello.com/b/d5frRnSe/roadmap",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IFC.js.`,
    },
    algolia: {
      indexName: "ifcjs",
      appId: "JKKUEA9VHK",
      apiKey: "5d321bcacec1258a1ff695289d0be6c2",
      searchParameters: { facetFilters: ["type:content"] },
      debug: false,
      //... other Algolia params
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
