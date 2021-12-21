import { describe, expect, it } from "vitest";
import { loadModule } from "../src/utils";

describe("loadModule", () => {
  it(`1 - Load Module`, () => {
    // get absolute path to the routes/index file.

    const absolutePath = require.resolve(
      "../example/typescript/routes/index.ts"
    );

    expect(JSON.stringify(loadModule(absolutePath))).toBe("{}");
  });
});
