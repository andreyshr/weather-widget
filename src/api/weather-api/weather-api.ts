import axios from "axios";
import { TWeatherForecastResponse } from "./types";
import { TCoordinates } from '@/api/location-api/types';

export class WeatherApi {
  static readonly API_KEY = "3fc01a3f760ceb8d8eccd6b60f63fec7";
  static readonly BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  public static getWeatherByCityName(city: string): Promise<TWeatherForecastResponse> {
    return axios.get(
      `${WeatherApi.BASE_URL}?q=${city}&appid=${WeatherApi.API_KEY}&units=metric`
    );
  }

  public static getWeatherByCityId(id: number): Promise<TWeatherForecastResponse> {
    return axios.get(
        `${WeatherApi.BASE_URL}?id=${id}&appid=${WeatherApi.API_KEY}&units=metric`
    );
  }

  public static getWeatherByCoordinates(
    coordinates: TCoordinates
  ): Promise<TWeatherForecastResponse> {
    const { lat, lon } = coordinates || {};

    return axios.get(
      `${WeatherApi.BASE_URL}?lat=${lat}&lon=${lon}&appid=${WeatherApi.API_KEY}&units=metric`
    );
  }
}
