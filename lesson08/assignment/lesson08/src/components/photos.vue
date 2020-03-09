<template>
  <body>

  <!--All photos taken by Joce Johnson-->
    <div class="container">
        <!--Use v-for to render loop through images-->
        <div v-for="image in images" class="card">
            <div class="border" id="border">
            <img id="img" :src="image.src" :alt="image.alt" class="card-img-top img-fluid rounded">
            </div>
            <div class="caption"> {{ image.caption }} </div>
            <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
        </div>
    </div>
        
  </body>
</template>

<script>


export default {
    name: 'photos',
    props: {
        images: {
            type: Array,
            default: function () {
                return []
            }
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

.border {
  padding: 0.3rem;
  background-color: pink;
}

.caption {
  padding: 1rem;
}
</style>