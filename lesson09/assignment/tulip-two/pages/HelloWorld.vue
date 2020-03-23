<template>
    <body>

      <!--Quote card-->
      <div class="container">
        <div class="card m-3 float-left" id="quoteCard">
          <!--Card header-->
          <div class="card-header">
            Testimonial
          </div>
          <!--Card body-->
          <div class="card-body">
            <blockquote class="blockquote">
              <p>As an avid gardener, I can say without a doubt that Tulip Fever offers the largest selection of bulbs and fresh cut flowers in the Pacific Northwest.</p>
              <footer class="blockquote-footer">John Smith <cite title="Source Title">Salem, Ore</cite></footer>
            </blockquote>
          </div>
        </div>

          <!--Feature card-->
          <div class="card m-3 float-right" id="homeFeature">
            <div class="card-body">
              <h5 class="card-title">Quality above the rest</h5>
              <p class="card-text">Want tulips for your house or garden? We have colors and shapes for every taste and budget.</p>
              <!--Add v-if and v-else to buttons-->
              <a href="/images" v-if="show" class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="See more tulips!">Buy tulips</a>
              <button v-else v-on:click="show = !show" class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="See more tulips!">Yes!</button>
            </div>
          </div>

        </div>
        
    </body>

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

</style>
