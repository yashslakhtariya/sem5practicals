const express = require("express");
const app = express();
const fs = require("fs").promises;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const jsonfile = "./user.json";

async function read() {
  try {
    const data = await fs.readFile(jsonfile, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
}

async function write(users) {
  try {
    await fs.writeFile(jsonfile, JSON.stringify(users, null, 2));
  } catch (error) {
    throw error;
  }
}

app.get("/user", async (req, res) => {
  res.send("Welcome to YSL User Database!");
});

app.get("/user/list", async (req, res) => {
  try {
    const users = await read();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/user/:username", async (req, res) => {
  const username = req.params.username;
  try {
    const users = await read();
    const user = users.find((user) => user.username === username);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/user/add", async (req, res) => {
  const newUser = req.body;
  if (
    !newUser.username ||
    !newUser.id ||
    !newUser.password ||
    !newUser.occupation
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const users = await read();
    if (users.some((user) => user.username === newUser.username)) {
      return res.status(409).json({ error: "Username already exists" });
    }
    users.push(newUser);
    await write(users);
    res.json({ message: "User added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/user/update/:username", async (req, res) => {
  const username = req.params.username;
  const updatedFields = req.body;
  try {
    const users = await read();
    const index = users.findIndex((user) => user.username === username);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedFields };
      await write(users);
      res.json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/user/delete/:username", async (req, res) => {
  const username = req.params.username;
  try {
    const users = await read();
    const index = users.findIndex((user) => user.username === username);
    if (index !== -1) {
      users.splice(index, 1);
      await write(users);
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = 4200;
app.listen(port, () => {
  console.log(`\n\tThe server is running on port ${port}\n`);
});
