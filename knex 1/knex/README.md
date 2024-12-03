# Assignment: Create a Post Table with a Foreign Key

In this assignment, your task is to create a new feature in the application: a `posts` table that associates posts with users. Follow the steps below to complete this assignment.

---

## Assignment Objectives

### 1. Create a New Migration
- Generate a new migration file to create a `posts` table.
- Ensure the `posts` table has a foreign key that references the `users` table. This will establish a relationship indicating that each post belongs to a user.

### 2. Define Models
- Create or update the necessary models to interact with the `posts` table and its relationship to the `users` table.

### 3. Implement Routes
- Add routes for creating, retrieving, updating, and deleting posts.
- Ensure the routes enforce the relationship between users and posts.

### 4. Run the Project
- Use `npm run dev` to start the development server.
- Test the new feature using your preferred tools (e.g., Postman, browser, or CLI).

---

## Steps to Complete the Assignment

### 1. Set Up the Migration
- Generate a new migration file.
- Define the schema for the `posts` table, including:
  - A primary key.
  - A foreign key that references the `users` table.
  - Additional fields for storing post-specific information (e.g., title, content).

### 2. Update the Models
- Define a model for the `posts` table.
- Ensure the model includes methods to:
  - Retrieve posts for a specific user.
  - Create a new post associated with a user.

### 3. Create the Routes
- Add routes to handle:
  - Creating a new post.
  - Retrieving all posts or posts for a specific user.
  - Updating an existing post.
  - Deleting a post.
- Ensure proper validation and error handling.

### 4. Test Your Implementation
- Start the server using `npm run dev`.
- Verify the new feature by testing the routes and database interactions.

---

## Submission Instructions

1. Push your code to a GitHub repository.
2. Include the migration file, models, routes, and any additional logic required.
3. Write a brief explanation of your approach and any challenges you encountered in your repository's `README.md` file.

---

## Running the Server

To start the development server, use:

```bash
npm run dev

Good luck, and happy coding! 🎉