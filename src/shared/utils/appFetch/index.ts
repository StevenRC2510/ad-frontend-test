import axios, { AxiosError, AxiosRequestConfig } from "axios";

async function appFetch<T>(
  url: AxiosRequestConfig<T>["url"],
  customConfig: AxiosRequestConfig = {}
): Promise<T> {
  const options: AxiosRequestConfig = {
    ...customConfig,
    url,
    headers: customConfig.headers ?? {},
    method: customConfig.method ?? "GET",
  };

  return new Promise<T>((resolve, reject) => {
    axios(options)
      .then((success) => resolve(success.data as T))
      .catch((error: Error | AxiosError<T>) => {
        if (axios.isAxiosError(error)) {
          reject(error.response);
        } else {
          reject(error);
        }
      });
  });
}

export default appFetch;
