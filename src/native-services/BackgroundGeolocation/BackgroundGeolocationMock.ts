import { BaseBackgroundGeolocation } from "./BackgroundGeoLocation";

export class BackgroundGeoLocationMock implements BaseBackgroundGeolocation {
  options: any;
  isReady = false;
  constructor(options: any) {
    this.options = {
      ...options,
    };
  }

  configure(config: any) {
    console.log("[BackgroundGeolocation.configure]", config);
    return Promise.resolve({} as any);
  }

  start() {
    console.log("[BackgroundGeolocation.start]");
    return Promise.resolve();
  }

  stop() {
    console.log("[BackgroundGeolocation.stop]");
    return Promise.resolve();
  }

  remove() {
    console.log("[BackgroundGeolocation.remove]");

    Promise.resolve();
  }
}
