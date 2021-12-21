# Fastify File Routes

<div align="center">

[![NPM version](https://img.shields.io/npm/v/fastify-file-routes.svg?style=for-the-badge)](https://www.npmjs.com/package/fastify-file-routes)
[![NPM downloads](https://img.shields.io/npm/dm/fastify-file-routes.svg?style=for-the-badge)](https://www.npmjs.com/package/fastify-file-routes)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/fastify-file-routes?logo=files&style=for-the-badge)
![npm](https://img.shields.io/npm/v/fastify-file-routes?logo=npm&style=for-the-badge)
![node-current](https://img.shields.io/badge/Node-%3E=14-success?style=for-the-badge&logo=node)
![npm](https://img.shields.io/npm/dw/fastify-file-routes?style=for-the-badge)

</div>

A Fastify plugin that provides a file system routes, based on the way Next.JS file system routing works, including all possible features.

## :sparkles:Features

    1. File System Routing.
    2. Index Routes.
    3. Nested Routes.
    4. Dynamic Route Segments.
    5. Catch All (Wildcard \*) Routes.

## :rocket: Installation

```sh
npm install fastify-file-system-routes
```

```yarn
yarn add fastify-file-system-routes
```

## :blue_book: Usage/Examples

### 1. Register the Plugin.

```typescript
import { fileRoutes } from "fastify-file-routes";

const app: FastifyInstance = fastify({ logger: true });

await app.register(fileRoutes, {
  routesDir: "./routes",
  prefix, // -> optional
});

await app.listen(3000);
```

### 2. Create the routes directory.

```sh
mkdir routes
```

### 3. Create your first route in the routes directory

```typescript
//file: `routes/some/route.ts`
//url:  `http://your-host/some/route`

import type { Route } from "fastify-file-routes";

export const routes: Route = {
  get: {
    handler: async (request, reply) => {
      await reply.send({
        some: "route",
      });
    },
  },
};
```

### 4. Access the Parameters.

```typescript
//file: `routes/users/[userId]/settings.js`
//mapped to: `<your host>/users/:userId/settings`

export const routes: Route = {
  get: {
    handler: async (request, reply) => {
      const { params } = request;
      await reply.send(`photos of user ${params.userId}`);
    },
  },
};
```

## :arrow_forward: Route module definition

Method specification for attributes is available here: [Method specification](https://www.fastify.io/docs/latest/Routes/#full-declaration)

> :information_source: attributes `url` and `method` are dynamically provided

Allowed attributes mapped to Http methods in module:

- delete
- get
- head
- patch
- post
- put
- options

## :arrow_forward: Skipping files

to skip file in routes directory, prepend the `.` or `_` character to filename

examples:

```text
routes
├── .ignored-directory
├── _ignored-directory
├── .ignored-js-file.js
├── _ignored-js-file.js
├── .ignored-ts-file.ts
├── _ignored-ts-file.ts
├── ignored-js-test.test.js
└── ignored-ts-test.test.ts
```

> :warning: also any `*.test.js` and `*.test.ts` are skipped!

this is useful if you want to have a lib file which contains functions that don't have to be a route, so just create the file with `_` prepending character

### Visualization of this Repo.

![Visualization of this repo](./diagram.svg)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Related

[Fastify - AutoRoutes](https://github.com/GiovanniCardamone/fastify-autoroutes)
