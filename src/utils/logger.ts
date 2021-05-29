import { Logger } from "@tsed/logger";

export const logger: Logger = new Logger("Middleware");

logger.appenders
  .set("std-log", {
      type: "stdout",
      layout: {
        type: "console"
      }, 
      level: ["debug", "info", "trace"]
  });