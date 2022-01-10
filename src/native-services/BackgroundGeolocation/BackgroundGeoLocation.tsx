import BackgroundGeolocation, {
  LocationAccuracy,
  State,
} from "@transistorsoft/capacitor-background-geolocation";

export interface BackgroundGeolocationOptions {
  reset?: boolean;
  debug?: boolean;
  desiredAccuracy?: LocationAccuracy;
  distanceFilter?: number;
  autoSync?: boolean;
  stopOnTerminate?: boolean;
  batchSync?: boolean;
  heartbeatInterval?: number;
}

export interface BackgroundDynamicConfig {
  url: string;
  headers: { cookie: string };
  options: BackgroundGeolocationOptions;
}

export const GEOLOCATION_ENDPOINT = "/tms_mobile_app/save_geo_data";

const DEFAULT_BACKGROUND_GEOLOCATION_OPTIONS: BackgroundGeolocationOptions = {
  reset: true,
  debug: false,
  desiredAccuracy: 10,
  distanceFilter: 10,
  autoSync: true,
  stopOnTerminate: false,
  batchSync: true,
  heartbeatInterval: 60,
};

export interface BaseBackgroundGeolocation {
  options: BackgroundGeolocationOptions;
  isReady: boolean;
  configure: (config: BackgroundDynamicConfig) => Promise<State>;
  start: () => Promise<any>;
  stop: () => Promise<any>;
  remove: () => void;
}

const addEventListener = () => {
  BackgroundGeolocation.onHttp((response) => {
    console.log(
      "[http Request BackgroundGeolocation]: ",
      response.success,
      response.status,
      response.responseText
    );
  });

  BackgroundGeolocation.onLocation((location) => {
    console.log("[onLocation]: ", location);
  });
};

export class BackgroundGeoLocationCordova implements BaseBackgroundGeolocation {
  options: any;
  isReady = false;
  constructor(options: BackgroundGeolocationOptions) {
    this.options = {
      ...DEFAULT_BACKGROUND_GEOLOCATION_OPTIONS,
      ...options,
    };
  }

  configure(config: BackgroundDynamicConfig) {
    return BackgroundGeolocation.ready({
      ...this.options,
      ...config,
      ...config.options,
    });
  }

  start() {
    return new Promise((resolve, reject) => {
      BackgroundGeolocation.start()
        .then((res) => {
          console.log("Started Background Geolocation", res);
          addEventListener();
          resolve(res);
        })
        .catch((error) => {
          console.error("Error Starting BackgroundGeolocation", error, this);
          reject(error);
        });
    });
  }

  stop() {
    return BackgroundGeolocation.stop()
      .then((res) => console.log("Stopped Background Geolocation", res))
      .catch((error: any) =>
        console.error("Error Stopping BackgroundGeolocation", error)
      );
  }

  remove() {
    BackgroundGeolocation.removeListeners();
  }
}
