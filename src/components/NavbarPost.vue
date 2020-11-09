<template>
	<div class="grid-container navbar" :class="{ 'navbar--hidden' : !showHeader }">
        <div class="justify-between">
            <div class="nav-left">
                <a @click="$router.go(-1)" class="cursor-pointer">&#8617;</a>
            </div>
            <div class="nav-right">
                <g-link to="/">Home</g-link> |
                <g-link to="/about">About</g-link> |
                <g-link to="/archives">Archives</g-link>
                <!-- <g-link to="/my-works">My works</g-link> -->
            </div>
        </div>
    </div>
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
            showHeader: true,
            lastScrollPosition: 0
        }
    },
    mounted () {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll () {
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition
        }
    }
}
</script>

<style lang="scss">
.navbar{    
    font-family: 'Bebas Neue', cursive;
    font-size: 25px;
    background-color: var(--bg-color);
    color: var(--title-color);
    a {
      color: var(--title-color);  
      text-decoration: none;
    }
}

.navbar--hidden{
    box-shadow: var(--box-shadow);
    transform: translate3d(0, -100%, 0);
}
</style>
