import { NativeServiceEntry } from "../types";
import { Http } from "./Http";
import { HttpMock } from "./HttpMock";

const http: NativeServiceEntry = {
  service: Http,
  mock: HttpMock,
  pluginName: "HTTP",
};

export default http;
