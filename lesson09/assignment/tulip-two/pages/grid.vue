<template>
<body>
  <div>
    <div class="headline">
      <p>Visit us year-round to see what new and rare varieties are available.</p>
    </div>

        <!--Boostrap grid responsive to xs, small, medium, large, xl sizes-->
        <!--Use v-for to loop populate grid-->
        <div v-for="item in items" class="container">
            <div class="row">
              <div class="d-flex col-xs-8 col-sm-11 col-md-11 col-lg-12 col-xl-12 p-5">
                <div class="flex-fill m-2" id="season">{{ item.season }}</div>
                <div class="flex-fill m-2">{{ item.months }}</div>
                <div class="flex-fill m-2">{{ item.hours }}</div>
              </div>
            </div>
        </div>
  </div>
</body>
        
</template>

<script>
  export default {
  name: 'Grid',
  data () {
    return {
      items: [
        { season: 'Spring:', months: 'March 1-May 31', hours: 'Hours: Everyday, 10 a.m.-7 p.m.' },
        { season: 'Summer:', months: 'June 1-Aug. 31', hours: 'Hours: Everyday, 8 a.m.-9 p.m.' },
        { season: 'Fall:', months: 'Sep. 1-Nov. 30', hours: 'Hours: W-Sun, 10 a.m.-7 p.m. (Closed Monday & Tuesday)' },
        { season: 'Winter', months: 'Dec. 1-Feb. 28', hours: 'Hours: W-Sun, noon-7 p.m. (Closed Monday & Tuesday)' },
      ],
    }
  }
}
</script>

<style>

.headline {
  margin-left: 15%;
  margin-top: 3%;
  margin-bottom: 3%;
  font-family: 'Roboto', sans-serif;
}

.container {
  background-color: #DFBBB6;
  font-family: 'Roboto', sans-serif;
  color: white;
}

.d-flex {
  border-style: solid;
  border-color: white;
}

#season {
  font-size: 2rem;
  font-family: 'Lobster', cursive;

}
  
</style>