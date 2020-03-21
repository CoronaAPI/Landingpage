# Examples

This section helps you with examples so that you can easily obtain and use the required COVID19 data.

## Get all of today's data

To get all of today's data use the api endpoint you can find [here (/api/daily).](https://corona.ndo.dev/api-docs/swagger-ui/#/default/get_api_daily.).

When you click on the button, you request the daily data.

<corona-data />

To implement this you can build a small [Vue](https://vuejs.org/) component. The data will be fetched with [axios](https://github.com/axios/axios) and stored locally in the component.

But it's up to you. Just choose your favorite tools and get the data via REST. If you click [here](https://corona.ndo.dev/api/daily), you will see the data in your browser. You can copy the data and use tools to parse it into the format you need (e.g. [json to csv](https://konklone.io/json/)).


::: details Click me to view the code of the Vue component
```js
<template>
  <div>
    <button
      v-on:click="fetchCoronaData"
    >
        Click here to get COVID19 data
    </button>
    <p v-if="isFetching">fetching data... </P>
    <div v-else>
      <table v-if="coronaData.length > 0">
        <tr>
          <th>country</th>
          <th>active</th>
          <th>recovered</th>
          <th>deaths</th>
          <th>source</th>
          <th>rating</th>
        </tr>
        <tr
          v-for="(data, index) in coronaData"
          :key="data.index"
        >
          <td>{{ data.country }}</td>
          <td>{{ data.active }}</td>
          <td>{{ data.recovered }}</td>
          <td>{{ data.deaths }}</td>
          <td>{{ data.url }}</td>
          <td>{{ data.rating }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:"corona-data",
  data() {
    return {
      coronaData: [],
      isFetching: false
    };
  },
  methods: {
    fetchCoronaData() {
      this.isFetching = true
      return axios
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
```
:::