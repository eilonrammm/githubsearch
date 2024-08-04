# GitHub Repositories Search

## Overview

This project is a simple GitHub repositories search application. The purpose of this project is to demonstrate coding skills by building a web application using Angular and .NET 6 (Web API). The application allows users to search for GitHub repositories, view search results, and bookmark their favorite repositories.

## Technologies Used

- **Frontend:** Angular (configured with Angular Material)
- **Backend:** .NET 6 (Web API)
- **Styling:** Bootstrap / Angular Material
- **Authentication:** JWT (JSON Web Token)

## Features

1. **Search GitHub Repositories:** 
   - Users can type a repository name or keyword to search for repositories.
   - The search request is handled on the server-side, fetching data from the GitHub API.
   
2. **Display Search Results:**
   - Search results are displayed as gallery items.
   - Each item includes the repository name, the owner's avatar, and a bookmark button.

3. **Bookmark Repositories:**
   - Users can bookmark repositories, which will be stored in the user's session (custom session implementation).
   
4. **Bookmark Screen:**
   - A separate screen is provided where users can view all their bookmarked repositories.

## Setup and Installation

### Prerequisites

- .NET 6 SDK
- Node.js (version 14 or higher)
- Angular CLI (version corresponding to Angular project setup)

### Backend Setup (.NET 6 Web API)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/github-repositories-search.git
   cd github-repositories-search/Backend
   ```

2. **Restore Dependencies:**

   ```bash
   dotnet restore
   ```

3. **Run the Application:**

   ```bash
   dotnet run
   ```

   The backend API will be running at `https://localhost:7217` and `http://localhost:5236` as specified in `launchSettings.json`.

### Frontend Setup (Angular)

1. **Navigate to the Frontend Directory:**

   ```bash
   cd github-repositories-search/Frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Angular Application:**

   ```bash
   ng serve
   ```

   The Angular application will be running at `http://localhost:4200`.

### Angular Project Configuration Details

- **Angular Version:** Angular CLI is configured with a schema matching your project's requirements.
- **Styles:** The project uses Angular Material with the `pink-bluegrey` theme.
- **Build Configurations:**
  - **Production:** Optimized for production with file replacements, output hashing, and build optimization.
  - **Development:** Configured for development with source maps, named chunks, and disabled optimization for easier debugging.

## Running the Project

1. Start the backend API by running `dotnet run` in the `Backend` directory.
2. Start the frontend Angular application by running `ng serve` in the `Frontend` directory.
3. Open your browser and navigate to `http://localhost:4200` to use the application.

## Usage

- **Search Repositories:** Type a keyword in the search bar and press "Enter" or click the search button.
- **Bookmark Repositories:** Click the bookmark button on any search result to save it to your session.
- **View Bookmarked Repositories:** Access the bookmark screen to see all your bookmarked repositories.

## Notes

- **JWT Authentication:** JWT is used for securing the API requests between the Angular frontend and .NET backend. Ensure you have proper handling for storing and sending the JWT token in your HTTP requests.
- **Custom Session Implementation:** Bookmarked repositories are stored in a custom session that persists while the user is logged in.

## Troubleshooting

- **401 Unauthorized Errors:** If you encounter a 401 error, ensure that the JWT token is being correctly stored and sent in the Authorization header of your API requests.
- **CORS Issues:** If you face cross-origin issues, ensure that CORS is properly configured on the backend.

## Additional Information

- **GitHub API:** The application interacts with the GitHub API to search for repositories. Make sure you have a stable internet connection to access the API.

## Conclusion

This project demonstrates a simple implementation of a GitHub repositories search page with bookmarking functionality. The clean and modular codebase, combined with comprehensive comments, ensures easy understanding and maintainability.
