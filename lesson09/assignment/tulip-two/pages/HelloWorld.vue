<template>
      
      <div class="helloBox">
        <!--Quote card-->
        <div class="testimonials">
          <div class="card float-left" id="quoteCard">
            <!--Card header-->
            <div class="card-header">
              Variety
            </div>
            <!--Card body-->
            <div class="card-body">
              <blockquote class="blockquote">
                <p>As an avid gardener, I can say without a doubt that Tulip Fever offers the largest selection of bulbs and fresh cut flowers in the Pacific Northwest.</p>
                <footer class="blockquote-footer">John Smith <cite title="Source Title">Salem, Ore</cite></footer>
              </blockquote>
            </div>
          </div>

          <br />

          <div class="card float-left" id="quoteCard">
            <!--Card header-->
            <div class="card-header">
              Great service
            </div>
            <!--Card body-->
            <div class="card-body">
              <blockquote class="blockquote">
                <p>I came to Tulip Moment with no experience and they helped me build a garden I'm proud of.</p>
                <footer class="blockquote-footer">Maria Johnson <cite title="Source Title">Brooks, Ore</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>

        <!--Mission card-->
        <div class="card" id="missionCard">
          <div class="card-body">
            <h5 class="card-title">What we do</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div class="grid-wrapper">
            <div class="row">
              <div class="column">

                <div class="zoom">
                  <img class="zoom-pic" src="/card1.JPG">
                </div>

                <div class="zoom">
                  <img class="zoom-pic"src="/card2.jpg">
                </div>

                <div class="zoom">
                  <img class="zoom-pic" src="/card3.jpg">
                </div>

              </div>
              <div class="column">
                <div class="zoom">
                  <img class="zoom-pic" src="/card4.jpg">
                </div>

                <div class="zoom">
                  <img class="zoom-pic"src="/card5.jpg">
                </div>

                <div class="zoom">
                  <img class="zoom-pic" src="/card6.jpg">
                </div>
              </div>
              <div class="column">

              <div class="zoom">
                  <img class="zoom-pic" src="/IMG_6082.jpg">
                </div>

                <div class="zoom">
                  <img class="zoom-pic"src="/IMG_6063.jpg">
                </div>

                <div class="zoom">
                  <img class="zoom-pic" src="/IMG_6120.jpg">
                </div>
                
              </div>
            </div>
          </div>

        </div>

        <!--Feature card-->
        <div class="card float-right" id="homeFeature">
          <div class="card-body">
            <h5 class="card-title">Quality above the rest</h5>
            <p class="card-text">Want tulips for your house or garden? We have colors and shapes for every taste and budget.</p>
            <!--Add v-if and v-else to buttons-->
            <a href="/images" v-if="show" class="btn" data-toggle="tooltip" data-placement="right" title="See more tulips!">Buy tulips</a>
            <button v-else v-on:click="show = !show" class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="See more tulips!">Yes!</button>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.helloBox {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: center;
}

.testimonials {
    display: flex;
    flex-flow: row wrap;
    width: 20rem;
    font-family: 'Roboto', sans-serif;
}

#missionCard {
    width: 45rem;
    font-family: 'Roboto', sans-serif;
    margin: 1rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  justify-content: space-evenly;
  align-content: center;
}

.column {
  flex: 30%;
  max-width: 30%;
  padding: 0.3rem;
  align-content: center;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}

.zoom {
  text-align: center;
}

.zoom .zoom-pic {
  width: 80%;
 
  -webkit-transition: all 1s ease;
     -moz-transition: all 1s ease;
       -o-transition: all 1s ease;
      -ms-transition: all 1s ease;
          transition: all 1s ease;
}
 
.zoom .zoom-pic:hover {
  width: 100%;
}

#quoteCard {
    width: 20rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 1rem;
}

.card-header {
    color: #EFA885;
}

.card-title {
    color: #EFA885;
}

#homeFeature {
    width: 18rem;
    height: 25rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 1rem;
}

.btn {
  background-color: #FBDCCE;
  border-style: none;

}

#flowers {
    margin-top: 2rem;
    width: 60%;
    border-style: solid;
    border-width: 0px;
    border-radius: rounded;
    margin-left: 18%;
    margin-bottom: 2rem;
}

.carousel-inner img {
      width: 100%;
      height: 100%;
  }

</style>
