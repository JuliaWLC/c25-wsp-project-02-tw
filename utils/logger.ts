import winston from "winston";

const logFormat = winston.format.printf(function (info) {
  const date = new Date().toISOString();
  return `${date}[${info.level}]: ${info.message}`;
});

export const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(winston.format.colorize(), logFormat),
  transports: [new winston.transports.Console()],
});