import { WeatherApi } from "@/api/weather-api/weather-api";
import {
  TWeatherForecastResponse,
  TWeatherForecast,
} from "@/api/weather-api/types";
import { TCoordinates, TLocation } from "@/api/location-api/types";

export class WeatherService {
  public static getWeatherByCityName(city: string): Promise<TWeatherForecast> {
    return WeatherApi.getWeatherByCityName(city).then(
      WeatherService.createWeatherForecast
    );
  }

  public static getWeatherByCoordinates(
    coordinates: TCoordinates
  ): Promise<TWeatherForecast> {
    return WeatherApi.getWeatherByCoordinates(coordinates).then(
      WeatherService.createWeatherForecast
    );
  }

  public static getWeatherByCityId(id: number): Promise<TWeatherForecast> {
    return WeatherApi.getWeatherByCityId(id).then(
      WeatherService.createWeatherForecast
    );
  }

  public static getWeatherByLocations(
    locations: TLocation[]
  ): Promise<TWeatherForecast[]> {
    const createRequest = (location: TLocation): Promise<TWeatherForecast> =>
      location.id
        ? WeatherService.getWeatherByCityId(location.id).catch((err) => err)
        : WeatherService.getWeatherByCoordinates(location.coordinates).catch(
            (err) => err
          );

    const isWeatherForecast = (weatherForecasts: TWeatherForecast): boolean =>
      !!weatherForecasts.location?.id;

    const promises = locations.map(createRequest);

    return Promise.all(promises).then((weatherForecasts) =>
      weatherForecasts.filter(isWeatherForecast)
    );
  }

  private static createWeatherForecast(
    r: TWeatherForecastResponse
  ): TWeatherForecast {
    return {
      location: {
        id: r.data.id,
        city: r.data.name,
        country: r.data.sys.country,
        coordinates: r.data.coord,
      },
      description: r.data.weather[0].description,
      temperature: Math.round(r.data.main.temp),
      humidity: r.data.main.humidity,
      visibility: (r.data.visibility / 1000).toFixed(1),
      icon: r.data.weather[0].icon,
      feels_like: Math.round(r.data.main.feels_like),
      main: r.data.weather[0].main,
    };
  }
}
