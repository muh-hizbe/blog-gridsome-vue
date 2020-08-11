// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
    if (isClient && process.env.NODE_ENV === 'production') {
      require('./registerServiceWorker')
    }

    head.link.push({
        rel: 'manifest',
        href: '../manifest.json'
    })

    head.link.push({
        rel: 'canonical',
        href: 'https://hizbe-blog.netlify.app'
    })

    head.link.push({
        rel: 'apple-touch-icon',
        href: 'maskable_icon.png'
    })

    head.link.push({
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        integrity: 'sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==',
        crossorigin: 'anonymous'
    })

    head.link.push({
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css'
    })

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Gamja+Flowe|Pacifico'
    })

    head.meta.push({
        name: 'theme-color',
        content: '#213f9a'
    })

    head.meta.push({
        name: 'keywords',
        content: 'Hizbe,Blog,Hizbullah,Hizbu,JavaScript'
    })

    head.meta.push({
        name: 'description',
        content: 'A personal blog by Hizbe'
    })

    head.meta.push({
        name: 'author',
        content: 'Muhammad Hizbullah'
    })

    head.meta.push({
        name: 'author',
        content: 'width=device-width, initial-scale=1.0'
    })

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}