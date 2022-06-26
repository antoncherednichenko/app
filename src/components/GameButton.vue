<template>
    <button 
        :class="{
            red: color === 'red', 
            green: color === 'green', 
            perple: color === 'perple', 
            yellow: color === 'yellow', 
            active: active
        }"
        class="game-button"
    ></button>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'green'
        },
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '../styles/vars.sass'
    .game-button
        width: 50%
        background: #ddddde
        opacity: 0.5
        height: 180px
        &:hover
            opacity: 0.4
        &:active
            opacity: 0.6
    .green
        background: $main-green
    .red
        background: $main-red
    .perple
        background: $main-perple
    .yellow
        background: $main-yellow
    .active
        opacity: 1
</style>