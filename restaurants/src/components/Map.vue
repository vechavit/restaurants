<template>
  <div class="hello">
    <b-card header-tag="header" footer-tag="footer">
      <h6 slot="header" class="mb-0">
        <GmapAutocomplete @place_changed="setPlace" id="input-search"></GmapAutocomplete>
        <b-button variant="outline-info" @click="usePlace">Search</b-button>
        <b-button variant="outline-info" @click="setNearby">Nearby restaurant</b-button>
      </h6>
      <GmapMap
        :center="this.newPosition"
        :zoom="this.zoom"
        map-type-id="terrain"
        style="width: 100%;height: 100vh;"
      >
        <GmapMarker v-for="(marker, index) in markers" :key="index" :position="marker.position" />
        <GmapMarker
          v-if="this.place"
          :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }"
        />
      </GmapMap>
      <em slot="footer">Footer Slot</em>
    </b-card>
  </div>
</template>
<script>
import { gmapApi } from "vue2-google-maps";
export default {
  name: "HelloWorld",
  computed: {
    google: gmapApi
  },
  data() {
    return {
      markers: [{ position: { lat: 13.7248936, lng: 100.4930244 } }],
      place: null,
      zoom: 12,
      newPosition: { lat: 13.7248936, lng: 100.4930244 }
    };
  },
  methods: {
    setPlace(place) {
      this.place = place;
    },
    usePlace() {
      if (this.place) {
        this.markers = [];
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        });
        this.newPosition = {
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng()
        };
        this.zoom = 14;
        this.place = null;
      }
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-body {
  padding: unset;
}
#input-search {
  width: 25%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border-width: thin;
  vertical-align: middle;
}
#input-search:focus {
  outline: unset;
}
</style>
