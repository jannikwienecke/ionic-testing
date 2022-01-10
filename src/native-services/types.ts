export type NativeService =
  | "BackgroundGeolocation"
  | "SecureStorageEcho"
  | "HTTP";

export type ClassRef = new (...args: any[]) => any;

export type NativeServiceDict = {
  [key in NativeService]: ClassRef;
};

export interface NativeServiceEntry {
  service: ClassRef;
  mock: ClassRef;
  pluginName: NativeService;
}
