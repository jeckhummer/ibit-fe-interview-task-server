import * as express from "express";
import * as asyncHandler from "express-async-handler";
import * as cors from "cors";

import * as db from "./db";
import { getRandomDealsSet } from "./randomizer";
import { delay } from "./utils";

const PAGE_SIZE = 2;

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

const app = express();

app.use(express.json());
app.use(cors({
	origin: env === "development"
		? '*'
		: 'https://mango-deals.netlify.app'
}));

db.populate(getRandomDealsSet());

app.get("/deals", asyncHandler(async (req, res) => {
	await delay(2000);

	const page = parseInt(req.query.page?.toString() ?? '0') || 0;
	const data = db.read(page, PAGE_SIZE);

	res.json(data);
}));

app.use(((err, req, res, next) => {
	res.status(500);
	res.json({ error: err.stack || err })
}) as express.ErrorRequestHandler);

app.listen(port, () => {
	console.log(`Mango Deals server listening at http://localhost:${port}`);
});
