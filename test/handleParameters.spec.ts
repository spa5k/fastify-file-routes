import { describe, expect, it } from "vitest";
import { handleParameters } from "./../src/utils/handleParameters";

describe("handleParameters", () => {
  it(`1 - [spark]`, () => {
    expect(handleParameters("[spark]")).toBe(":spark");
  });

  it(`2 - index`, () => {
    expect(handleParameters("index")).toBe("index");
  });

  it(`3 - user/:id`, () => {
    expect(handleParameters("/user/[id].ts")).toBe("/user/:id");
  });

  it(`4 - user Profile`, () => {
    expect(handleParameters("/user/[...id]/profile")).toBe("/user/*/profile");
  });

  it(`5 - profile/settings.ts`, () => {
    expect(handleParameters("/profile/settings")).toBe("/profile/settings");
  });

  it(`6 - profile/:id/spark`, () => {
    expect(handleParameters("/profile/[id]/spark.ts")).toBe(
      "/profile/:id/spark"
    );
  });
});
