// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'inZOI Guide',
  tagline: 'Let\'s Enjoy inZOI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://inzoiguide.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'inZOI Guide', // Usually your GitHub org/user name.
  projectName: 'inzoi-guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  scripts: [{src: 'https://plausible.haoran.cv/js/script.js', async: true, defer: true, 'data-domain': 'inzoiguide.com'}],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: {
    experimental_faster: true
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hr98w/inzoi-guide/tree/main'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'inZOI Guide',
        logo: {
          alt: 'inZOI Logo',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: 'https://playinzoi.com', 
            label: 'inZOI Official Website', 
            position: 'right',
            className: 'navbar-external-link'
          },

          // {
          //   'href': 'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template',
          //   'position': 'right',
          //   'className': 'header-github-link',
          //   'aria-label': 'GitHub repository'
          // }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Important',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro'
              },
              {
                label: "inZOI download",
                to: 'docs/get-start/download'
              },
              {
                label: 'inZOI release date',
                to: '/blog/inzoi-release-date'
              },
              {
                label: 'inZOI system requirements',
                to: '/blog/inzoi-system-requirements'
              }
            ]
          },

          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus'
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus'
          //     },
          //     {
          //       label: 'X',
          //       href: 'https://x.com/docusaurus'
          //     }
          //   ]
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blogs',
                to: '/blog'
              },
              {
                label: 'inZOI Reddit',
                to: 'https://www.reddit.com/r/inZOI/'
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus'
              // }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} inZOI Guide`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
    }),
    // titleDelimiter: '|',
    
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        docsRouteBasePath: '/docs',
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ]
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true
      })
    ],
    [
      './src/plugins/blog-plugin',
      {
        path: 'blog',
        editLocalizedFiles: false,
        blogTitle: 'Blog',
        blogDescription: 'Latest News about inZOI',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List blog',
        routeBasePath: 'blog',
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**'
        ],
        postsPerPage: 6,
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/hr98w/inzoi-guide/tree/main/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ]
  ]
}

export default config
