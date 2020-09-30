// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const plugins = []
if (process.env.WEBPACK_STATS) {
  const { StatsWriterPlugin } = require('webpack-stats-plugin')
  plugins.push(new StatsWriterPlugin({
    fields: null,
    stats: { chunkModules: true }
  }))
}

module.exports = {
  siteName: ' Hizbe\'s Blog ;',
  siteUrl: 'https://hizbe.dev',
  siteDescription: 'it\'s about my life | my personal blog ',
  titleTemplate: '%s | @hizbe',
  icon: 'src/favicon.png',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
        // Create posts from markdown files
        use: '@gridsome/source-filesystem',
        options: {
            typeName: 'Post',
            path: 'content/posts/*.md',
            refs: {
                // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
                tags: {
                    typeName: 'Tag',
                    create: true
                }
            }
        }
    },
    {
        use: '@allanchain/gridsome-plugin-pwa',
        options: {
            manifestOptions: {
                name: "Muhammad Hizbullah",
                short_name: '@hizbe',
                description: 'This\'s about my story!',
                display: 'standalone',
                theme_color: '#213f9a',
                background_color: '#ffffff',
                gcm_sender_id: undefined,
                start_url: '/',
                categories: ['education'],
                lang: 'id-ID',
                dir: 'auto',
                androidChrome: {
                    src: './src/my-icon.png', // your favicon, usually `./src/favicon.png`
                    name: 'android-chrome',
                    sizes: [512, 384, 196, 192, 180],
                    maskable: true,                    
                },                
            },
            appleMobileWebAppStatusBarStyle: 'default',
            manifestPath: 'manifest.json',
            icon: './src/maskable_icon.png',
            maskableIcon: true,
            appleMaskIcon: './src/maskable_icon.png',
            msTileColor: '#213f9a',
            themeColor: '#213f9a',
            workboxOptions: {
                skipWaiting: true,
                runtimeCaching: [
                    {
                        urlPattern: new RegExp('https://cdnjs.cloudflare.com/.*'),
                        handler: 'CacheFirst',
                        options: { // Images don't support CORS
                            cacheName: 'Font-Awesome-css',
                            cacheableResponse: {
                                statuses: [200]
                            }
                        }
                    },
                    {
                        urlPattern: new RegExp('https://(cdn.jsdelivr.net|fonts.(gstatic|googleapis).com)/.*'),
                        handler: 'CacheFirst',
                        options: { // Images don't support CORS
                            cacheName: 'Google-Font',
                            cacheableResponse: {
                                statuses: [200]
                            }
                        }
                    },
                    {
                        urlPattern: new RegExp('/(index.json)?$'),
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'Post-Data',
                            cacheableResponse: {
                                statuses: [200]
                            }
                        }
                    },
                    {
                        urlPattern: new RegExp('/(index.html)?$'),
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'page',
                            cacheableResponse: {
                                statuses: [200]
                            }
                        }
                    },
                    {
                        urlPattern: new RegExp('/*'),
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'pages',
                            cacheableResponse: {
                                statuses: [200]
                            }
                        }
                    },
                ]
            }
        }
    },
    {
        use:  'gridsome-plugin-gitalk',
        options: {
            clientID:  'f36037cf9aa66e03843e',
            clientSecret: '029a33b30192b081d19702aae1bd17c9b1b453ee',
            repo: 'blog-gridsome-vue',
            owner: 'muh-hizbe',
            admin: ['muh-hizbe']
        }
    }
  ],

  transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    }
}
