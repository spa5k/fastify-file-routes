import type { RouteOptions } from "fastify";

export const errorLabel = "[ERROR] fastify-file-routes:" as const;

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
  delete?: AnyRoute<Body, Headers, Params, Querystring, Reply>;
  get?: Omit<AnyRoute<Body, Headers, Params, Querystring, Reply>, "body">;
  head?: AnyRoute<Body, Headers, Params, Querystring, Reply>;
  patch?: AnyRoute<Body, Headers, Params, Querystring, Reply>;
  post?: AnyRoute<Body, Headers, Params, Querystring, Reply>;
  put?: AnyRoute<Body, Headers, Params, Querystring, Reply>;
  options?: AnyRoute<Body, Headers, Params, Querystring, Reply>;
};

export type FileRoutesOptions = {
  routesDir: string;
  prefix?: string;
};
