<template>

<div class="banner">
  <img class="img-fluid" src="../assets/header2.jpg" alt="red tulips surrounded by purple tulips">
  <slot name="firstLine">This is my default value</slot>
  <slot name="secondLine">This is my other default value</slot>
</div>

</template>

<script>
export default {
    name: 'banner',
    data () {
        return {
            msg: 'Welcome!'
        }
    },
}

</script>

<style scoped>

</style>