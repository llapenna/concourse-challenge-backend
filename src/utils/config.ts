import { info } from "@/utils/logger";

/**
 * @description Checks if an environment variable exists
 * @param identifier Name of the environment variable
 * @returns Value of the environment variable if it exists, otherwise throws an error
 */
function checkVariable(identifier: string) {
  const variable = process.env[identifier];

  if (process.env.NODE_ENV !== "production")
    info(`Checking:\t${identifier} = '${variable}'`);
  if (typeof variable === "undefined") {
    throw new Error(`Environment variable "${identifier}" is not defined.`);
  } else return variable;
}

/**
 * @description Node environment. Could be 'production' or 'development'.
 */
export const NODE_ENV = checkVariable("NODE_ENV");

/**
 * @description Port number for the server to listen on.
 */
export const PORT = 4000;

/**
 * @description OpenAI API key.
 */
export const OPENAI_API_KEY = checkVariable("OPENAI_API_KEY");
