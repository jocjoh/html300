<template>
  <body>
  <!--All photos taken by Joce Johnson-->
        <!--Container with fluid images-->
        <div class="containerImages m-3">

              <div class="card m-3">
                <img v-for="image in images" :src="image.url" :alt="image.alt" class="card-img-top img-fluid rounded" />
                <div class="card-body">
                  <p class="card-text"><strong>Classic Red</strong><br> Our most popular tulip, the classic is the quintessential sign of spring.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img v-for="image in images" :src="image.url" :alt="image.alt" class="card-img-top img-fluid rounded" />
                <div class="card-body">
                  <p class="card-text"><strong>Snow Top</strong><br> Can brighten up any room or corner of your garden.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img v-for="image in images" :src="image.url" :alt="image.alt" class="card-img-top img-fluid rounded" />
                <div class="card-body">
                  <p class="card-text"><strong>Scarlett Letter</strong><br> This head-turner is great in a mixed bouquet for a vibrant pop of color.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img v-for="image in images" :src="images.url" :alt="images.alt" class="card-img-top img-fluid rounded" />
                <div class="card-body">
                  <p class="card-text"><strong>Peach Sunrise</strong><br>One of our rare varieties, this tulip only makes an appearance every few years.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img v-for="image in images" :src="image.url" :alt="image.alt" class="card-img-top img-fluid rounded" />
                <div class="card-body">
                  <p class="card-text"><strong>Amethyst</strong><br>If you love a splash of purple, this one's for you.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img v-for="image in images" :src="image.url" :alt="image.alt" class="card-img-top img-fluid rounded" />
                <div class="card-body">
                  <p class="card-text"><strong>Fire on the Mountain</strong><br> With petals that look like flames, this tulip is only for the bold.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>
        </div>

        <div style="clear: both;"></div>
  </body>


</template>

<script>
  export default {
  name: 'Images',
  data () {
    return {
      images: [
        { url: '../assets/card1.JPG', alt: 'field of red tulips' },
        { url: '../assets/card2.JPG', alt: 'white and yellow tulips' },
        { url: '../assets/card3.JPG', alt: 'Peach colored tulip surrounded by purple tulips' },
        { url: '../assets/card4.JPG', alt: 'closed purple tulip' },
        { url: '../assets/card5.JPG', alt: 'bright pink tulip' },
        { url: '../assets/card6.JPG', alt: 'yellow tulip with red edges' },
      ] 
    }
  }
}
</script>

<style>
  /* Your CSS goes here */
</style>