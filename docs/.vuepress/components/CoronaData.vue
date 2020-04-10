<template>
  <div>
    <button class="data-btn" v-on:click="fetchCoronaData">
      Get Data
    </button>
    <p v-if="isFetching">fetching data...</p>
    <div v-else style="margin: 5px">
      <div v-if="coronaData.length > 0" style="height: 300px; overflow: auto;">
        <table>
          <tr>
            <th>country</th>
            <th>state</th>
            <th>cases</th>
            <th>active</th>
            <th>recovered</th>
            <th>deaths</th>
            <th>population</th>
            <th>rating</th>
            <th>source</th>
          </tr>
          <tr v-for="(data, index) in coronaData" :key="data.index">
            <td>{{ data.country }}</td>
            <td>{{ data.state }}</td>
            <td>{{ data.cases }}</td>
            <td>{{ data.active }}</td>
            <td>{{ data.recovered }}</td>
            <td>{{ data.deaths }}</td>
            <td>{{ data.population }}</td>
            <td>{{ data.rating }}</td>
            <td>{{ data.url }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "corona-data",
  data() {
    return {
      coronaData: [],
      fetch: axios,
      isFetching: false
    };
  },
  methods: {
    fetchCoronaData() {
      this.isFetching = true;
      return this.fetch
        .get("https://data.corona-api.org/api/daily")
        .then(response => {
          this.$data.coronaData = response.data
            .filter(d => d.cases >= 0)
            .sort((a, b) => b.cases - a.cases);
          this.isFetching = false;
        })
        .catch(error => {
          this.isFetching = false;
          console.log(error);
        });
    }
  }
};
</script>

<style>
.data-btn {
  border: 2px solid #e2bc18;
  border-radius: 10px;
  background: transparent;
  color: #e2bc18;
  font-weight: 700;
  font-size: 1rem;
  padding: 10px;
  transition: box-shadow 250ms ease-in-out, transform 250ms ease-in-out;
}

.data-btn:hover {
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
}
</style>
