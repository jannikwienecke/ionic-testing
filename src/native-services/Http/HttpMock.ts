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

export class HttpMock implements BaseHttp {
  sendRequest(url: string, options: HttpOptions): Promise<any> {
    console.log("Using HttpMock");

    return fetch(url, options);
  }
}
