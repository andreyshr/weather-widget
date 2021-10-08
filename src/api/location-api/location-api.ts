import axios from "axios";
import { TLocationResponse } from "./types";

export class LocationApi {
  static readonly BASE_URL = "http://ip-api.com/json/";

  public static getLocationByIp(): Promise<TLocationResponse> {
    return axios.get(`${LocationApi.BASE_URL}`);
  }
}
