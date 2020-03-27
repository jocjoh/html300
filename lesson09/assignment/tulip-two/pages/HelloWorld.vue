<template>
      <!--Quote card-->
      <div class="helloBox">
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

          <div id="flowers" class="carousel slide" data-ride="carousel">

              <ol class="carousel-indicators">
                <li data-target="#flowers" data-slide-to="0"></li>
                <li data-target="#flowers" data-slide-to="1" class="active"></li>
                <li data-target="#flowers" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item">
                  <img class="d-block w-100" src="/card1.JPG" alt="First slide">
                </div>
                <div class="carousel-item active">
                  <img class="d-block w-100" src="/card2.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="/card3.jpg" alt="Third slide">
                </div>
              </div>

              <a class="carousel-control-prev" href="#flowers" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#flowers" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
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
