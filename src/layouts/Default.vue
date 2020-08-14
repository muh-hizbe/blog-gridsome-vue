<template>
  <div id="app">

        <!-- <div class="header__left">
            <Logo v-if="showLogo" /> 
        </div> -->

        <header class="header" id="header">
            <Navbar />
        </header>

        <transition name="fade" appear>
            <main class="main">
                <slot/>
            </main>
        </transition>    

        <footer class="footer">
        <span class="footer__copyright">&copy; {{ new Date().getFullYear() }} </span>
        <span class="footer__links">Built with 💜 and 🎨</span>
        </footer>

        <div class="toggle__left">
            <ToggleUp />
        </div>

        <div class="toggle__right">        
            <ToggleTheme />
        </div>

  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Navbar from '@/components/Navbar.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'
import ToggleUp from '@/components/ToggleUp.vue'

export default {
    props: {
        showLogo: { default: true }
    },
    components: {
        Logo,
        Navbar,
        ToggleTheme,
        ToggleUp,
    }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

.header{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 11;
}

.header__left{
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    min-height: calc(var(--header-height));
    padding: 0 calc(var(--space) / 2);
    top:0;
    z-index: 10;

    @media screen and (min-width: 1300px) {
        min-height: var(--header-height);
        padding: 0 calc(var(--space) / 2);
        width: 100%;
    }
}    

.toggle__left {
    position: fixed;
    right: 15px;
    bottom: 80px;
    z-index: 10;
}

.toggle__right {
    position: fixed;
    bottom: 10px;
    right: 15px;
    z-index: 101;
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
