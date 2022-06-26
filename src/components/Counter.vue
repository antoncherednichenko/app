<template> 
    <div class="counter">
        <span><b>Round:</b> {{round}}</span>
    </div>
</template>

<script>
export default {
    computed: {
        round() { return this.$store.state.round }
    }
}
</script>

<style lang="sass" scoped>

</style>