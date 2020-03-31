<template>
<body>

    <div class="faq-container">
        <h2 class="m-3">Frequently asked questions</h2>
        <!--Use v-for to populate accordion-->
        <div v-for="item in items" class="accordion" id="accordion">
            <div class="card"> 
              <div class="card-header" id="headingOne">
                <h2>
                  <button class="btn btn-link" type="button" v-on:click="show = !show" data-target="#collapseOne">
                    {{ item.faq }}
                  </button>
                </h2>
              </div>

              <div id="collapseOne" v-if="show" class="collapse show" data-parent="#accordion">
                <div class="card-body">
                    {{ item.answer }}
                </div>
              </div>
            </div>
        </div>
    </div>

</body>
        

</template>

<script>

export default {
name: 'Images',
data () {
  return {
  items: [
    { faq: 'Why is the Pacific Northwest a haven for tulips?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { faq: 'How do I transport my bulbs and flowers safely?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { faq: 'Where should I plant my tulip bulbs?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { faq: 'How long do fresh cut tulips last?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { faq: 'What sets Tulip Fever tulips above the rest?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ],

  show: false,
  }
}
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');

.faq-container {
  margin: 3rem;
}

h2 {
  font-family: 'Roboto', sans-serif;
}

.btn {
  color: #E7C9B1;
  font-family: 'Roboto', sans-serif;
}

</style>
