import { HTTPResponse, HTTP } from "@ionic-native/http";

interface HttpOptions {
  method: "get" | "post" | "put" | "delete";
  data: {
    params: any;
  };
  serializer: "json" | "utf8" | "urlencoded" | "multipart" | "raw" | undefined;
  responseType: "json" | "text" | "arraybuffer" | "blob" | undefined;
}

export interface BaseHttp {
  sendRequest: (url: string, options: HttpOptions) => Promise<any>;
}

export class Http implements BaseHttp {
  sendRequest(url: string, options: HttpOptions): Promise<HTTPResponse> {
    console.log("sendRequest");

    return HTTP.sendRequest(url, options);
  }
}
