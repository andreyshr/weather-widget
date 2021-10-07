import axios from 'axios';
import { TLocationResponse } from './types';

export class LocationApi {
    public static getLocationByIp(): Promise<TLocationResponse> {
        return axios.get(`http://ip-api.com/json/`);
    }
}
