<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <main id="app">
      <p>Enter the city name to check current weather in it</p>
      <section class="weather-input">
        <input type="text" v-model="query">
        <button :disabled="!query.length" @click="showWeather">Check</button>
      </section>
      <section v-if="error" class="weather-error">There is no such city in the database</section>
      <section v-if="city.length" class="weather-result">
        <h1>{{city}}, {{country}}</h1>
        <p>
          <em>{{weatherDescription}}</em>
        </p>
        <div class="weather-result__main">
          <img :src="icon" alt="Weather icon">
          <div class="weather-result__temp">{{temp}}&deg;C</div>
        </div>
        <div class="weather-result__details">
          <p>Min: {{tempMin}}&deg;C</p>
          <p>Max: {{tempMax}}&deg;C</p>
          <p>Humidity: {{humidity}}%</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "WeatherStation",
  props: {
    msg: String
  },
  data() {
    return {
      query: "",
      error: false,
      city: "",
      country: "",
      weatherDescription: "",
      temp: null,
      tempMin: null,
      tempMax: null,
      humidity: null,
      icon: ""
    };
  },
  methods: {
    showWeather() {
      this.$http
        .get(
          `/weather?q=${
            this.query
          }&units=metric&&appid=${"60dfc55b3b0bb0dede554ada01474fff"}`
        )
        .then(response => {
          this.city = response.data.name;
          this.country = response.data.sys.country;
          this.weatherDescription = response.data.weather[0].description;
          this.temp = response.data.main.temp;
          this.tempMin = response.data.main.temp_min;
          this.tempMax = response.data.main.temp_max;
          this.humidity = response.data.main.humidity;
          this.icon = `http://openweathermap.org/img/w/${
            response.data.weather[0].icon
          }.png`;
          this.error = false;
        })
        .catch(() => {
          this.error = true;
          this.city = "";
        });
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
</style>
