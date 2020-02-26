<template>
    <!--FAQ accordion-->
        <div class="container">
            <h2 class="m-3">Frequently asked questions</h2>

            <div class="accordion m-3" id="accordion">
                <!--First FAQ-->
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2>
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
                                Why is the Pacific Northwest a haven for tulips?
                            </button>
                        </h2>
                    </div>
                
                    <!--First collapsible content-->
                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            
                <!--Second FAQ-->
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2>
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo">
                               How do I transport my bulbs and flowers safely?
                            </button>
                        </h2>
                    </div>

                    <!--Second collapsible content-->
                    <div id="collapseTwo" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>

                <!--Third collapsible content-->
                <div class="card">
                    <div class="card-header" id="headingThree">
                       <h2>
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree">
                                Where should I plant my tulip bulbs?
                           </button>
                       </h2>
                    </div>

                    <!--Third collapsible content-->
                    <div id="collapseThree" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>

                <!--Fourth FAQ-->
                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h2>
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour">
                                How long do fresh cut tulips last?
                            </button>
                        </h2>
                    </div>

                    <!--Fourth collapsible content-->
                    <div id="collapseFour" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div> 
            
                <!--Fifth FAQ-->
                <div class="card">
                    <div class="card-header" id="headingFive">
                        <h2>
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive">
                                What sets Tulip Fever tulips above the rest?
                            </button>
                        </h2>
                    </div>

                    <!--Fifth collapsible content-->
                    <div id="collapseFive" class="collapse" data-parent="#accordion">
                       <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <div style="clear: both;"></div>

</template>

<script>
export default {
  name: 'Accordion',
  data () {
    return {
      msg: 'This is my accordion page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
