<template>
   <div class="post-meta">
        <strong>
            {{ post.date }} |
            <template v-if="post.timeToRead">
                {{ post.timeToRead }} min read.
            </template>
        </strong>
    </div>    
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: 1;
}
</style>