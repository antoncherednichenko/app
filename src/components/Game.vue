<template>
    <div class="game">
        <GameButton
            v-for="(c, i) in colors"
            :key="i"
            :color="c.color"
            :active="c.active"
            @click.native="checkColor(i)" 
        />
    </div>
</template>

<script>
import GameButton from '@/components/GameButton.vue'
export default {
    components: {
        GameButton
    },
    computed: {
        colors() { return this.$store.state.colors }
    },
    methods: {
        checkColor(index) {
            this.$store.dispatch('checkColor', index)
        }
    }
}
</script>

<style lang="sass" scoped>
    .game
        width: 360px
        height: 360px
        border-radius: 50%
        display: flex
        flex-wrap: wrap
        overflow: hidden
</style>