<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WeatherStation msg="Matt's Weather Station"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherStation from "@/components/WeatherStation.vue";

export default {
  name: "Weather",
  components: {
    WeatherStation
  }
};
</script>
