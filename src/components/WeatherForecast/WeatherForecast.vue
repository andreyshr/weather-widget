<template>
  <div class="weather-forecast">
    <h3 class="weather-forecast__title">
      {{ weatherForecast.location.city }}, {{ weatherForecast.location.country }}
    </h3>

    <div class="weather-forecast__main">
      <img
          :src="`${imgPath}${weatherForecast.icon}@2x.png`"
          :alt="weatherForecast.main"
          width="100"
          height="100"
      />
      <div class="weather-forecast__temperature">
        {{ weatherForecast.temperature }}&#176;C
      </div>
    </div>

    <div class="weather-forecast__footer">
      <p>
        <span>Feels like: </span>
        <span
        >{{ weatherForecast.feels_like }}&#176;C
          {{ weatherForecast.main }}.
          {{ weatherForecast.description }}</span
        >
      </p>
      <p>
        <span>Humidity: </span>
        <span>{{ weatherForecast.humidity }}%</span>
      </p>
      <p>
        <span>Visibility: </span>
        <span>{{ weatherForecast.visibility }}km</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {TWeatherForecast} from "@/api/weather-api/types";

@Component
export default class WeatherForecast extends Vue {
  private readonly imgPath = "https://openweathermap.org/img/wn/";
  @Prop({required: true}) readonly weatherForecast!: TWeatherForecast;
}
</script>

<style scoped>
.weather-forecast {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 16px;
}

.weather-forecast__title {
  text-align: start;
  margin-bottom: 8px;
}

.weather-forecast__main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.weather-forecast__temperature {
  font-size: 32px;
  font-weight: bold;
}

.weather-forecast__footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  font-weight: bold;
}

.weather-forecast p {
  margin-top: 12px;
  margin-bottom: 0;
  text-align: left;
}
</style>
