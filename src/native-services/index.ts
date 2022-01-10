import { Capacitor } from "@capacitor/core";
import { isPlatform } from "@ionic/react";
import BackgroundGeolocation from "./BackgroundGeolocation";
import http from "./Http";
import secureStorage from "./SecureStorageEcho";
import { NativeServiceDict, NativeServiceEntry } from "./types";

const serviceList: NativeServiceEntry[] = [
  BackgroundGeolocation,
  secureStorage,
  http,
];

// @ts-ignore
const services: NativeServiceDict = serviceList.reduce(
  (prev, current) => {
    const isMobile = isPlatform("android") || isPlatform("ios");

    if (isMobile) return prev;

    return {
      ...prev,
      [current.pluginName]: current.mock,
    };
  },
  {
    [BackgroundGeolocation.pluginName]: BackgroundGeolocation.service,
    [secureStorage.pluginName]: secureStorage.service,
    [http.pluginName]: http.service,
  }
);

export default services;
