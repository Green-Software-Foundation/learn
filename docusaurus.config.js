// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Change to Site title
  title: "Learn Green Software",
  // Change to site description
  tagline: "Learn how to make your software applications more sustainable and build a career in green software",
  // Change to site url
  url: "https://learn.greensoftware.foundation/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Green-Software-Foundation",
  // Change to GitHub repo name.
  projectName: "learn",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Change this to your repo.
          editUrl: "https://github.com/Green-Software-Foundation/training/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-593HJXNS18",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // Change to project name
        title: "Green Software Practitioner",
        logo: {
          alt: "Green Software Practitioner Logo",
          src: "img/logo.svg",
        },
        items: [{
          href: "https://greensoftware.foundation/",
          position: "right",
          label: "a Green Software Foundation project",
        }, ],
      },
      footer: {
        style: "dark",
        links: [{
            title: "Links",
            items: [{
                label: "Github",
                href: "https://github.com/Green-Software-Foundation/training/",
              },
              {
                label: "Website",
                href: "https://learn.greensoftware.foundation",
              },
            ],
          },
          {
            title: "LEGAL",
            items: [{
                label: "Trademark Policy",
                href: "https://greensoftware.foundation/policy/trademark",
              },
              {
                label: "Terms and Privacy Policy",
                href: "https://greensoftware.foundation/policy/terms",
              },
            ],
          },
          {
            title: "GSF Info",
            items: [{
                label: "Green Software Foundation",
                href: "https://greensoftware.foundation",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gsfcommunity",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/green-software-foundation/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joint Development Foundation Projects, LLC, Green Software Foundation Series`,
      },
      prism: {
        theme: lightCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: "light",
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 90,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [ // The course was originally posted under practitioner
          {
            to: '/introduction',
            from: '/practitioner/introduction',
          },
          {
            to: '/introduction',
            from: '/practitioner/introduction',
          },
          {
            to: '/introduction',
            from: '/practitioner/introduction',
          },
          {
            to: '/carbon-efficiency',
            from: '/practitioner/carbon-efficiency',
          },
          {
            to: '/energy-efficiency',
            from: '/practitioner/energy-efficiency',
          },
          {
            to: '/carbon-awareness',
            from: '/practitioner/carbon-awareness',
          },
          {
            to: '/hardware-efficiency',
            from: '/practitioner/hardware-efficiency',
          },
          {
            to: '/measurement',
            from: '/practitioner/measurement',
          },
          {
            to: '/climate-commitments',
            from: '/practitioner/climate-commitments',
          },
          {
            to: '/glossary', // Note there is a spelling correction here also
            from: '/practitioner/glossery',
          },
        ]
      },
    ],
  ],
};

module.exports = config;