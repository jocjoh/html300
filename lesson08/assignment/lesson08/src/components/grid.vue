<template>
<body>
  <div>
    <div class="container">
      <p>Visit us year-round to see what new and rare varieties are available.</p>
    </div>

        <!--Boostrap grid responsive to xs, small, medium, large, xl sizes-->
        <!--Use v-for to loop populate grid-->
        <div v-for="item in items" class="container">
            <div class="row">
              <div class="d-flex col-xs-8 col-sm-11 col-md-11 col-lg-12 col-xl-12 p-5" style="background-color: #c7deec;">
                <div class="flex-fill m-2">{{ item.season }}</div>
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
  /* Your CSS goes here */
</style>