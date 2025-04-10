# Clone the repository

git clone https://github.com/venkataswamyMedidi/UserSearchApp

# Install dependencies
npm install
# OR
yarn install

# User Search React App - Setup Instructions
This document provides instructions on how to set up, run, and host the User Search React application that uses the RocketAPI for Instagram user search.

# Prerequisites

# Node.js (v14.0.0 or higher)
# npm (v6.0.0 or higher) or yarn
# RapidAPI account with access to RocketAPI

# Features
User-friendly search interface with real-time validation
Alphanumeric search with 30-character limit
Responsive design with a clean, modern UI
User profile cards displaying username, full name, and profile picture
API integration with RocketAPI for Instagram user search

# OR

# Installation

Create a new React application:

bashnpx create-react-app user-search-app
cd user-search-app

# Replace the files with the code provided:

# Replace src/App.js with the provided App.js code
Create and populate these new files:

src/components/SearchBar.js
src/components/UserGrid.js
src/components/UserCard.js
src/services/api.js


# Replace src/App.css with the provided CSS code

# API Key Security Note

The API key in this example is for demonstration purposes only.
For production applications, your API key should never be included directly in your code.
Even with environment variables, the key will be visible in the client-side JavaScript bundle.
For a production application, consider implementing a backend proxy service to make the API calls securely.

Running the Application Locally

# Start the development server:

bashnpm start
# or if using yarn
yarn start

# Access the application:

Open a web browser and navigate to http://localhost:3000
The application should now be running and you can search for users

# Contributing
Fork the repository.
Create a new branch.
Commit your changes.
Open a pull request.

# License
This project is licensed under the MIT License.
