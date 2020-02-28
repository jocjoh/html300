<template>
  <body>
  <!--All photos taken by Joce Johnson-->
  <!--Container with fluid images-->

        <div v-for="image in images">
            <img :src="image.src" :caption="image.alt">
        </div>

        <div style="clear: both;"></div>
  </body>
</template>

<script>
var card1 = require('../assets/card1.jpg');
var card2 = require('../assets/card2.jpg');
var card3 = require('../assets/card3.jpg');
var card4 = require('../assets/card4.jpg');
var card5 = require('../assets/card5.jpg');
var card6 = require('../assets/card6.jpg')

  export default {
  name: 'Images',
  data () {
    return {
    images: [
      { src: card1, caption: 'field of red tulips' },
      { src: card2, caption: 'white and yellow tulips' },
      { src: card3, caption: 'Peach colored tulip surrounded by purple tulips' },
      { src: card4, caption: 'closed purple tulip' },
      { src: card5, caption: 'bright pink tulip' },
      { src: card6, caption: 'yellow tulip with red edges' }
    ]
  }
 }
}

</script>

<style scoped>

img {
  width: 40rem;
}

</style>