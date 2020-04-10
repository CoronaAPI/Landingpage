<template>
  <div>
    <button class="data-btn" v-on:click="fetchCoronaMetaData">
      Get metadata
    </button>
    <p v-if="isFetching">fetching data...</p>
    <div v-else style="margin: 5px">
      <div v-if="metaData !== undefined" style="height: 300px; overflow: auto;">
        <table>
          <tr>
            <th>key</th>
            <th>value</th>
          </tr>
          <tr>
            <td>last update</td>
            <td>{{ metaData.lastUpdate }}</td>
          </tr>
          <tr>
            <td>repo</td>
            <td>{{ metaData.repo }}</td>
          </tr>
          <tr>
            <td>bug</td>
            <td>{{ metaData.bug }}</td>
          </tr>
          <tr>
            <td>remember</td>
            <td>{{ metaData.remember }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "corona-meta-data",
  data() {
    return {
      metaData: undefined,
      fetch: axios,
      isFetching: false
    };
  },
  methods: {
    fetchCoronaMetaData() {
      this.isFetching = true;
      return this.fetch
        .get("https://data.corona-api.org/meta")
        .then(response => {
          this.$data.metaData= response.data;
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
