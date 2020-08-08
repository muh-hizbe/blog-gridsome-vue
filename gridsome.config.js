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
      use: "gridsome-plugin-service-worker",
      options: {
        precachedRoutes: ["/",/\.(js|css|png|md)$/],
        staleWhileRevalidate: {
          cacheName: "co-v1",
          routes: ["/"],
        },
      },
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#ffffff",
        icon_path: "./src/assets/images/icons/icon-152x152.png",
        name: "@hizbe",
        short_name: "Blog's @hizbe",
        theme_color: "#213f9a",
        lang: "id",
        display: "standalone"
      },
    },
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
