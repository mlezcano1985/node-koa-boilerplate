import { v4 as uuidv4 } from "uuid";

/**
 *
 * @param {import('koa').Context} ctx
 * @param {import('koa').Next} next
 */
const traceMdw = async (ctx, next) => {
    const { headers } = ctx.request;
    const traceID = headers["traceId"] || uuidv4();

    ctx.state.traceID = traceID;
    ctx.set("traceId", traceID);
    ctx.request.headers = {
        ...headers,
        traceId: traceID,
    };

    await next();
};

export default traceMdw;
