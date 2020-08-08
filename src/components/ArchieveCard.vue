<template>
    <tr class="archieves-row">
        <td class="col-date"><span class="date">📅 {{ post.date }}</span></td>
        <td class="col-title"><g-link class="" :to="post.path">{{ post.title }}</g-link></td>
        <td class="col-title"><PostTags :post="post" /></td>
    </tr>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.archieves-row{
    padding: 5px;
}
.col{
    &-title{
        padding-left: 20px;
    }
}
</style>
