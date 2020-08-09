<template>
    <Layout :show-logo="false">
        <div class="grid-container text-center">
            <h1 class="m-center text-center">Archieves</h1>
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
        cover_image (blur: 10)
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
import ArchieveCard from '~/components/ArchieveCard.vue'

export default {
  components: {
    ArchieveCard,
    Pager
  },
  metaInfo: {
    title: 'Archieves',
    meta: [
      { name: 'author', content: 'Muhammad Hizbullah' },
      { name: 'description', content: 'All archieve post saved here.' },
    ]
  }
}
</script>