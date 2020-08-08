<template>
    <Layout :show-logo="false">
        <div class="grid-container text-center">
            <h1 class="m-center text-center">My Works</h1>
        </div>
        <div class="grid-container">
            <pre class="bg-none">
    Hai, aku Muhammad Hizbullah.

    Aku hanyalah manusia 🧑‍ yang ingin membuat sebuah karya yang keren dan menyenangkan hari serta hati ❤️ orang-orang.
            </pre>
        </div>
    </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import ArchieveCard from '~/components/ArchieveCard.vue'

export default {
  components: {
    ArchieveCard,
    Pager
  },
  metaInfo: {
    title: 'My works',
    meta: [
      { name: 'author', content: 'Muhammad Hizbullah' },
      { name: 'description', content: 'All link of my work that public will be added here.' },
    ]
  }
}
</script>