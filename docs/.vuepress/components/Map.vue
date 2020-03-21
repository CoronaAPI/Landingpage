<template>
  <div>Hello</div>
</template>

<script>
const axios = require('axios')
export default {
  data () {
      return {
          coronaData: []
      }
  },
  beforeMount() {
    axios.get('https://corona.ndo.dev/')
    .then(response => {
       this.$data.coronaData = response.data
    })
    .catch(error => {
        console.log(error);
    })
  }
}
</script>