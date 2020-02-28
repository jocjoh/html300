<template>
  <body>
  <!--All photos taken by Joce Johnson-->
    <div class="container">
        
        <!--Use v-for to render loop through images-->
        <div v-for="image in images" class="card">
            <img :src="image.src" :alt="image.alt" class="card-img-top img-fluid rounded">
            <div class="caption"> {{ image.caption }} </div>
            <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
        </div>
    </div>
        

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
      { src: card1, alt: 'field of red tulips', caption: 'Classic Red: Our most popular tulip, this classic is the quintessential sign of spring.' },
      { src: card2, alt: 'white and yellow tulips', caption: 'Fire on the Mountain: With petals that look like flames, this tulip is only for the bold.' },
      { src: card3, alt: 'Peach colored tulip surrounded by purple tulips', caption: 'Amethyst: If you love a splash of purple, this one is for you.' },
      { src: card4, alt: 'closed purple tulip', caption: 'Peach Sunrise: One of our rare varieties, this tulip only makes an appearance every few years.' },
      { src: card5, alt: 'bright pink tulip', caption: 'Scarlett Letter: This head-turner is great in a mixed bouquet for a vibrant pop of color.' },
      { src: card6, alt: 'yellow tulip with red edges', caption: 'Snow Top: Can brighten up any room or corner of your garden.' }
    ]
  }
 }
}

</script>

<style scoped>
.card {
  width: 30rem;
  margin-left: 20rem;
  margin-bottom: 2rem;
}

.caption {
  padding: 1rem;
}

</style>