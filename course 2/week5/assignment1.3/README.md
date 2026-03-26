# Assignment 1

## How to run your server

1. Open a terminal in `course 2/week5/assignment1.3`
2. Install dependencies:

```bash
npm install
```

3. Make sure your `.env` file contains a valid `DATABASE_URL`
4. Run the database migration:

```bash
npm run migrate
```

5. Seed the database with test data:

```bash
npm run db:seed
```

6. Start the server:

```bash
npm run start
```

For development with auto-reload, you can run:

```bash
npm run dev
```

The server runs on `http://localhost:3000`.

## How to test routes

You can test the routes with your browser, Postman, Insomnia, or `curl`.

### GET all users

```bash
curl http://localhost:3000/userlanguages
```

### GET users by language

Example:

```bash
curl http://localhost:3000/userlanguages/English
```

### POST create a new user

```bash
curl -X POST http://localhost:3000/userlanguages \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"test.user@mail.com\",\"age\":25,\"languages\":[\"English\",\"Swedish\"]}"
```

### PUT update a user by email

Example:

```bash
curl -X PUT http://localhost:3000/userlanguages/test.user@mail.com \
  -H "Content-Type: application/json" \
  -d "{\"age\":26,\"languages\":[\"English\"]}"
```

### DELETE all users under 18

```bash
curl -X DELETE http://localhost:3000/deleteUsersU18
```

### Test ping route

```bash
curl http://localhost:3000/ping
```

## What new routes you created

The following routes were created in this assignment:

- `GET /userlanguages` - returns all users
- `GET /userlanguages/:language` - returns users who speak a specific language
- `POST /userlanguages` - creates a new user
- `PUT /userlanguages/:email` - updates a user by email
- `DELETE /deleteUsersU18` - deletes all users younger than 18

There is also a simple test route:

- `GET /ping` - checks that the server is running
