<template>
    <div class="wrapper" v-if="options.length">
        <button @click="toggleList" class="selected">{{currentLevel}}</button> 
        <ul v-click-outside="hideList" v-if="visible" class="select">
            <li v-for="(o, i) in options" :key="i">
                <button @click="choseLevel(o)">{{o}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    props: {
        options: {
            type: Array,
            default: []
        }
    },
    data: () => ({
        visible: false
    }),
    computed: {
        currentLevel() { return this.$store.state.currentLevel }
    },
    methods: {
        toggleList() { this.visible = !this.visible },
        hideList() { this.visible = false },
        choseLevel(level) {
            this.visible = false
            this.$store.dispatch('dispatchObjectValue', { path: 'currentLevel', value: level })
        }
    },
    mounted() {
        this.popupItem = this.$el
    },
    directives: {
        ClickOutside
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        font-size: 20px
        button
            position: relative
        .select
            position: absolute
            background: #fff
            box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1)
            width: 100px
            li
                width: 100%
                button
                    width: 100%
                    padding: 10px
                    &:hover
                        background: #ddddde
                        opacity: 0.8
</style>