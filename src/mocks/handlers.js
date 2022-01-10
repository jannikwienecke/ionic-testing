// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/login", (req, res, ctx) => {
    // Persist user's authentication in the session

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({ login: "success" })
    );
  }),

  rest.get("/test", (req, res, ctx) => {
    // Persist user's authentication in the session

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
];
