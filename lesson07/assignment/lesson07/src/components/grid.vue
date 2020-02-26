<template>
<div>
  <div class="container">
            <p>Visit us year-round to see what new and rare varieties are available.</p>
  </div>

        <!--Boostrap grid responsive to xs, small, medium, large, xl sizes-->
        <div class="container">
            <div class="row">
              <div class="d-flex col-xs-8 col-sm-11 col-md-11 col-lg-12 col-xl-12 p-5" style="background-color: #c7deec;">
                <div class="flex-fill m-2"><strong>Spring:</strong></div>
                <div class="flex-fill m-2">March 1-May 31</div>
                <div class="flex-fill m-2">Hours: Everyday, 10 a.m.-7 p.m.</div>
              </div>

              <div class="d-flex col-xs-8 col-sm-11 col-md-11 col-lg-12 col-xl-12 p-5" style="background-color: white;">
                <div class="flex-fill m-2"><strong>Summer:</strong></div>
                <div class="flex-fill m-2">June 1-Aug. 31</div>
                <div class="flex-fill m-2">Hours: Everyday, 8 a.m.-9 p.m.</div>              
              </div>

              <div class="d-flex col-xs-8 col-sm-11 col-md-11 col-lg-12 col-xl-12 p-5" style="background-color: #c7deec;">
                <div class="flex-fill m-2"><strong>Fall:</strong></div>
                <div class="flex-fill m-2">Sep. 1-Nov. 30</div>
                <div class="flex-fill m-2">Hours: W-Sun, 10 a.m.-7 p.m. <br>(Closed Monday & Tuesday)</div>            
              </div>

              <div class="d-flex col-xs-8 col-sm-11 col-md-11 col-lg-12 col-xl-12 p-5" style="background-color: white;">
                <div class="flex-fill m-2"><strong>Winter:</strong></div>
                <div class="flex-fill m-2">Dec. 1-Feb. 28</div>
                <div class="flex-fill m-2">Hours: W-Sun, noon-7 p.m. <br>(Closed Monday & Tuesday)</div>              
              </div>

            </div>
            
        </div>
  </div>
</div>
        
</template>

<script>
  export default {
  name: 'Grid',
  data () {
    return {
      msg: 'Check out my grid'
    }
  }
}
</script>

<style>
  /* Your CSS goes here */
</style>