<template>
    <Layout :show-logo="false">
        <div class="grid-container text-center">
            <h1 class="m-center text-center">About</h1>
        </div>
        <div class="grid-container text-center">
            <g-image alt="Author image" class="m-center" src="~/assets/images/home.jpg" width="180" height="180" blur="5" />
            <h3 class="m-center text-center">Muhammad Hizbullah</h3>
        </div>
        <div class="grid-container">
            <pre class="about" wrap>
    Hai, aku Muhammad Hizbullah.

    Aku hanyalah manusia 🧑‍ yang ingin membuat sebuah karya yang keren dan menyenangkan hari serta hati ❤️ orang-orang,
    tapi aku juga butuh money 💸 untuk keberlangsungan hidup 🤑.

    🔗 Kunjungi aku di dunia lain ya :
    1.  <g-link to="//linkedin.com/in/muhammad-hizbullah-736109168/">Linkedin</g-link>
    2.  <g-link to="//github.com/muh-hizbe">Github</g-link>
    3.  <g-link to="//twitter.com/muh__hizbullah">Twitter</g-link>
    4.  <g-link to="//instagram.com/muh__hizbullah">Instagram</g-link>
    5.  <g-link to="mailto:muh.saferagic@gmail.com">Email</g-link>
            </pre>
        </div>
    </Layout>
</template>

<script>
import Author from '@/components/Author.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Author,
    Navbar,
  },
  metaInfo() {
      return {
          title: 'About',
          meta: [
              { name: 'author', content: 'Muhammad Hizbullah' },
              { name: 'description', content: 'About me, please visit it' },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: 'https://hizbe.dev/about' },
              { property: 'og:title', content: 'About' },
              { property: 'og:description', content: 'About me, please visit it' },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:url', content: 'https://hizbe.dev/about' },
              { name: 'twitter:title', content: 'About' },
              { name: 'twitter:description', content: 'About me, please visit it' }
          ]
      }
  }
}
</script>

<style lang="scss">
.about{
    background-color: var(--bg-color);
    padding: 0;
}
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;
	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}
	&__intro {
		opacity: .8;
	}
	&__site-title {
		font-size: 1.5em;
	}
	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>