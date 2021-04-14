import "./server/environment";
import app from "./server";

app.start(process.env.PORT);
