import {
  SecureStorageEcho,
  SecureStorageEchoObject,
} from "@ionic-native/secure-storage-echo";
import { PASSWORD, PHONE_NUMBER } from "../../hooks/useSecureStorage";

export const SecureStorageName = "authContext";

export interface LoginOptions {
  phonenumber: string;
  password: string;
}
export interface BaseSecureStorage {
  saveLogin: (options: LoginOptions) => void;
  removeLogin: () => void;
  getLogin: () => Promise<LoginOptions>;
}

export class SecureStorage implements BaseSecureStorage {
  saveLogin({ password, phonenumber }: LoginOptions) {
    console.log("saveLogin...");

    SecureStorageEcho.create(SecureStorageName)
      .then((storage: SecureStorageEchoObject) => {
        storage
          .set(PHONE_NUMBER, phonenumber)
          .catch((error: any) => console.dir(error));
        storage
          .set(PASSWORD, password)
          .catch((error: any) => console.dir(error));
      })
      .catch((error: any) => {
        console.error("savePhoneNumberAndPassword: ", error);
      });
  }
  removeLogin() {
    SecureStorageEcho.create(SecureStorageName)
      .then(async (storage: SecureStorageEchoObject) => {
        await storage
          .remove(PHONE_NUMBER)
          .catch((error: any) => console.dir(error));
        await storage
          .remove(PASSWORD)
          .catch((error: any) => console.dir(error));
      })
      .catch((error: any) => {
        console.error("removePhoneNumberAndPassword: ", error);
      });
  }

  getLogin() {
    return new Promise<LoginOptions>(async (resolve, reject) => {
      SecureStorageEcho.create(SecureStorageName)

        .then(async (storage: SecureStorageEchoObject) => {
          const phonenumber = await storage
            .get(PHONE_NUMBER)
            .catch((error: any) => {
              return "";
            });
          let password = await storage.get(PASSWORD).catch((error: any) => "");
          resolve({ password, phonenumber });
        })
        .catch((err) => {
          //   console.warn("WARNING SecureStorageEcho: ", t("error.nopincode"));
          reject(err);
        });
    });
  }
}
