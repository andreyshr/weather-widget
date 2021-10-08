import { TLocation } from "@/api/location-api/types";
import { Nullable } from "@/types/utility-types";

export interface IStorage {
  get<T>(key: string): Nullable<T>;
  set(key: string, value: unknown): void;
}

export class LocalStorage implements IStorage {
  public get<T>(key: string): Nullable<T> {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return null;
  }

  public set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export class LocationStorage {
  private storage: IStorage;
  static readonly LOCATIONS_KEY = "ww_locations";

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  public getLocations(): Nullable<TLocation[]> {
    return this.storage.get(LocationStorage.LOCATIONS_KEY);
  }

  public setLocations(value: TLocation[]): void {
    this.storage.set(LocationStorage.LOCATIONS_KEY, value);
  }
}

const localStore = new LocalStorage();
export const locationsStorage = new LocationStorage(localStore);
