import express from "express";
import morgan from "morgan";
import cors from "cors";

import {
  getUsers,
  getUserByID,
  getUserByLastName,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./users.js";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    status: "success",
    data: "This route works!",
  });
});

//cors
app.use(
  cors({
    origin: "*",
  })
);
// get request user by last name

app.get("/users", async (req, res) => {
  const { last_name } = req.query;
  const usersByLastName = await getUserByLastName(last_name);

  if (usersByLastName.length > 0) {
    const response = {
      status: "success",
      data: usersByLastName,
    };
    res.status(200).json(response);
  } else {
    const response = {
      status: "error",
      data: "No user found with the provided last name",
    };
    res.status(404).json(response);
  }
});

// get request all users

app.get("/users", async (req, res) => {
  const users = await getUsers();
  if (users.length > 0) {
    const response = {
      status: "success",
      data: users,
    };
    res.status(200).json(response);
  } else {
    const response = {
      status: "error",
      data: "No users found",
    };
    res.status(404).json(response);
  }
});

// get request user by ID

app.get("/users/:id", async (req, res) => {
  const userByID = await getUserByID(req.params.id);

  if (userByID.length > 0) {
    const response = {
      status: "success",
      data: userByID,
    };
    res.status(200).json(response);
  } else {
    const response = {
      status: "error",
      data: "No user found with the provided ID",
    };
    res.status(404).json(response);
  }
});

// post request - adding a new user

app.post("/users", async (req, res) => {
  const newUser = await createUser(req.body);
  const response = {
    status: "success",
    data: newUser,
  };
  res.status(201).json(response);
});

// patch request - edit existing user

app.patch("/users/:id", async (req, res) => {
  const updatedUser = await updateUserByID(req.params.id, req.body);
  if (updatedUser.length > 0) {
    const response = {
      status: "success",
      data: updatedUser,
    };
    res.status(200).json(response);
  } else {
    const response = {
      status: "error",
      data: "No user was found with that ID",
    };
    res.status(404).json(response);
  }
});

// delete request - delete user

app.delete("/users/:id", async (req, res) => {
  const deleteUser = await deleteUserByID(req.params.id);
  if (deleteUser.length > 0) {
    const response = {
      status: "success",
      data: deleteUser,
    };
    res.status(200).json(response);
  } else {
    const response = {
      status: "error",
      data: "No user found with the provided ID",
    };
    res.status(404).json(response);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
