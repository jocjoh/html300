<template>
  <body>

  <!--All photos taken by Joce Johnson-->
    <div class="container">
        <!--Use v-for to render loop through images-->
        <div v-for="image in images" class="card">
            <!--Apply on-click border around image-->
            <img :src="image.src" :alt="image.alt" class="card-img-top img-fluid rounded">
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
                return { message: 'hi there!' }
            }
        }
    }
}

const showHide = {
    data() {
        return {
            isHidden: false
        }
    },
    methods: {
        toggleShowHide() {
            this.isHidden = !this.isHidden;
        }
    }
}

</script>

<style scoped>
img {
    border-style: solid;
    border-width: 0.2rem;
    border-color: pink;
}
.card {
  width: 30rem;
  margin-left: 20rem;
  margin-bottom: 2rem;
}

.caption {
  padding: 1rem;
}
</style>