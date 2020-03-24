<template>

<!--Markup for header component-->
<div class="banner" id="banner">
  <img class="img-fluid" src="../static/header2.jpg" alt="red tulips surrounded by purple tulips">
  <div class="logo-and-title">
    <!--PNG logo found on Create Commons site: https://www.pngrepo.com/svg/59571/bouquet-of-flowers-->
    <!--img class="bouquet-logo" src="../static/bouquet-of-flowers.png" alt="Tulips logo"-->
    <div class="title">The Tulip Moment</div>
    <div class="subtitle">An aura of spring, year-round.</div>
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
  width: 100%;
  color: #FBDCCE;
}

.title {
  font-size: 10rem;
  font-family: 'Lobster', cursive;
}

.subtitle {
  font-size: 2rem;
  margin-left: 10%;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
}

/*.bouquet-logo {
  width: 10rem;
  color: #FBDCCE;
}
*/

</style>