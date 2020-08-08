<template>
    <Layout :show-logo="false">
        <div class="grid-container text-center">
            <h1 class="m-center text-center">About</h1>
        </div>
        <div class="grid-container">
            <pre class="about" wrap>
    Hai, aku Muhammad Hizbullah.

    Aku hanyalah manusia 🧑‍ yang ingin membuat sebuah karya yang keren dan menyenangkan hari serta hati ❤️ orang-orang,
    tapi aku juga butuh money 💸 untuk keberlangsungan hidup 🤑.

    🔗 Kunjungi aku di dunia lain ya :
    1. <g-link to="//linkedin.com/in/muhammad-hizbullah-736109168/">LinkedIn</g-link>
    2. <g-link to="//github.com/muh-hizbe">Github</g-link>
    3. <g-link to="//twitter.com/muh__hizbullah">Twitter</g-link>
    3. <g-link to="//instagram.com/muh__hizbullah">Instagram</g-link>
            </pre>
        </div>
    </Layout>
</template>

<script>
import Author from '~/components/Author.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Author,
    Navbar,
  },
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="scss">
.about{
    background-color: var(--bg-color)
}
</style>