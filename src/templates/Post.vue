<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text text-4xl">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />

      <hr class="my-3">

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image  alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
        <Gitalk :config={id:$page.post.id} />
    </div>
    
  </Layout>
</template>

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
                { name: 'description', content: this.$page.post.description },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: `https://hizbe.dev${this.$page.post.path}` },
                { property: 'og:title', content: this.$page.post.title },
                { property: 'og:description', content: this.$page.post.description },
                { property: 'og:image', content: this.$page.post.cover_image },
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:url', content: `https://hizbe.dev${this.$page.post.path}` },
                { name: 'twitter:title', content: this.$page.post.title },
                { name: 'twitter:description', content: this.$page.post.description },
                { name: 'twitter:image', content: this.$page.post.cover_image },
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
    &__text {
        font-family: 'Bebas Neue', cursive;
    };
}

.post {

    font-family: 'Montserrat', sans-serif;
    &__header {
        font-family: 'Bebas Neue', cursive;
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
        font-family: 'Segoe UI', cursive;
        width: calc(100% + var(--space) * 2);
        margin-left: calc(var(--space) * -1);

        h2:first-child {
            // font-family: 'Bebas Neue', cursive;
            margin-top: 0;
        }

        p {
            font-family: 'Segoe UI';
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
