// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const VersionsArchived = require('./versionsArchived.json');
const ArchivedVersionsDropdownItems = Object.entries(VersionsArchived)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EasyClick - 自动化脚本专家',
  tagline: '自动化脚本专家',
  url: 'https://ieasyclick.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/easyclick.png',
  organizationName: 'easyclick', // Usually your GitHub org/user name.
  projectName: 'easyclick-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      zh: {
        label: '简体中文',
      },
      en: {
        label: 'English',
      },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          routeBasePath: '/blog',
          path: 'blog',
          blogTitle: '博客',
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '所有文章',
          sortPosts: 'descending'
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/base.css')
          ]
        }
      })
    ]
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        indexDocs: true,
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: ["/docs", "/iosdocs"],
        docsDir: ["docs", "iosdocs"]
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'EasyClick',
        logo: {
          alt: 'EasyClick Logo',
          src: 'img/easyclick.png',
          href: '/'
        },
        hideOnScroll: false,
        // navbar的选项卡
        items: [
          {
            position: 'left',
            to: '/docs',
            label: '安卓开发文档',
          },
          {
            position: 'left',
            to: '/iosdocs',
            label: 'iOS开发文档',
          },
          {
            type: 'dropdown',
            label: '企业版产品',
            position: 'left',
            items: [
              {
                label: '企业版云控',
                href: '/usescene',
              },
              {
                label: '企业版群控',
                href: '/case',
              }
            ],
          },
          {
            position: 'left',
            label: '社区',
            to: '/community/support',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/easy-click/easyclick-libs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // 黑白切换按钮
        respectPrefersColorScheme: false
      },
      algolia: {
        appId: 'dd',
        apiKey: 'dd',
        indexName: 'easyclick'
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '安卓开发文档',
                to: 'docs/'
              },
              {
                label: 'iOS开发文档',
                to: 'iosdocs/'
              },
              {
                label: '企业版云控',
                to: 'docs/zh-cn/ecloud2/installcloud'
              }
            ]
          },
          {
            title: '联系客服',
            items: [
              {
                label: '加客服联系',
                to: '/community/support'
              },
            ]
          },

          {
            title: '更多',
            items: [
              {
                label: '联系我们',
                to: '/docs/zh-cn/joinus'
              },
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 易点新媒, Inc. All Rights Reserved. `
      },
      // prism: {
      //   darkTheme: darkCodeTheme
      // },
      announcementBar: {
        id: 'start',
        content: '⭐️ 如果你喜欢 EasyClick，<a target="_blank" href="https://github.com/easy-click/easyclick-libs"> 请在GitHub为这个产品点赞</a>',
        // '⭐️ If you like Rainbond,<a target="_blank" href="https://github.com/goodrain/rainbond"> give it a star on GitHub</a> !',
        isCloseable: false,
      }
    }),
  scripts: [
    //'https://static.goodrain.com/docusaurus/baidu-statistics.js',
    //'https://static.goodrain.com/docusaurus/posthog.js'
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iosdocs',
        path: 'iosdocs',
        routeBasePath: 'iosdocs',
        sidebarPath: require.resolve('./sidebarsIos.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'case',
        routeBasePath: 'case',
        path: './case',
        blogTitle: '案例',
        postsPerPage: 10,
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '案例',
        sortPosts: 'descending'
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'usescene',
        routeBasePath: 'usescene',
        path: './usescene',
        blogTitle: '使用场景',
        postsPerPage: 10,
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '使用场景',
        sortPosts: 'descending'
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          // if (existingPath.includes('docs/use-manual/component-create')) {
          //   return [
          //     existingPath.replace(
          //       'docs/use-manual/component-create',
          //       'docs/component-create'
          //     )
          //   ];
          // }
          // if (existingPath.includes('docs/use-manual/enterprise-manager')) {
          //   return [
          //     existingPath.replace(
          //       'docs/use-manual/enterprise-manager',
          //       'docs/enterprise-manager'
          //     )
          //   ];
          // }
          // if (existingPath.includes('docs/use-manual/user-manual')) {
          //   return [
          //     existingPath.replace(
          //       'docs/use-manual/user-manual',
          //       'docs/user-manual'
          //     )
          //   ];
          // }
          // if (existingPath.includes('docs/quick-start/get-start')) {
          //   return [
          //     existingPath.replace(
          //       'docs/quick-start/get-start',
          //       'docs/get-start'
          //     )
          //   ];
          // }
          // if (existingPath.includes('docs/quick-start/architecture/')) {
          //   return [
          //     existingPath.replace(
          //       'docs/quick-start/architecture/',
          //       'docs/architecture/'
          //     )
          //   ];
          // }
          if (existingPath.includes('docs/expand/practices')) {
            return [
              existingPath.replace('docs/expand/practices', 'docs/practices')
            ];
          }
          if (existingPath.includes('docs/expand/opensource-app')) {
            return [
              existingPath.replace(
                'docs/expand/opensource-app',
                'docs/opensource-app'
              )
            ];
          }
          // 配置组件自动构建部署重新 URL
          if (existingPath.includes('docs/use-manual/component-manage/build-source/auto_build')) {
            return [
              existingPath.replace(
                'docs/use-manual/component-manage/build-source/auto_build',
                'docs/user-manual/component-dev/auto_build'
              )
            ];
          }
          return undefined;
        }
      }
    ],
    'docusaurus-plugin-sass'
  ]
};

module.exports = config;
