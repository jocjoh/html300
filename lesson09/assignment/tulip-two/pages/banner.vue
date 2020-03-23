<template>

<!--Markup for header component-->
<div class="banner" id="banner">
  <img class="img-fluid" src="../static/header2.jpg" alt="red tulips surrounded by purple tulips">
  <slot name="firstLine">This is my default value</slot>
  <slot name="secondLine">This is my other default value</slot>
  <p>{{ message | changeLettercase }}</p>
</div>

</template>

<script>
//Javascript for filter
export default {
    name: 'banner',
    data () {
      return {
      message: 'visit us for lots of pretty flowers',
      }
    },
    filters: {
      changeLettercase: function(value) {
        return value.toUpperCase();
      }
    }
}

</script>

<style scoped>

</style>