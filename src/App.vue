<template>
  <div class="main">
    <Game />
    <Settings />
    <PopUp v-if="isPopUp" />
  </div>
</template>

<script>
import Game from '@/components/Game.vue'
import Settings from '@/components/Settings.vue'
import PopUp from '@/components/PopUp.vue'

export default {
  name: "App",
  components: {
    Game,
    Settings,
    PopUp
  },
  computed: {
    isPopUp() { return this.$store.state.isPopUp }
  }
};
</script>

<style lang="sass">
  @use './styles/reset'
  .main
    width: 100vw
    max-width: 1144px
    margin: 0 auto
    height: 100vh
    display: flex
    justify-content: space-around
    align-items: center
    font-family: 'Roboto', sans-serif !important
    overflow: hidden
</style>
