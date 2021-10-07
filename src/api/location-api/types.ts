import {Nullable} from "@/types/utility-types";

export type TLocationResponse = {
  data: {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
  }
};

export type TCoordinates = {
  lat: number;
  lon: number;
};

export type TLocation = {
  id: Nullable<number>;
  city: Nullable<string>;
  country: Nullable<string>;
  coordinates: TCoordinates;
}
