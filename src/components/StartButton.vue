<template>
    <button :class="{disabled: inGame}" :disabled="inGame" class="start-button">Start</button>
</template>

<script>
export default {
    computed: {
        inGame() { return this.$store.state.inGame }
    }
}
</script>

<style lang="sass" scoped>
    @import '../styles/vars.sass'

    .start-button
        width: 100px
        text-align: center
        text-transform: uppercase
        padding: 10px 15px
        background: $main-green
        border-radius: 4px
        color: #fff
        font-weight: 700
        transition: filter 0.5s
        &:hover
            filter: hue-rotate(180deg)
    .disabled
        background: $main-grey
        cursor: default
        &:hover
            filter: hue-rotate(0)
</style>