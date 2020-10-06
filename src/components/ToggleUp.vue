<template>
	<a class="arrow-up rounded-full inline-flex select-none" @click="toTop" id="to_top" v-show="visible" title="scroll to top window">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path class="w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
        <span class="arrow-up__span ml-2">
            Scroll Up
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
    background-color: transparent;
    border: 0;
    color: var(--text-toggle);
    background-color: var(--bg-toggle);
    box-shadow: var(--box-shadow);
    cursor: pointer;

    &:hover {
        opacity: .8
    }
    &:focus {
        outline: none;
    }
    &__span {
        color: var(--text-toggle);
        font-size: 25px;
    }
    svg{
        color: var(--text-toggle);
    }
}
</style>
