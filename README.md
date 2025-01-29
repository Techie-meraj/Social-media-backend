**PostMaster-App Backend**

### **Backend Features**

#### 1. **Server Setup**:
   - **Express.js** is used to create the server and define API endpoints.
   - The server listens on a specified port 8080 to handle client requests.
   - Middleware such as `body-parser` and `cors` is configured to parse incoming requests and handle cross-origin requests, ensuring smooth communication between the frontend and backend.

#### 2. **MongoDB Connection**:
   - A connection to **MongoDB Atlas** is established using the `mongoose` library.
   - The database connection ensures high availability and scalability, handling user and post data securely.
   - Connection failures or errors are logged for troubleshooting.

#### 3. **Schema Design**:
   - **Mongoose Schemas** are used to define and structure the data stored in MongoDB.

   ##### **UserSchema**:
   - Fields:
     - **username**: A unique string identifying the user.
     - **email**: A unique string used for user authentication.
     - **password**: A hashed string for secure password storage.
     - **posts**: An array of references (IDs) linking posts created by the user.
   - Relationships:
     - Each user can create multiple posts, forming a one-to-many relationship between users and posts.

##### **PostSchema**:
   
   - Fields:
     - **title**: A string representing the post's title.
     - **description**: A string containing the post's content.
     - **image**: A string for the post's image (URL or base64 encoded).
     - **createdBy**: A reference (ID) linking the post to its creator.
   - Relationships:
     - Each post is linked to a specific user through the `createdBy` field.

#### 4. **CRUD Functionality**:
   - Comprehensive CRUD operations are implemented for both users and posts.

   ##### **User Operations**:
   - **Register**:
     - Users can create an account with their username, email, and password.
     - Passwords are hashed securely using `bcrypt` before storing them in the database.
   - **Login**:
     - Authenticates users by verifying their email and password.
     - On successful login, a JSON Web Token (JWT) is issued for secure session management.
   - **Get User Details**:
     - Fetches the details of the logged-in user, including their created posts.

   ##### **Post Operations**:
   - **Create Post**:
     - Allows logged-in users to create a post with a title, description, and image.
     - The post is saved to the database and associated with the logged-in user.
   - **Get All Posts**:
     - Returns a list of all posts from the database, displayed on the "Post" page in the frontend.
   - **Get My Posts**:
     - Retrieves only the posts created by the logged-in user for the "My Posts" page.
   - **Update Post**:
     - Updates the details of an existing post (e.g., title, description, or image).
     - Ensures that only the post's creator can make updates.
   - **Delete Post**:
     - Deletes a post from the database.
     - Ensures that only the post's creator can delete it.
     - Removes the post reference from the user's `posts` array.


#### 6. **Error Handling**:
   - Comprehensive error handling is implemented to ensure smooth backend functionality:
     - **Validation Errors**:
       - Checks for missing fields or invalid input during registration, login, or post creation.
     - **Database Errors**:
       - Handles connection issues or failed operations (e.g., when saving a post or user).
     - **Route Errors**:
       - Handles undefined routes with a `404 Not Found` response.

#### 7. **Folder Structure**:
   - The backend is organized into a modular structure for scalability and maintainability:
     ```
     backend/
     ├── models/
     │   ├── User.js         # User Schema
     │   ├── Post.js         # Post Schema
     ├── routes/
     │   ├── authRoutes.js   # Routes for login and registration
     │   ├── postRoutes.js   # Routes for post CRUD operations
     ├── controllers/
     │   ├── authController.js  # Logic for user authentication
     │   ├── postController.js  # Logic for post operations
     ├── config/
     │   ├── db.js          # MongoDB connection logic
     ├── server.js          # Main entry point
     ```

#### 8. **Technologies Used**:
   - **Node.js**: Runtime environment for backend development.
   - **Express.js**: Framework for building the server and handling routes.
   - **MongoDB (with Mongoose)**: Database for storing user and post data.
   - **JWT (jsonwebtoken)**: For secure authentication.
   - **bcrypt**: For hashing passwords.
   - **cors**: For enabling cross-origin requests.

#### 9. **Integration with Frontend**:
   - The backend communicates with the frontend through REST APIs, enabling functionalities such as:
     - User registration and login.
     - Fetching posts for the "Post" and "My Posts" pages.
     - Creating, updating, and deleting posts.
   - All user actions are authenticated using JWT tokens to ensure security.
