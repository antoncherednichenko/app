<template>
    <div class="bg">
        <div class="holder">
            <transition name="bounce">
                <div v-show="isShow" class="popup">
                    <h2 class="popup__title">Awesome!</h2>
                    <span class="popup__message">You got <span class="points">{{score}}</span> points!</span>
                    <button @click="close" class="popup__btn">COOL!</button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        score() { return this.$store.state.score }
    },
    data: () => ({
        isShow: false
    }),
    methods: {
        close() {
            this.$store.dispatch('dispatchObjectValue', { path: 'isPopUp', value: false })
            this.$store.dispatch('dispatchObjectValue', { path: 'score', value: 0 })
        }
    }, 
    mounted() {
        this.$nextTick(() => {
            this.isShow = true
        })
    }
}
</script>

<style lang="sass" scoped>
@import '../styles/vars'

.holder
    width: 100%
    max-width: 500px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 100
.bg
    width: 100vw
    height: 100vh
    position: absolute
    &:before
        content: ''
        position: absolute
        width: 100vw
        height: 100vh
        background: $main-grey
        opacity: 0.5
        z-index: 1
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
.popup
    padding: 15px
    background: #fff
    display: flex
    flex-direction: column
    gap: 15px
    align-items: center
    font-size: 24px
    @include card
    transition: transform 0.5s
    .points
        font-weight: 500
        color: $main-green
    &__btn
       background: $main-yellow
       padding: 10px
       border-radius: 4px
       font-weight: 500
       transition: transform 0.5s
       color: #fff
       &:hover
        transform: scale(1.1)

.bounce-enter-active
  animation: bounce-in .5s
.bounce-leave-active
  animation: bounce-in .5s reverse
@keyframes bounce-in 
  0% 
    transform: scale(0)
  50% 
    transform: scale(1.5)
  100%
    transform: scale(1)
</style>