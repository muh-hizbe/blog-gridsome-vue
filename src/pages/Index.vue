<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <div class="page">
      <Pager :info="$page.posts.pageInfo" />
    </div>

  </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allPost(perPage: 5, page: $page, filter: { published: { eq: true }}, sortBy: "date") @paginate {
    pageInfo {
      totalPages
      currentPage            
    }
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        timeToRead
        description
        cover_image
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Author from '@/components/Author.vue'
import PostCard from '@/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard,
    Pager
  },
  metaInfo() {
      return {
          title: 'Home',
          meta: [
            { name: 'author', content: 'Muhammad Hizbullah' },
            { name: 'description', content: 'Home page of personal blog by @hizbe' },
            { name: 'theme-color', content: '#213f9a' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://hizbe.dev' },
            { property: 'og:title', content: 'Home' },
            { property: 'og:description', content: 'Home page of personal blog by @hizbe' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: 'https://hizbe.dev' },
            { name: 'twitter:title', content: 'Home' },
            { name: 'twitter:description', content: 'Home page of personal blog by @hizbe' },
          ]
      }
  }
}
</script>
