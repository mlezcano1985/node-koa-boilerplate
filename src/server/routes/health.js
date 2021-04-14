import Router from "koa-router";

const router = new Router({
    prefix: "/health",
});

/**
 * @typedef { Object } Health
 * @property { String } status
 * @property { String } date
 * @property { String } name
 */

router.get("health", "/", (ctx) =>
    ctx.ok({
        status: "running",
        date: new Date().toISOString(),
        name: process.env.APP_NAME,
    }),
);

export default router;
