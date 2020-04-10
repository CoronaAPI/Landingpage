<template>
  <div>
    <button class="data-btn" v-on:click="fetchCoronaDataSources">
      Get sources
    </button>
    <p v-if="isFetching">fetching data...</p>
    <div v-else style="margin: 5px">
      <div v-if="coronaSources.length > 0" style="height: 300px; overflow: auto;">
        <table>
          <tr>
            <th>source</th>
          </tr>
          <tr v-for="(source, index) in coronaSources" :key="index">
            <td>{{ source }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "corona-data-sources",
  data() {
    return {
      coronaSources: [],
      fetch: axios,
      isFetching: false
    };
  },
  methods: {
    fetchCoronaDataSources() {
      this.isFetching = true;
      return this.fetch
        .get("https://data.corona-api.org/api/datasources")
        .then(response => {
          this.$data.coronaSources= response.data;
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
