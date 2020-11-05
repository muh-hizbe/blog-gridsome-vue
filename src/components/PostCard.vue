<template>
  <div class="post-card content-box bg-cover" :class="{'post-card--has-poster' : post.poster}" style="padding: 0 !important" :style="{ 'background-image': 'url('+post.cover_image+')'}">
  <!-- <div class="post-card content-box bg-cover" :class="{'post-card--has-poster' : post.poster}" style="padding: 0 !important" :style="post.cover_image ? { 'background-image': 'url('+post.cover_image+')'} : {'background-image': 'url(https://images.unsplash.com/photo-1478279700560-e2e34f71ca02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)'}"> -->
    <!-- <div class="post-card__header">
      <g-image alt="Cover image" v-if="post.cover_image" class="post-card__image" :src="post.cover_image" />
    </div> -->
    <div class="bg-custom rounded-lg p-3">
        <div class="post-card__content">
            <h2 class="post-card__title" v-html="post.title" />
            <p class="post-card__description" v-html="post.description" />

            <PostMeta class="post-card__meta" :post="post" />
            <PostTags class="post-card__tags" :post="post" />

            <g-link class="post-card__link" :to="post.path">Link</g-link>
        </div>
    </div>
  </div>
</template>

<script>
import PostMeta from '@/components/PostMeta'
import PostTags from '@/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
    margin-bottom: calc(var(--space) * 1);
    position: relative;
    border-bottom: 3px solid var(--body-color);
    //   box-shadow: 0px 2px 5px 0px rgba(0, 52, 102, 0.11)!important;
    // box-shadow: var(--box-shadow);

    &__header {
        margin-left: calc(var(--space) * -1);
        margin-right: calc(var(--space) * -1);
        margin-bottom: calc(var(--space) / 2);
        margin-top: calc(var(--space) * -1);
        overflow: hidden;
        border-radius: var(--radius) var(--radius) 0 0;

        &:empty {
        display: none;
        }
    }

    &__image {
        min-width: 100%;
        max-height: 500px;
        object-fit: cover;
    }

    &__title {
        margin-top: 0;
        font-family: 'Oswald', sans-serif;
        font-size: 1.5em;
    }

    &:hover {
        transform: translateY(-2px);
        transition-delay: 3ms;
        box-shadow: 0px 2px 5px 0px rgba(12, 14, 15, 0.425)!important;
        background-color: var(--hover-card-body);
    }

    &__tags {
        z-index: 1;
        position: relative;
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.0;
        overflow: hidden;
        text-indent: -9999px;
        z-index: 0;
    }

    &__content {
        font-family: 'Quattrocento Sans',sans-serif;
    }

    &__description {
        margin: 20px auto;
        font-weight: 600;
    }
    .bg-custom {
        background-color: var(--bg-card-body);
        // opacity: .5;
    }
}
</style>
