import fetch from "node-fetch";
import { describe, expect, it } from "vitest";

describe("Route Test", () => {
  it(`1 - Index Route`, async () => {
    // get absolute path to the routes/index file.

    const response = await fetch("http://localhost:3000");
    const data: { get: string } = (await response.json()) as { get: string };

    expect(data.get).toBe("index");
  });

  it(`2 - User Index Route`, async () => {
    // get absolute path to the routes/index file.

    const response = await fetch("http://localhost:3000/user");
    const data: { get: string } = (await response.json()) as {
      get: string;
    };

    expect(data.get).toBe("get user");
  });

  it(`3 - User Index Route - Post`, async () => {
    // get absolute path to the routes/index file.

    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
    });
    const data: { post: string } = (await response.json()) as {
      post: string;
    };

    expect(data.post).toBe("post user");
  });

  it(`4 - User [id] Route`, async () => {
    // get absolute path to the routes/index file.

    const response = await fetch("http://localhost:3000/user/1");
    const data: { id: string } = (await response.json()) as {
      id: string;
    };

    expect(data.id).toBe("1");
  });

  it(`5 - Profile [game] Route`, async () => {
    // get absolute path to the routes/index file.

    const response = await fetch("http://localhost:3000/profile/noice");
    const data: { game: string } = (await response.json()) as {
      game: string;
    };

    expect(data.game).toBe("noice");
  });

  it(`6 - Profile [...id] settings Route`, async () => {
    // get absolute path to the routes/index file.

    const response = await fetch(
      "http://localhost:3000/profile/spark/settings"
    );
    const data: { "*": string } = (await response.json()) as {
      "*": string;
    };

    expect(data["*"]).toBe("spark/settings");
  });

  it(`7 - Ignored Route Route`, async () => {
    // get absolute path to the routes/index file.

    const response = await fetch("http://localhost:3000/_ignore_me");
    const data: { message: string } = (await response.json()) as {
      message: string;
    };

    expect(data.message).toBe("Route GET:/_ignore_me not found");
  });
});
