<template>
  <body>

    <!--All photos taken by Joce Johnson-->
    <!--Markup for photos component-->
    <div class="container">
        <div v-for="image in images" class="card">
            <div class="frame" id="border">
              <img :src="image.src" :alt="image.alt" class="card-img-top img-fluid rounded">
            </div>
            <div class="caption"> {{ image.caption }} </div>
            <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
        </div>
    </div>
        
  </body>
</template>

<script>
//Prop validation for component
export default {
    name: 'photos',
    props: {
        images: Object,
            default: function () {
                return {}
            }
        
    }
}

</script>

<style scoped>

.container {
  display: flex;
  flex-flow: row wrap;
}

.card {
  width: 30rem;
  margin: 0.3rem;
}

.frame {
  padding: 0.3rem;
  background-color: #e4cece;
}

.caption {
  padding: 1rem;
}
</style>