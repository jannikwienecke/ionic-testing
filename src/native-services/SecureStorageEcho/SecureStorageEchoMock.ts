import { BaseSecureStorage, LoginOptions } from "./SecureStorageEcho";

export class SecureStorageMock implements BaseSecureStorage {
  saveLogin({ password, phonenumber }: LoginOptions) {
    console.log("[SecureStorageEcho.saveLogin]", password, phonenumber);
  }

  removeLogin() {
    console.log("[SecureStorageEcho.removeLogin]");
  }

  getLogin() {
    console.log("[SecureStorageEcho.getLogin]");
    return Promise.resolve({ password: "admin", phonenumber: "+1234" });
  }
}
