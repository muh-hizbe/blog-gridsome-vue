<template>
	<a class="arrow-up" @click="toTop" id="to_top" v-show="visible" title="go to top">
	  <span class="arrow-up__span">
	    scroll to top
	  </span>
	</a>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    data () {
        return {
            visible: false
        }
    },
    methods: {
        toTop: function () {
            this.intervalId = setInterval(() => {
                if (window.pageYOffset === 0) {
                    clearInterval(this.intervalId)
                }
                window.scroll(0, window.pageYOffset - 50)
            }, 5)
        },
        scrollListener: function (e) {
            this.visible = window.scrollY > 150
        }
    },
    mounted: function () {
        window.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.scrollListener)
    }
}
</script>

<style lang="scss">
.arrow-up {
    text-decoration: none;
    padding: 8px 15px;  
    border: 0;
    border-radius: 0.5rem;
    color: var(--link-color);
    background-color: var(--body-color);
    opacity: 0.8;
    box-shadow: var(--box-shadow);
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
    &:focus {
        outline: none;
    }
    &__span {
        font-size: 25px;
    }
}
</style>
