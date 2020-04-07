<script>
import photos from './photos.vue';
import mixins from './mixins';

//Create variable paths for images
var card1 = require('../static/card1.JPG');
var card2 = require('../static/card2.jpg');
var card3 = require('../static/card3.jpg');
var card4 = require('../static/card4.jpg');
var card5 = require('../static/card5.jpg');
var card6 = require('../static/card6.jpg')

//Images object and data
export default {
name: 'Images',
mixins: [mixins],
  components: {
    photos
  },
  data () {
    return {
      images: [
        { src: card1, alt: 'field of red tulips', name: 'Classic Red', caption: 'Our most popular tulip, this classic is the quintessential sign of spring.' },
        { src: card2, alt: 'white and yellow tulips', name: 'Fire on the Mountain', caption: 'With petals that look like flames, this variety is only for the bold.' },
        { src: card3, alt: 'Peach colored tulip surrounded by purple tulips', name: 'Amethyst', caption: 'If you love a splash of purple, this one is perfect for your home or as a gift.' },
        { src: card4, alt: 'closed purple tulip', name: 'Peach Sunrise', caption: 'One of our rare varieties, this tulip only makes an appearance every few years.' },
        { src: card5, alt: 'bright pink tulip', name: 'Scarlett Letter', caption: 'This head-turner is great in a mixed bouquet for a vibrant pop of color.' },
        { src: card6, alt: 'yellow tulip with red edges', name: 'Snow Top', caption: 'This elegent and clean variety can brighten up any room or corner of your garden.' }
      ],
      title: 'Images'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'This page contains tulip images' }
      ]
    }
  }
}

</script>

<template>
<div id="app">

<!--Button mixin to remove border from image
<section v-if="images">
  <button v-if="myVal" @click="myMethod()">
    Remove pretty border
  </button>
</section>-->

<!--Place photos component on images page-->
  <section v-if="images" class="flex-container">
    <photos
      v-for="image in images"
      :image="image"
      :key="image.src"
      />
  </section>

</div>
</template>

<style scoped>
button {
  margin:3rem;
  color: #e4cece;
  border-style: solid;
  background-color: white;
  position: relative;
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: space-around;
  justify-content: center;
  margin: 3rem;
}

.caption {
  padding: 1rem;
}

</style>