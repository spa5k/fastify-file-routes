import type { RouteOptions } from "fastify";

export const errorLabel: "[ERROR] fastify-file-routes:" =
  "[ERROR] fastify-file-routes:";

export type ValidMethods =
  | "DELETE"
  | "GET"
  | "HEAD"
  | "PATCH"
  | "POST"
  | "PUT"
  | "OPTIONS";

export const validMethods: Set<string> = new Set([
  "delete",
  "get",
  "head",
  "patch",
  "post",
  "put",
  "options",
]);

export type AnyRoute = Omit<RouteOptions, "method" | "url">;

export type DeleteRoute = AnyRoute;
export type GetRoute = Omit<AnyRoute, "body">;
export type HeadRoute = AnyRoute;
export type PatchRoute = AnyRoute;
export type PostRoute = AnyRoute;
export type PutRoute = AnyRoute;
export type OptionsRoute = AnyRoute;

export type Security = {
  [key: string]: string[];
};

export type Route = {
  delete?: DeleteRoute;
  get?: GetRoute;
  head?: HeadRoute;
  patch?: PatchRoute;
  post?: PostRoute;
  put?: PutRoute;
  options?: OptionsRoute;
};

export type FileRoutesOptions = {
  routesDir: string;
  prefix?: string;
};
