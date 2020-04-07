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
  name: 'Accordion',
  data () {
    return {
      items: [
        { faq: 'Why is the Pacific Northwest a haven for tulips?', answer: 'The moderate climate, with wet winters and springs, provide optimal growing environments for tulips.' },
        { faq: 'How do I transport my bulbs and flowers safely?', answer: 'We provide boxes for bulbs and special cut flower bags with water upon request.' },
        { faq: 'Where should I plant my tulip bulbs?', answer: 'We recommend planting in areas with full sun and away from animal access.' },
        { faq: 'How long do fresh cut tulips last?', answer: 'If following our provided instructions, your flowers should live between 5-7 days.' },
        { faq: 'What sets Tulip Fever tulips above the rest?', answer: 'Our high quality flowers, customer service, and year-round availability.' },
      ],
      title: 'Accordion',
      show: false,
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'This page contains frequently asked questions and answers about tulips' }
      ]
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
