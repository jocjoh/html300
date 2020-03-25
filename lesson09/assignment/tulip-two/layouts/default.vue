<template>
 <!--Add header and footer to app.vue-->
  <div id="app">

    <header>
      <!--Implement banner component-->
      <banner>
        <h1 slot="firstLine">Tulip Fever</h1>
        <h3 slot="secondLine">The icon of spring</h3>
      </banner>
    </header>

    <!--Bootstrap responsive navbar with router-->
    <nav class="navbar navbar-expand-lg m-3">
      <a class="navbar-brand" href="#"><strong>Welcome</strong></a>
      <nav class="navbar-nav">
        <nuxt-link to="/HelloWorld" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></nuxt-link>
        <nuxt-link to="/images" class="nav-item nav-link">Varieties</nuxt-link>
        <nuxt-link to="/grid" class="nav-item nav-link">Hours</nuxt-link>
        <nuxt-link to="/accordion" class="nav-item nav-link">FAQs</nuxt-link>
      </nav>
    </nav>

    <!--Where each component content will render-->
    <nuxt />
    
    <div class="end"></div>
    <!--Basic footer-->
    <footer class="footer">
        <nav>
          The Tulip Moment<br>
          2000 Spring Lane, Salem, OR 97302<br>
          hello@tulipmoment.com
        </nav>
    </footer>
  </div>
</template>

<script>
import banner from '../pages/banner.vue';

export default {
  name: 'App',
  components: {
    banner
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.navbar {
  background-color: #F6F1EE;
  font-family: 'Roboto', sans-serif;
  border-style: solid;
  border-size: 0.3rem;
  border-color: #FBDCCE;
}

.navbar a {
  color: #EFA885;
}

.footer {
    color: black;
    background-color: #F6F1EE;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
}

.end {
  clear: both;
}
</style>
