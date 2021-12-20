// in this test we will check whether the function isAcceptableFile works as expected.
// it will take urls of files and then check whether it returns true or fastifyFileRoutesPlugin
import { statSync } from "fs";
import { describe, expect, it } from "vitest";
import { isAcceptableFile } from "../src/utils";

describe("isAcceptableFile", () => {
  // testing acceptable file - returns true
  it("1 - Acceptable File", () => {
    const absolutePath = require.resolve(
      "../example/typescript/routes/index.ts"
    );
    const combinedStat = statSync(absolutePath);

    expect(isAcceptableFile(absolutePath, combinedStat)).toBe(true);
  });

  it("2 - Unacceptable File", () => {
    const absolutePath = require.resolve("./ignored/_ignored.ts");
    const combinedStat = statSync(absolutePath);

    expect(isAcceptableFile(absolutePath, combinedStat)).toBe(false);
  });

  it("3 - test File", () => {
    const absolutePath = require.resolve("./ignored/index.test.ts");
    const combinedStat = statSync(absolutePath);

    expect(isAcceptableFile(absolutePath, combinedStat)).toBe(false);
  });

  it("4 - Spec File", () => {
    const absolutePath = require.resolve("./ignored/index.spec.ts");
    const combinedStat = statSync(absolutePath);

    expect(isAcceptableFile(absolutePath, combinedStat)).toBe(false);
  });

  it("5 - Ignored . File", () => {
    const absolutePath = require.resolve("./ignored/.ignored.ts");
    const combinedStat = statSync(absolutePath);

    expect(isAcceptableFile(absolutePath, combinedStat)).toBe(false);
  });

  it("6 - Acceptable File 2", () => {
    const absolutePath = require.resolve(
      "../example/typescript/routes/profile/[game].ts"
    );
    const combinedStat = statSync(absolutePath);

    expect(isAcceptableFile(absolutePath, combinedStat)).toBe(true);
  });

  it("7 - Ignored Folder", () => {
    const absolutePath = require.resolve("./ignored/_ignore_me/game.ts");
    const combinedStat = statSync(absolutePath);

    expect(isAcceptableFile(absolutePath, combinedStat)).toBe(true);
  });
});
