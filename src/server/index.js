import Koa from "koa";
import respond from "koa-respond";
import bodyparser from "koa-bodyparser";
import compress from "koa-compress";
import helmet from "koa-helmet";
import koaLogger from "koa-logger";
import cors from "@koa/cors";
import logger from "./tools/logger";
import router from "./routes";

const app = new Koa();

if (process.env.NODE_ENV === "development") {
    app.use(koaLogger());
}

app.use(
    bodyparser({
        enableTypes: ["json"],
    }),
);
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(respond());

app.use(router.routes());

/**
 * Start Server
 * @param {Number} [port] Port for runnin app. Default value `1234`
 */
const start = (port = 1234) => {
    app.listen(port, () => {
        logger.log(`App running on port ${port}`);
    });
};

export default {
    start,
};
