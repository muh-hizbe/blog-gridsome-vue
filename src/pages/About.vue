<template>
    <Layout :show-logo="false">        
        <div class="flex container md:flex-row-reverse flex-wrap mx-auto sm:px-5 lg:px-32">

            <div class="sm:w-full lg:w-1/3 mx-auto lg:mx-0 mv-0">
                <pre class="bg-transparent rounded-none text-2xl mb-0 px-0 lg:pl-5 lg:border-l-4" wrap>
    <g-image alt="Author image" class="rounded-full w-30 h-30 mx-auto" src="~/assets/images/me.jpg" width="200" height="200" blur="5" />
    Connect with me :    
    1.  <g-link class="font-bold" to="//linkedin.com/in/muhammad-hizbullah-736109168/">LinkedIn</g-link>
    2.  <g-link class="font-bold" to="//github.com/muh-hizbe">Github</g-link>
    3.  <g-link class="font-bold" to="//twitter.com/muh__hizbullah">Twitter</g-link>
    4.  <g-link class="font-bold" to="//instagram.com/muh__hizbullah">Instagram</g-link>
    5.  <g-link class="font-bold" to="mailto:muh.saferagic@gmail.com">Email</g-link>
                </pre>
            </div>

            <div class="sm:w-full lg:w-2/3">            
                <pre class="bg-transparent text-2xl px-0 lg:pr-5" wrap>
    Hai, aku <strong class="font-bold">Muhammad Hizbullah</strong>.

    Aku hanyalah manusia 🧑‍ yang ingin membuat sebuah karya yang keren dan menyenangkan hari serta hati ❤️ orang-orang, tapi aku juga butuh money 💸 untuk keberlangsungan hidup 🤑.
    
    Aku seorang <i class="italic">Muslim</i>, tak suka merokok. Dunia pun tak kulupakan sebagai pijakan menuju alam yang abadi (Akherat), urusan Akherat itu harus. Karena Allah Maha Kuasa atas segala sesuatu.
                </pre>     
            </div>                

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
    display: grid;
    &__left {
        background-color: var(--bg-color);
        padding: 0;
        font-family: 'Quattrocento Sans',sans-serif;
        font-size: 1.15em;
        padding: 5px 20px;
    }
    &__right {
        background-color: var(--bg-color);
        padding: 0;
        font-family: 'Quattrocento Sans',sans-serif;
        font-size: 1.15em;
        padding: 5px 20px;
    }
}
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;
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