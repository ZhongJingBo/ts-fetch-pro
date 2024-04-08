export type Method =
  | "get"
  | "GET"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "options"
  | "OPTIONS"
  | "head"
  | "HEAD"
  | "DELETE"
  | "delete";

export interface FetchRequestConfig {
  url?: string;

  method?: Method;

  mode?: RequestMode;
}

export interface FetchInternalConfig {
  method: Method;
  mode?: RequestMode;
}
