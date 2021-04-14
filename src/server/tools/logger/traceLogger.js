import winston from "winston";

const logs = process.env.LOGS_FOLDER || "logs";

const logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: {
        date: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        appName: process.env.APP_NAME,
    },
    exitOnError: false,
    transports: [
        new winston.transports.Console({
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple(),
            ),
        }),
        new winston.transports.File({
            filename: `${logs}/combined.log`,
        }),
    ],
});

export default logger;
