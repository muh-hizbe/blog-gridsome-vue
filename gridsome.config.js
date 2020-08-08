// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: ' Hizbe\'s Blog ;',
  siteUrl: 'localhost/blog',
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
                name: "@hizbe",
                short_name: 'Blog\'s @hizbe',
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
                    sizes: [512, 384, 192, 144, 96, 72, 48],
                    maskable: true,
                },
            },
            appleMobileWebAppStatusBarStyle: 'default',
            manifestPath: 'manifest.json',
            icon: 'src/favicon.png',
            msTileColor: '#213f9a',
            workboxOptions: {
                swSrc: './src/registerServiceWorker.js',
                cacheId: 'awesome-pwa',
                globPatterns: ['assets/@(js|css|png|jpg)/*', 'index.html'],
                skipWaiting: true
            }
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
