import { Camera, CameraResultType } from "@capacitor/camera";
import {} from "@capacitor/storage";
import { IonButton } from "@ionic/react";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { useSecureStorage } from "../hooks/useSecureStorage";
import nativeServices from "../native-services";
import { CallNumber } from "@ionic-native/call-number";
import "./ExploreContainer.css";
import services from "../native-services";
import { BaseHttp } from "../native-services/Http/Http";

const NativeFeatures: React.FC = () => {
  const secureStorageHook = useSecureStorage(
    new nativeServices.SecureStorageEcho()
  );
  const backgroundGeolocationHook = useGeoLocation(
    new nativeServices.BackgroundGeolocation()
  );

  const nativeFeatures: { title: string; fn: Function }[] = [
    { title: "Geolocation", fn: backgroundGeolocationHook.start },
    {
      title: "Camera",
      fn: () => Camera.getPhoto({ resultType: CameraResultType.Base64 }),
    },
    {
      title: "Secure Storage",
      fn: () => {
        console.log("save phone number");
        secureStorageHook.savePhoneNumberAndPassword("123", "123");
      },
    },
    {
      title: "Call Number",
      fn: () => CallNumber.callNumber("+48123213", true),
    },
    {
      title: "HTTP",
      fn: async () => {
        const httpClient = new services.HTTP() as BaseHttp;
        const response = httpClient.sendRequest("/login", {
          method: "get",
          data: { params: {} },
          responseType: "json",
          serializer: "json",
        });

        try {
          const result = await response;
          console.log("__result: ", result);
        } catch (error) {
          console.log("__error: ", error);
        }
      },
    },
  ];

  return (
    <div className="container">
      <h1>Testing Plugins</h1>
      {nativeFeatures.map((feature, index) => {
        return (
          <div key={feature.title + index}>
            <IonButton
              onClick={async () => {
                try {
                  await feature.fn();
                  alert("Successfully run " + feature.title);
                } catch (error) {
                  console.log(`[${feature.title}] Error: `, error);
                }
              }}
            >
              {feature.title}
            </IonButton>
          </div>
        );
      })}
    </div>
  );
};

export default NativeFeatures;

// Plugin that work in the browser
// Capacitor/device
// Capacitor/camera
