<template>
    <!--Tulip photos by Joce Johnson-->
    <!--Markup for photos component-->
        <div class="card">
            <img :src="image.src" :alt="image.alt" id="border" class="frame card-img-top img-fluid rounded">
            <div class="caption"> {{ image.caption }} </div>
            <a href="#" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="Click here to buy">Buy</a>
        </div>
</template>

<script>
//Prop validation for component
export default {
    name: 'photos',
    props: {
        image: Object,
            default: function () {
                return {}
            }
        
    }
}

</script>

<style scoped>
.card {
  width: 30rem;
  margin: 0.5rem;
}

.frame {
  padding: 0.3rem;
  background-color: #e4cece;
}

.caption {
  padding: 1rem;
}
</style>