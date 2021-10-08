import { TCoordinates } from "@/api/location-api/types";

export class GeolocationModule {
  public static getLocation(): Promise<TCoordinates> {
    return new Promise((resolve, reject) => {
      const onSuccess = (position: GeolocationPosition) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      };

      const onError = (err: GeolocationPositionError) => reject(err);

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });
  }
}
