<template>
  <!--All photos taken by Joce Johnson-->
        <!--Container with fluid images-->
        <div class="containerImages m-3">
            <div class="card m-3">
                <img src="css/images/card1.JPG" class="card-img-top img-fluid rounded" alt="field of red tulips">
                <div class="card-body">
                  <p class="card-text"><strong>Classic Red</strong><br> Our most popular tulip, the classic is the quintessential sign of spring.</p>
                  <!--Buy button with tooltip-->
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img src="css/images/card6.JPG" class="card-img-top img-fluid rounded" alt="white and yellow tulips">
                <div class="card-body">
                  <p class="card-text"><strong>Snow Top</strong><br> Can brighten up any room or corner of your garden.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img src="css/images/card5.JPG" class="card-img-top img-fluid rounded" alt="bright pink tulip">
                <div class="card-body">
                  <p class="card-text"><strong>Scarlett Letter</strong><br> This head-turner is great in a mixed bouquet for a vibrant pop of color.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img src="css/images/card4.JPG" class="card-img-top img-fluid rounded" alt="Peach colored tulip surrounded by purple tulips">
                <div class="card-body">
                  <p class="card-text"><strong>Peach Sunrise</strong><br>One of our rare varieties, this tulip only makes an appearance every few years.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img src="css/images/card3.JPG" class="card-img-top img-fluid rounded" alt="closed purple tulip">
                <div class="card-body">
                  <p class="card-text"><strong>Amethyst</strong><br>If you love a splash of purple, this one's for you.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>

              <div class="card m-3">
                <img src="css/images/card2.JPG" class="card-img-top img-fluid rounded" alt="yellow tulip with red edges">
                <div class="card-body">
                  <p class="card-text"><strong>Fire on the Mountain</strong><br> With petals that look like flames, this tulip is only for the bold.</p>
                  <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
                </div>
              </div>
        </div>


</template>

<script>
  export default {
  name: 'Images',
  data () {
    return {
      msg: 'Look at my pretty pictures'
    }
  }
}
</script>

<style>
  /* Your CSS goes here */
</style>