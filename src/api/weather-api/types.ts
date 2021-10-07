import {TCoordinates, TLocation} from "@/api/location-api/types";
import {TStringIndexed} from "@/types/utility-types";

export type TWeatherForecastResponse = {
    data: {
        coord: TCoordinates;
        weather: Array<{
            description: string;
            main: string;
            icon: string;
            id: number;
        }>;
        base: string;
        main: {
            temp: number;
            temp_max: number;
            temp_min: number;
            humidity: number;
            feels_like: number;
            pressure: number;
        };
        wind: {
            deg: number;
            gust: number;
            speed: number;
        };
        clouds: {
            all: number;
        };
        rain: TStringIndexed;
        snow: TStringIndexed;
        dt: number;
        sys: {
            country: string;
            id: number;
            sunrise: number;
            sunset: number;
            type: number;
        };
        timezone: number;
        id: number;
        name: string;
        cod: number;
        visibility: number;
    };
};

export type TWeatherForecast = {
    location: TLocation;
    temperature: number;
    feels_like: number;
    main: string;
    description: string;
    humidity: number;
    visibility: string;
    icon: string;
}
