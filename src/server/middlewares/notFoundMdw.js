/**
 *
 * @param {import('koa').Context} ctx
 */

const notFoundMdw = async (ctx) => {
    const msg = `${ctx.request.method} ${ctx.request.path}`;
    ctx.notFound({
        message: `No endpoint matched your request: ${msg}`,
    });
};

export default notFoundMdw;
