import type { RouteOptions } from "fastify";

export const errorLabel = "[ERROR] fastify-file-routes:" as const;

export type ValidMethods =
  | "delete"
  | "get"
  | "head"
  | "patch"
  | "post"
  | "put"
  | "options";

export const validMethods = new Set([
  "delete",
  "get",
  "head",
  "patch",
  "post",
  "put",
  "options",
]);

export type RouteInterfaceRecord = Record<string, unknown> | unknown;

export type AnyRoute<
  Body = unknown,
  Headers extends RouteInterfaceRecord = unknown,
  Params extends RouteInterfaceRecord = unknown,
  Querystring extends RouteInterfaceRecord = unknown,
  Reply = unknown
> = Omit<
  // Uses never to use the defaults from fastify
  RouteOptions<
    never,
    never,
    never,
    {
      Body: Body;
      Headers: Headers;
      Params: Params;
      Querystring: Querystring;
      Reply: Reply;
    },
    never
  >,
  "method" | "url"
>;

export type Route<
  Body = unknown,
  Headers extends RouteInterfaceRecord = unknown,
  Params extends RouteInterfaceRecord = unknown,
  Querystring extends RouteInterfaceRecord = unknown,
  Reply = unknown
> = {
  [Key in ValidMethods]?: AnyRoute<Body, Headers, Params, Querystring, Reply>;
};

export type FileRoutesOptions = {
  routesDir: string;
  prefix?: string;
};
