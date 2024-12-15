import { Router } from "express";
import { addNewMessage, getMessageById, messages } from "../db.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
	res.status(200).render("index", { title: "Mini_Msg", messages });
});

indexRouter.get("/new", (req, res, next) => {
	try {
		res.render("form", { title: "formMessage" });
	} catch (error) {
		console.log(error);
	}
});

indexRouter.post("/new", async (req, res) => {
	const { messageText, authorName } = req.body;
	if (!messageText || !authorName) {
		return res.status(400).send("Message and author are required");
	}

	await addNewMessage(authorName, messageText);
	res.redirect("/");
});

// show each single message

indexRouter.get("/messages/:msgName", async (req, res) => {
	const message = await getMessageById(req.params.msgName);

	if (!message) {
		return res.status(404).send("Message not found");
	}

	res.status(200).render("details", { message: message });
});

export default indexRouter;
