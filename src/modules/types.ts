import type { RouteOptions } from "fastify";
import type {
  JsonSchemaProperty,
  ObjectJsonSchemaProperty,
} from "type-jsonschema";

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

// eslint-disable-next-line
export type Security = {
  [key: string]: string[];
};

export type StrictAnyRoute = {
  schema: {
    summary?: string;
    description?: string;
    security?: Security[];
    tags?: string[];
    consumes?: string[];
    produces?: string[];
    body?: JsonSchemaProperty;
    querystring?: JsonSchemaProperty;
    params?: ObjectJsonSchemaProperty["properties"];
    headers?: JsonSchemaProperty;
    response?: { [key: number]: JsonSchemaProperty };
  };
} & AnyRoute;

export type StrictDeleteRoute = StrictAnyRoute;
export type StrictGetRoute = Omit<StrictAnyRoute, "body">;
export type StrictHeadRoute = StrictAnyRoute;
export type StrictPatchRoute = StrictAnyRoute;
export type StrictPostRoute = StrictAnyRoute;
export type StrictPutRoute = StrictAnyRoute;
export type StrictOptionsRoute = StrictAnyRoute;

export type Route = {
  delete?: DeleteRoute;
  get?: GetRoute;
  head?: HeadRoute;
  patch?: PatchRoute;
  post?: PostRoute;
  put?: PutRoute;
  options?: OptionsRoute;
};

export type StrictRoute = {
  delete?: StrictDeleteRoute;
  get?: StrictGetRoute;
  head?: StrictHeadRoute;
  patch?: StrictPatchRoute;
  post?: StrictPostRoute;
  put?: StrictPutRoute;
  options?: StrictOptionsRoute;
};

export type FileRoutesOptions = {
  routesDir: string;
  prefix?: string;
};
