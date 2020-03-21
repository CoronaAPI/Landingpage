<template>
  <div>
    <div
      v-for="(data, index) in coronaData"
      :key="data.index"
    >
    {{ data.country }}
    </div>
  </div>
</template>

<script>
const axios = require("axios")

export default {
  name:"corona-data",
  data() {
    return {
      coronaData: []
    };
  },
  beforeMount() {
    axios
      .get("https://corona.ndo.dev/")
      .then(response => {
        this.$data.coronaData = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
};
</script>
