import { User } from "./schemas/User";
import "dotenv/config";
import { createSchema, config } from "@keystone-next/keystone/schema";
const databseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databseURL,
  },
  lists: createSchema({
    // Schema items
    User,
  }),
  ui: {
    // TODO: Change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session values here
});
