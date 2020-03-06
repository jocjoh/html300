<template>
<!--Add header and footer to app.vue-->
  <div id="app">
    <!--Header with responsive image-->
    <header>
      <img class="img-fluid" src="./assets/header2.jpg" alt="red tulips surrounded by purple tulips">
    </header>

    <!--Bootstrap responsive navbar-->
    <nav class="navbar navbar-expand-lg navbar-light m-3">
      <a class="navbar-brand text-danger" href="#"><strong>Tulip Fever</strong></a>
      <nav class="navbar-nav">
        <router-link to="/" class="nav-item nav-link text-danger active">Home <span class="sr-only">(current)</span></router-link>
        <router-link to="/images" class="nav-item nav-link text-danger">Images</router-link>
        <router-link to="/grid" class="nav-item nav-link text-danger">Grid</router-link>
        <router-link to="/accordion" class="nav-item nav-link text-danger">Accordion</router-link>
      </nav>
    </nav>
    
    <!--Where each component content will render-->
    <router-view />
    
    <div class="end"></div>
    <!--Basic footer-->
    <footer class="footer bg-light">
        <nav>
          Tulip Fever<br>
          2000 Spring Lane, Salem, OR 97302<br>
          tulips@gmail.com
        </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
<!--Styles to apply to every component-->
.navbar {
    background-color: #e4cece;
}

#quoteCard {
    width: 45rem;
}

#homeFeature {
    width: 18rem;
}

.footer {
    color: black;
    background-color: #ffe6ff;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
}

.containerImages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.end {
  clear: both;
}

</style>
