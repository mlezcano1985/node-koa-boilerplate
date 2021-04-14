import Router from "koa-router";
import errorMdw from "../middlewares/errorMdw";
import traceMdw from "../middlewares/traceMdw";
import notFoundMdw from "../middlewares/notFoundMdw";
import health from "./health";

const router = new Router();

//Middlewares
router.use(errorMdw);
router.use(traceMdw);

const api = new Router({
    prefix: "/api/v1",
});

// Routes
api.use(health.routes());

router.use(api.routes());
router.use(notFoundMdw);

export default router;
