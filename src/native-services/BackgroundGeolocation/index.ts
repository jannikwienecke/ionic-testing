import { NativeServiceEntry } from "../types";
import { BackgroundGeoLocationCordova } from "./BackgroundGeoLocation";
import { BackgroundGeoLocationMock } from "./BackgroundGeolocationMock";

const backgroundGeolocation: NativeServiceEntry = {
  service: BackgroundGeoLocationCordova,
  mock: BackgroundGeoLocationMock,
  pluginName: "BackgroundGeolocation",
};

export default backgroundGeolocation;
