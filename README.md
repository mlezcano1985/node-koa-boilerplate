# NODE-KOA-BOILERPLATE

Base REST API application using NodeJS and Koa.

## Dependencies:

-   [NodeJS](https://nodejs.org/es/download/).
-   [Git](https://git-scm.com/downloads).
-   [Visual Studio Code](https://code.visualstudio.com/download) (Recommended)

## Features

-   ESM syntax supported thanks to [esm](https://github.com/standard-things/esm).
-   Logging using [Winston](https://github.com/winstonjs/winston).
-   Unit Test with [Jest](https://github.com/facebook/jest) testing framework.
-   Lint rules with [ESLint](https://eslint.org/).
-   Code format rules with [Prettier](https://prettier.io/).
-   Send HTTP request and view the response in Visual Studio Code directly with [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

## Husky Integration

Project include [Husky](https://typicode.github.io/husky/#/) package. If you want to use it, please refer to the [installation page](https://typicode.github.io/husky/#/?id=install).

## Visual Studio Code Integration

In case to use Visual Studio Code as your code editor, it is recommended to install the following extensions:

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

### Debug

Project has debug configuration in `launch.json` file :grin:

## Environment variables

Create in the `src / server / environment /` folder, a file called `secrets.js`. You must define all your environment variables within this file. It is important to define at least these three variables.

```js
export default {
    APP_NAME: "Koa-API",
    PORT: "1234",
    NODE_ENV: "development",
};
```

## What's next?

-   Docker integration.
-   JWT authorization.
-   Error classes.

## Support?

Something missing? Is there a problem? Let me know! Feel free to contact me on [Twitter](https://twitter.com/mlezcano1985).

If you think you've encountered a problem, please report it using the [GitHub issue tracker](https://github.com/mlezcano1985/node-koa-boilerplate/issues).
