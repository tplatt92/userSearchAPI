import fs from "node:fs/promises";
import * as path from "path";
import { PassThrough } from "node:stream";
import { v4 as uuidv4 } from "uuid";

const filepath = path.join(
  "c:",
  "Users",
  "thoma",
  "Documents",
  "schoolOfCode",
  "Week4",
  "bc15-w4-recap-task-build-a-rest-api-tplatt92",
  "users.json"
);

// function to get all users

export async function getUsers() {
  try {
    // read file fs module
    const users = await fs.readFile(filepath);
    // parse it as json
    const parsedUsers = JSON.parse(users);
    // return the object;
    return parsedUsers;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
}

// function to retrieve a user by ID

export async function getUserByID(id) {
  try {
    // read file fs module
    const users = await fs.readFile(filepath);
    // parse it as json
    const parsedUsers = JSON.parse(users);
    // loop through the length of the array
    for (let i = 0; i < parsedUsers.length; i++) {
      // if the current iterations id matches the id return that index
      if (parsedUsers[i].id === id) {
        return parsedUsers[i];
      }
    }
    // otherwise return null
    return null;
  } catch (error) {
    console.error("Error retrieving users by ID:", error);
    throw error;
  }
}

// function to retrieve a user by last name

export async function getUserByLastName(lastName) {
  try {
    // Read user data from the file and parse it as JSON
    const users = await fs.readFile(filepath, "utf-8");
    const parsedUsers = JSON.parse(users);
    // Filter users by last name
    const filteredUsers = parsedUsers.filter(
      (user) => user.last_name.toLowerCase() === lastName.toLowerCase()
    );
    // Return the filtered users
    return filteredUsers;
  } catch (error) {
    // Handle errors, such as file not found or JSON parsing error
    console.error("Error retrieving users by last name:", error);
    throw error;
  }
}

// function to add a new user

export async function createUser(newUser) {
  try {
    // created user object
    const createdUser = {
      id: uuidv4(),
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      catchphrase: newUser.catchphrase,
    };
    const users = await fs.readFile(filepath);
    const parsedUsers = JSON.parse(users);
    parsedUsers.push(createdUser);
    const updatedUsers = JSON.stringify(parsedUsers);
    await fs.writeFile(filepath, updatedUsers);
    return createdUser;
  } catch (error) {
    console.error("Error creating new user", error);
    throw error;
  }
}

// function to update a users information

export async function updateUserByID(id, updatedUser) {
  try {
    // read and parse file
    const users = await fs.readFile(filepath);
    // loop through file to find id
    const parsedUsers = JSON.parse(users);
    // if there is a match - update the variables
    for (let i = 0; i < parsedUsers.length; i++) {
      if (parsedUsers[i].id === id) {
        parsedUsers[i].first_name = updatedUser.first_name;
        parsedUsers[i].last_name = updatedUser.last_name;
        parsedUsers[i].email = updatedUser.email;
        parsedUsers[i].catchphrase = updatedUser.catchphrase;
        // stringify and re-write file
        const updatedUsers = JSON.stringify(parsedUsers);
        await fs.writeFile(filepath, updatedUsers);
        return parsedUsers[i];
      }
      return null;
    }
  } catch (error) {
    console.log("Error updating user");
    throw error;
  }
}

// function to delete a user

export async function deleteUserByID(id) {
  try {
    const users = await fs.readFile(filepath);
    const parsedUsers = JSON.parse(users);
    for (let i = 0; i < parsedUsers.length; i++) {
      if (parsedUsers[i].id === id) {
        parsedUsers.splice(i, 1);

        const updatedUsers = JSON.stringify(parsedUsers);
        await fs.writeFile(filepath, updatedUsers);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.log("Failed to delete user");
    throw error;
  }
}
