<template>
    <!--Tulip photos by Joce Johnson-->
    <!--Markup for photos component-->
        <div class="card">
          <div class="cover">
            <img :src="image.src" :alt="image.alt" id="border" class="frame card-img-top img-fluid rounded">
            <div class="overlay">
              <div class="text"> {{ image.name }} </div>
            </div>
          </div>
          <div class="caption"> {{ image.caption }} </div>
          <a href="#" class="btn btn-outline-light">Buy</a>
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
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.card {
  width: 30rem;
  margin: 0.5rem;
}

.frame {
  padding: 0.3rem;
  background-color: #DFBBB6;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72.5%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #DFBBB6;
}

.cover:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 3rem;
  font-family: 'Lobster', cursive;  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.caption {
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
}

.btn {
  font-family: 'Roboto', sans-serif;
  color: #EFA885;
  background-color: #F6E3C4 !important;
}
</style>