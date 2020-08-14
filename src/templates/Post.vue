<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta v-if="isMounted" :post="$page.post" />

      <hr>

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
        <!-- <Gitalk :config="{id: $page.post.id}" /> -->
    </div>
    
  </Layout>
</template>

<script>

</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    id
    title
    path
    date (format: "D MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image
  }
}
</page-query>

<script>
import PostMeta from '@/components/PostMeta'
import PostTags from '@/components/PostTags'
import Author from '@/components/Author.vue'

export default {
    data() {
        return {
            isMounted: false,            
        }
    },
    mounted() {
        this.isMounted = true;
        console.log('data tampil' + this.$page.post.path);
    },
    components: {
        Author,
        PostMeta,
        PostTags,
    },
    metaInfo () {
        return {
            title: this.$page.post.title,
            meta: [
                {
                    name: 'description',
                    content: this.$page.post.description
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;

    img {
      width: 100%;
      border-radius: var(--radius);
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }
  }

  &__footer {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
  }

}

.post-comments {
    max-width: var(--content-width);
    padding: calc(var(--space) / 2);
    margin: 0 auto;
    transition: background-color .6s;
    transition: transform .3s, background-color .3s, box-shadow .6s;

    &:empty {
        display: none;
    }
}

.post-author {
    margin-top: calc(var(--space) / 2);
}
</style>
