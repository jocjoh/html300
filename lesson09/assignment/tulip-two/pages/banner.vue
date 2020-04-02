<template>

<!--Markup for header component-->
<div class="banner" id="banner">
  <img class="img-fluid" src="../static/header2.jpg" alt="red tulips surrounded by purple tulips">
  <div class="logo-and-title">
    <!--PNG logo found on Create Commons site: https://www.pngrepo.com/svg/59571/bouquet-of-flowers-->
    <!--img class="bouquet-logo" src="../static/bouquet-of-flowers.png" alt="Tulips logo"-->
    <div class="title">The Tulip Moment</div>
    <div class="subtitle">Have spring year-round.</div>
  </div>
</div>

</template>

<script>
//Javascript for filter
export default {
    name: 'banner'
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');

.logo-and-title {
  position: absolute;
  top: 50%;
  left: 30%;
  color: #FBDCCE;
}

@media screen and (max-width: 1800px) {
  .logo-and-title {
    top: 20%;
  }
}

@media screen and (max-width: 1590px) {
  .logo-and-title {
    top: 20%;
    left: 10%;
  }
}

@media screen and (max-width: 1260px) {
  .logo-and-title {
    top: 20%;
    left: 5%;
  }
}

@media screen and (max-width: 1200px) {
  .logo-and-title {
    top: 20%;
    left: 5%;
  }
}

@media screen and (max-width: 800px) {
  .logo-and-title {
    top: 8%;
    left: 5%;
  }
}

.title {
  font-size: 10rem;
  font-family: 'Lobster', cursive;
}

@media screen and (max-width: 1200px) {
  .title {
    font-size: 8rem;
  }
}

@media screen and (max-width: 800px) {
  .title {
    font-size: 6rem;
  }
}

@media screen and (max-width: 420px) {
  .title {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 307px) {
  .title {
    font-size: 2rem;
  }
}

.subtitle {
  font-size: 2rem;
  margin-left: 10%;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
}

@media screen and (max-width: 800px) {
  .subtitle {
    display: none;
  }
}


</style>