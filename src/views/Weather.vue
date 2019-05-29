<template>
  <div class="home">
    <WeatherStation msg="Matt's Weather Station"/>
    <ul>
      <li v-for="item in languages" :key="item">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherStation from "@/components/WeatherStation.vue";
import axios from "axios";
export default {
  name: "Weather",
  components: {
    WeatherStation
  },
  data() {
    return {
      languages: []
    };
  },
  mounted() {
    axios.get("/languages").then(r => {
      this.languages = r.data;
      this.languages.unshift({ id: "add", name: "Add Language" });
    });
  }
};
</script>
