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
            <p class="card-text">Light, bright, easy to care for. Those are just a few of the many reasons people love having tulips in the homes and gardens. But why do they come to Tulip Moment? How about oustanding customer service, high quality flowers and bulbs, and easy-to-understand care options. And we do all of it at an affordable price. Whether you're a weathered gardener, just getting started, planting a full garden or looking for something to stick in a vase with water, we've got what you're looking for, and we're happy to ship anywhere in the continental U.S.</p>
            <p class="card-text">Want tulips for your house or garden? We have colors and shapes for every taste and budget.</p>
            <!--Add v-if and v-else to buttons-->
            <a href="/images" v-if="show" class="btn" data-toggle="tooltip" data-placement="right" title="See more tulips!">Buy tulips</a>
            <button v-else v-on:click="show = !show" class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="See more tulips!">Yes!</button>
          </div>
          <div class="grid-wrapper">
            <div class="row">
              <div class="column">

                <div class="zoom">
                  <img class="zoom-pic" src="/IMG_6033.jpg">
                </div>

                <div class="zoom">
                  <img class="zoom-pic"src="/IMG_6156.jpg">
                </div>

                <div class="zoom">
                  <img class="zoom-pic" src="/IMG_6170.jpg">
                </div>

              </div>
              <div class="column">
                <div class="zoom">
                  <img class="zoom-pic" src="/IMG_6194.jpg">
                </div>

                <div class="zoom">
                  <img class="zoom-pic"src="/IMG_6082.jpg">
                </div>

                <div class="zoom">
                  <img class="zoom-pic" src="/IMG_6249.jpg">
                </div>
              </div>
              <div class="column">

              <div class="zoom">
                  <img class="zoom-pic" src="/IMG_6246.jpg">
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
            <h5 class="card-title">Tulips in the news</h5>
            <div v-if="show">  
              <div class="api-container" v-if="items">
                <api
                  v-for="item of items"
                  :key="item.author"
                  :item="item"              
                /> 
                <a href="NewsAPI.org">Powered by News API</a> 
              </div>
            </div>
            <button v-else v-on:click="show = !show" class="btn btn-danger" data-toggle="tooltip" data-placement="right">What's new today?</button>
            <p>Get the latest news and trends on tulips around the world.</p>
          </div>
        </div>
      </div>
</template>

<script>
import api from '../pages/api.vue'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  components: {
    api
  },
  data (){
    return {
      show: false,
      loading: true,
      items: null,
      errorMessage: false
    }
  },
  mounted() {
    console.log("I'm mounted!")
    axios
      .get('https://newsapi.org/v2/everything?qInTitle=tulips&pageSize=3&sortBy=popularity&apiKey=ce4b66f1e64b4c748b3fc0ee457acb23', { params: { limit:1, size:"full" } } )
      .then(response => {
        console.log('There is a response here', response)
        this.items = response.data.articles
      })
      //.then ()
      .catch(err => {
        console.error('uh oh something is wrong', response)
        this.errorMessage = "oops we have an error"
      })
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

#quoteCard {
    width: 20rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 1rem;
}

@media screen and (max-width: 768px) {
  #quoteCard {
    display: none;
  }
}

#missionCard {
    width: 45rem;
    font-family: 'Roboto', sans-serif;
    margin: 1rem;
}

@media screen and (max-width: 1024px) {
  #missionCard {
    width: 50%;
  }
}

@media screen and (max-width: 768px) {
  #missionCard {
    width: 80%;
  }
}

@media screen and (max-width: 375px) {
  #missionCard {
    width: 80%;
  }
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
    max-width: 30%;
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
  transition: all 0.5s linear;
}
 
.zoom .zoom-pic:hover {
  width: 100%;
}

.card-header {
    color: #EFA885;
}

.card-title {
    color: #EFA885;
}

.btn {
  background-color: #FBDCCE;
  border-style: none;
  color: white;
}

#homeFeature {
    width: 18rem;
    height: 50%;
    font-family: 'Roboto', sans-serif;
    margin-top: 1rem;
}

@media screen and (max-width: 1374px) {
  #homeFeature {
    width: 55rem;
    margin: 1rem;
  }
}

button {
  margin-bottom: 1rem;
}

a {
  margin-bottom: 1rem;
}

.api-container {
  display: flex;
  justify-content: space-evenly;
}

@media screen and (min-width: 1378px) {
  .api-container {
    flex-direction: column;
  }
}

@media screen and (max-width: 789px) {
  .api-container {
    flex-flow: row wrap;
  }
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

</style>
