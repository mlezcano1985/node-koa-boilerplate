import traceLogger from "./traceLogger";

/**
 *
 * @param {string} message log message
 * @param {unknown} details details message
 * @returns { void }
 */
const log = (message, details) => {
    traceLogger.info({ message, details });
};

/**
 *
 * @param {string} message error message
 * @param {unknown} details details message
 * @returns { void }
 */
const error = (message, details) => {
    traceLogger.error({ message, details });
};

export default {
    log,
    error,
};
