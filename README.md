User Management API - Completed Challenge

During this challenge I manged to build a fully functional API that allows users to perform CRUD operations on a collection of users.

Endpoints:

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

JSend Specification
I ensured that all JSON responses from my API adhere to the JSend specification. This consistency in response format makes your API predictable and user-friendly.

Testing
I tested each route using Thunder Client or another API testing tool, validating that the API works as expected.
