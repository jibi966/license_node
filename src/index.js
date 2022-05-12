const express = require("express");
const connect = require("./configs/db");
const License = require("./models/license.model");
const Link = require("./models/link.model");
const Text = require("./models/text.model");
const Identifier = require("./models/identifier.model");
const OtherName = require("./models/otherName.model");
const app = express();

app.use(express.json());

// route for home
app.get("/", async (req, res) => {
  try {
    return res.json("welcome");
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// route for getting all data
app.get("/all", async (req, res) => {
  try {
    const licenses = await License.find().lean().exec();
    return res.status(200).send(licenses);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// route for creating a new license
app.post("/create-license", async (req, res) => {
  try {
    const license = await License.create(req.body);
    return res.status(200).send(license);
    return res.status(200).send({ message: "Welcome to database" });
  } catch (error) {
    return res.status(500).send({ message: "Error" });
  }
});

// create a new link inside license
app.post("/create-link", async (req, res) => {
  try {
    const license = await Link.create(req.body);
    return res.status(200).send(license);
    return res.status(200).send({ message: "Welcome to database" });
  } catch (error) {
    return res.status(500).send({ message: "Error" });
  }
});

// create a new identifier inside license

app.post("/create-identifier", async (req, res) => {
  try {
    const license = await Identifier.create(req.body);
    return res.status(200).send(license);
    return res.status(200).send({ message: "Welcome to database" });
  } catch (error) {
    return res.status(500).send({ message: "Error" });
  }
});

// create a new text inside license

app.post("/create-text", async (req, res) => {
  try {
    const license = await Text.create(req.body);
    return res.status(200).send(license);
    return res.status(200).send({ message: "Welcome to database" });
  } catch (error) {
    return res.status(500).send({ message: "Error" });
  }
});

// create a new other-name inside license

app.post("/create-other-names", async (req, res) => {
  try {
    const license = await OtherName.create(req.body);
    return res.status(200).send(license);
    return res.status(200).send({ message: "Welcome to database" });
  } catch (error) {
    return res.status(500).send({ message: "Error" });
  }
});
app.listen(3030, async (req, res) => {
  try {
    await connect();
    console.log("Listening on port 3030");
  } catch (e) {
    console.log(e);
  }
});
