import logger from "../tools/logger";
import { getReasonPhrase } from "http-status-codes";

/**
 *
 * @param {import('koa').Context} ctx
 * @param {import('koa').Next} next
 */
const errorMdw = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        const { traceID } = ctx.state;
        ctx.status = err.statusCode || 500;
        const msg = getReasonPhrase(ctx.status) || "Internal Server Error";
        ctx.body = err.toJSON ? err.toJSON() : { message: msg, traceID };

        logger.error("Internal Error", {
            message: err.toString(),
            traceID,
        });
    }
};

export default errorMdw;
