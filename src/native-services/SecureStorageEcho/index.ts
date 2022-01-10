import { NativeServiceEntry } from "../types";
import { SecureStorage } from "./SecureStorageEcho";
import { SecureStorageMock } from "./SecureStorageEchoMock";

const secureStorage: NativeServiceEntry = {
  service: SecureStorage,
  mock: SecureStorageMock,
  pluginName: "SecureStorageEcho",
};

export default secureStorage;
