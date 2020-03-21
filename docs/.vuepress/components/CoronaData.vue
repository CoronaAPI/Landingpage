<template>
  <div>
    <button
      style="padding: 5px"
      v-on:click="fetchCoronaData"
    >
        Click here to get COVID19 data
    </button>
    <p v-if="isFetching">fetching data... </P>
    <div v-else style="margin: 5px">
      <div v-if="coronaData.length > 0" style="height: 300px; overflow: auto;">
        <table>
          <tr>
            <th>country</th>
            <th>active</th>
            <th>recovered</th>
            <th>deaths</th>
            <th>rating</th>
            <th>source</th>
          </tr>
          <tr
            v-for="(data, index) in coronaData"
            :key="data.index"
          >
            <td>{{ data.country }}</td>
            <td>{{ data.active }}</td>
            <td>{{ data.recovered }}</td>
            <td>{{ data.deaths }}</td>
            <td>{{ data.rating }}</td>
            <td>{{ data.url }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios")

export default {
  name:"corona-data",
  data() {
    return {
      coronaData: [],
      fetch: axios,
      isFetching: false
    };
  },
  methods: {
    fetchCoronaData() {
      this.isFetching = true
      return this.fetch
        .get("https://corona.ndo.dev/api/daily")
        .then(response => {
          this.$data.coronaData = response.data
          this.isFetching = false
        })
        .catch(error => {
          this.isFetching = false
          console.log(error)
        })
    }
  }
};
</script>
