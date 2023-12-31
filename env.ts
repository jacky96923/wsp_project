import { config } from "dotenv";
import populateEnv from "populate-env";

config();

export let env = {
  SESSION_SECRET: "",
  PORT: 8200,
  DB_NAME: "",
  DB_USERNAME: "",
  DB_PASSWORD: "",
  FAKE_SESSION: 1,
};

populateEnv(env, { mode: "halt" });
