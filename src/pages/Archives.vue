<template>
    <Layout :show-logo="false">
        <div class="grid-container text-center">
            <h1 class="m-center text-center">Archives</h1>
        </div>

        <div class="grid-container">
            <table class="m-center" style="overflow: scroll">
                <ArchieveCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
            </table>
        </div>

        <div class="page">
            <Pager :info="$page.posts.pageInfo" />
        </div>
    </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allPost(perPage: 20, page: $page, filter: { published: { eq: true }}, sortBy: "date") @paginate {
    pageInfo {
      totalPages
      currentPage            
    }
    edges {
      node {
        id
        title
        date (format: "YYYY/MM/D")
        timeToRead
        description
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
import ArchieveCard from '@/components/ArchieveCard.vue'

export default {
  components: {
    ArchieveCard,
    Pager
  },
  metaInfo() {
      return {
          title: 'Archives',
          meta: [
              { name: 'author', content: 'Muhammad Hizbullah' },
              { name: 'description', content: 'All archieve post saved here.' },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', conten: 'https://hizbe.dev/archives' },
              { property: 'og:title', content: 'Archives' },
              { property: 'og:description', content: 'All archieve post saved here.' },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:url', conten: 'https://hizbe.dev/archives' },
              { name: 'twitter:title', content: 'Archives' },
              { name: 'twitter:description', content: 'All archieve post saved here.' },
          ]
      }
  }
}
</script>