<template>
  <ClientOnly>
    <div id="map-wrap" style="height: 60vh; width: 100%;">
        <LMap :zoom="4" :min-zoom="2" :max-zoom="13" :center="[50.0, 8.4]">
          <LTileLayer
            :url="url"
            :attribution="attribution"
          />
           <l-circle
                v-for="marker in markers"
                :key="marker.key"
                :lat-lng="[marker.lat, marker.long]"
                :radius="marker.cases * 10"
                color="red"
              >
              </l-circle>
        </LMap>
    </div>
  </ClientOnly>
</template>

<script>
import 'leaflet/dist/leaflet.css'

const axios = require('axios')
import { LMap, LTileLayer, LCircle } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LCircle
  },
  data () {
      return {
          coronaData: [],
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
  },
  computed: {
    markers() {
      return this.coronaData.filter(data => data.coordinates !== undefined).map((data, index) => ({
        key: index,
        lat: data.coordinates[1],
        long: data.coordinates[0],
        cases: data.cases
      }))
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