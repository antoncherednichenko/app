<template>
    <div class="settings">
        <StartButton @click.native="startGame" />
        <LevelPicker :options="levels" />
        <Counter />
    </div>
</template>

<script>
import StartButton from '@/components/StartButton.vue'
import LevelPicker from '@/components/LevelPicker.vue'
import Counter from '@/components/Counter.vue'

export default {
    components: {
        StartButton,
        LevelPicker,
        Counter
    },
    data: () => ({
        levels: ['Low', 'Medium', 'High']
    }),
    methods: {
        startGame() {
            this.$store.dispatch('nextRound')
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '../styles/vars'
    .settings
        font-size: 20px
        position: relative
        width: 400px
        display: flex
        padding: 15px 50px
        align-items: center
        justify-content: space-between
        @include card
</style>