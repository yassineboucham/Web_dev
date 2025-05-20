import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "items",
  password: "2002",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC");
  const items = result.rows;
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  db.query("INSERT INTO items (title) VALUES ($1)", [item], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error adding item to database");
    } else {
      console.log("Item added successfully");
    }
  });
  res.redirect("/");
});

app.post("/edit", (req, res) => {
  const id = req.body.updatedItemId;
  const set = req.body.updatedItemTitle;
  db.query("UPDATE items SET title = ($1) WHERE id = $2", [set, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating item in database");
    } else {
      console.log("Item updated successfully");
      res.redirect("/");
    }
  });
  console.log(id);
});

app.post("/delete", (req, res) => {
  const id = req.body.deleteItemId;
  db.query("DELETE FROM items WHERE id = $1", [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting item from database");
    } else {
      console.log("Item deleted successfully");
      res.redirect("/");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
