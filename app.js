import express from "express";
import path from "path";
import url from "url";
import indexRouter from "./routers/indexRouter.js";


const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((req, res, next) => {
	console.log(`Request Method: ${req.method}, URL: ${req.url}`);
	next();
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`App is running on port : ${PORT}`);
});
