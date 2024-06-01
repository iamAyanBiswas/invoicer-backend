#  Invoicer-Backend


## Description
Invoicer is a full-stack invoice generator application that helps small businesses to track their sales .

## Table of Contents
- <a href="#Installation">Installation<a/>
- <a href="#Features">Features<a/>
- <a href="#API-Documentation">API-Documentation<a/>
- <a href="#Examples">Examples<a/>
- <a href="#Run">Run<a/>
- <a href="#Contributing">Contributing<a/>
- <a href="#License">License<a/>

## Installation
1. Clone this repository: `git clone https://github.com/iamAyanBiswas/invoicer-backend.git`
2. Install dependencies: `npm install`
3. Set up environment variables.

## Features
-  <b>Express.js</b> utilized for the backend .
-  <b>MongoDB</b> serves as the database .
-  <b>Mongoose</b> is employed as an Object Data Modeling (ODM) .
-  Authentication and authorization are managed with <b>JSON Web Token (JWT)</b>.
-  The <b>Mongodb aggregation pipeline</b> is used for filtering data from database.
-  <b>Multer<b> is utilized for storing files .
-  <b>Cloudinary</b> is utilized for storing files .
-  Users will have access to a complete invoice generation history .
-  Users will receive comprehensive tracking of their daily, weekly, and monthly sales .
-  Passwords are hashed using <b>bcrypt</b> .


## Usage
Provide a general description of how to use your backend. Include basic examples or code snippets.

## API-Documentation
Document your API endpoints, request/response formats, and any authentication mechanisms. Consider using tools like Swagger or Postman for detailed API documentation.

### Example API Routes
- `POST /api/sign-up`: Create new user through sign-up process using <b>Email and Password </b>.
- `POST /api/login`: Login user using <b>Email and Password </b>.
- `POST /api/views`: Update page views.
- `POST /api/user/profile`: Complete User profile.
- `POST /api//profile/request`: Get Profile data.
- `POST /api/invoice-generator`: Submit invoice data.
- `POST /api/invoice-generator/request`: Get invoice admin data.
- `POST /api/history`: Get invoices historical data.
- `POST /api/analytics`: Get full analytics data.

## Examples
Include additional examples or use cases related to your backend. Show how to perform common tasks or interact with your API.

## Tests
Describe what tests are included and how to run them. Encourage contributors to add tests for new features.

To run tests:
```bash
npm test




## License
Remember to replace placeholders (e.g., `Project Name`, `yourusername`, etc.) with your actual project details. Feel free to add more sections or customize it further based on your project's needs. Happy documenting! 😊🚀
