## Recap task

The goal is to build an API that allows callers to perform CRUD operations against a collection of users. Take the time to familiarise yourself with the existing codebase, including any NPM scripts that have already been set up for you.

### Create your API routes

👉 Create a REST API using the user JSON data found in `users.json`. The API will feature the following endpoints:

| HTTP Method | Path       | Request Body (JSON)          | Response Body (JSON)         | Status Code | Description                    |
| ----------- | ---------- | ---------------------------- | ---------------------------- | ----------- | ------------------------------ |
| GET         | /users     |                              | An array of all user objects | 200         | Retrieve all users             |
| GET         | /users/:id |                              | A matching user object       | 200         | Retrieve a specific user by ID |
| POST        | /users     | A user object without the id | A newly created user object  | 201         | Creates a new user             |
| PATCH       | /users/:id | A partial user object        | An edited user object        | 200         | Updates a user                 |
| DELETE      | /users/:id |                              | A deleted user object        | 200         | Deletes a user                 |

An example user object looks like the following:

```json
{
  "id": "9fdcb510-7142-4889-afa0-aefdbcf55d97",
  "first_name": "Devi",
  "last_name": "Whale",
  "email": "dwhale0@last.fm",
  "catchphrase": "Synergized exuding firmware"
}
```

**IMPORTANT:** All JSON responses from your API should adhere to the [JSend](https://github.com/omniti-labs/jsend) specification. This specification provides a consistent structure for your responses, making your API more predictable and easier to interact with.

Remember to break down the task and tackle it step by step. You'll need to plan and implement `app.js`, `users.js` and test each route (using Thunder Client).

## Bonus challenges (_These are optional if you're ready for an extra challenge!_)

⭐ If you've finished everything above and have time left over, keep developing! Think through what ideas you can come up with to improve functionality.

This can include:

- Advanced Routing with Query Parameters
  - Search: Add a search feature on the /users endpoint. For instance, /users?name=ResourceName could return users with names matching the query.
  - Sorting: Allow sorting of users. For instance, /users?sort=name could return users sorted alphabetically by name.
- Error Handling and Responses
  - If a user with a specific ID isn't found, return a 404 Not Found status code along with a clear error message.
  - For other errors, such as server errors or bad request data, return appropriate status codes like 500 Internal Server Error or 400 Bad Request with clarifying error messages.
  - Implement middleware for error handling in your Express server.
- In a separate repository, create a frontend for your API and use a UI and fetch to interact with it.
