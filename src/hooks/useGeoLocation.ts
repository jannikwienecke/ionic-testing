import React from "react";
import {
  BaseBackgroundGeolocation,
  GEOLOCATION_ENDPOINT,
} from "../native-services/BackgroundGeolocation/BackgroundGeoLocation";

export const useGeoLocation = (
  BackgroundGeolocation: BaseBackgroundGeolocation
) => {
  const [backgroundGeolocation] = React.useState(BackgroundGeolocation);

  const start = React.useCallback(() => {
    const start = () => {
      console.log("BACkGROUND GEOLOCATION STARTED SUCCESSFULLY");

      backgroundGeolocation.start();
    };

    if (backgroundGeolocation.isReady) return;

    backgroundGeolocation
      .configure({
        url: "url" + GEOLOCATION_ENDPOINT,
        options: {},
        headers: { cookie: "dsads" },
      })
      .then(start);
  }, [backgroundGeolocation]);

  const stop = React.useCallback(() => {
    backgroundGeolocation.remove();
  }, [backgroundGeolocation]);

  return { start, stop };
};
