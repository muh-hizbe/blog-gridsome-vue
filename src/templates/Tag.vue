<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="posts">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <div class="page">
      <Pager :info="$page.tag.belongsTo.pageInfo" />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag (id: $id) {
    title
    belongsTo (perPage: 5, page: $page, sortBy: "date") @paginate {
        totalCount
        pageInfo {
            totalPages
            currentPage            
        }
        edges {
            node {
                ...on Post {
                    title
                    path
                    date (format: "D MMMM YYYY")
                    timeToRead
                    description
                    content
                }
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
    Pager,
    Author,
    PostCard
  },
  metaInfo () {
      return {
          title: this.$page.tag.title,
          meta: [
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: `https://hizbe.dev/tag/${this.$page.tag.title}/` },
              { property: 'og:title', content: this.$page.tag.title },
              { property: 'og:description', content: `All post of ${this.$page.tag.title} tag name` },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:url', content: `https://hizbe.dev/tag/${this.$page.tag.title}/` },
              { name: 'twitter:title', content: this.$page.tag.title },
              { name: 'twitter:description', content: `All post of ${this.$page.tag.title} tag name` },
          ]
      }
  }
}
</script>

<style lang="scss">

</style>

