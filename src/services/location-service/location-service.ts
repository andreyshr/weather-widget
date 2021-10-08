import { LocationApi } from "@/api/location-api/location-api";
import { GeolocationModule } from "@/modules/geolocation/geolocation";
import { TCoordinates } from "@/api/location-api/types";
import { TLocation } from "@/api/location-api/types";
import { locationsStorage } from "@/modules/storage/storage";
import { Nullable } from "@/types/utility-types";

export class LocationService {
  public static getLocationByIp(): Promise<TCoordinates> {
    return LocationApi.getLocationByIp().then((r) => ({
      lat: r.data.lat,
      lon: r.data.lon,
    }));
  }

  public static getLocations(): Promise<TLocation[]> {
    const locations = LocationService.getLocalLocations();
    if (Array.isArray(locations) && locations.length)
      return Promise.resolve(locations);

    const createEmptyLocation = (coordinates: TCoordinates): TLocation[] => [
      { coordinates, id: null, country: null, city: null },
    ];

    return GeolocationModule.getLocation().then(createEmptyLocation);
  }

  public static getLocalLocations(): Nullable<TLocation[]> {
    const locations = locationsStorage.getLocations();

    const isLocation = (location: TLocation): boolean =>
      !!(location.id || location.coordinates);

    return locations?.filter(isLocation);
  }

  public static saveLocalLocations(locations: TLocation[]): void {
    locationsStorage.setLocations(locations);
  }
}
