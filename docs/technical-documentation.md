# Technical Documentation

## Project Overview
This assignment is a continuation of my portfolio website developed throughout the last three assignments. It brings together interactive features, API integration, stronger JavaScript logic, state management, performance improvements, and a creative feature into a polished and responsive personal web application that is ready to be shared publicly.

## Technologies and Tools Used
- HTML: The structure of the website.
- CSS: The styles for the page.
- JavaScript: The functionality of the page.
- ChatGPT: Used to assist with debugging and suggestions for tasks.
- GitHub Pages: Used to deploy the website publicly.

## Features and Functionalities

### 1. Responsive Layout
The website adjusts its layout based on the screen size using media queries to improve usability on different devices.

### 2. Light and Dark Mode Theme Toggle with localStorage
A button in the navigation bar allows the user to switch between light and dark mode.
JavaScript is used to:
- switch between light and dark mode.
- update the button icon.
- save the selected theme using localStorage.
- load the saved theme when the page is reloaded.

### 3. Form Validation and Feedback
The contact form is validated using JavaScript.
The form checks if all fields are filled and if the email format is correct.
If validation fails, an error message is shown. If validation succeeds, a success message is shown.

### 4. Animations and Transitions
The website uses CSS transitions and animations to improve user experience by:
- Adding a hover effect on cards and buttons.
- Animating success and error messages.
- Smooth visual transitions.

### 5. Project Search, Filter, and Sort
The Projects section allows the user to:
- search projects by keyword
- filter projects by type
- sort projects by title

JavaScript compares the entered keyword with each project's `data-search` value and also checks the selected filter and sort options before displaying the results.

Example:
- `FPGA` will show the first project
- `BFS` will show the second project
- selecting `Game` will show the JavaFX project
- using a search or filter with no match will show the `No projects found` message

### 6. Greeting Message Based on the Time of Day
A greeting message is displayed above the navigation bar depending on the time of day.

### 7. GitHub API Integration
The website connects to the GitHub API to fetch public repositories dynamically.

JavaScript is used to:
- send a request using `fetch()` and return repository data
- sort repositories by the most recently updated
- display up to 6 repositories
- show an error message if the API request fails

### 8. Visitor Name Saving with localStorage
The visitor’s name is saved using `localStorage` when the contact form is submitted successfully.
This allows the website to:
- display a welcome message in the About section
- remember the visitor name after the page is refreshed

### 9. Site Viewing Counter
A counter is displayed in the About section to show how long the visitor has been viewing the site.
JavaScript updates the counter every second using `setInterval()`.

### 10. Back-to-Top Button
A back-to-top button appears when the user scrolls down the page.
When clicked, it smoothly scrolls the page back to the top.
This improves navigation and makes the page easier to use.

### 11. Live Deployment with GitHub Pages
The website is deployed publicly using GitHub Pages so it can be accessed through a live link instead of only running locally.

### 12. Performance Improvements
- using `loading="lazy"` for project images
- keeping image sizes small
- removing repeated CSS and cleaning JavaScript issues like `;;`

## JavaScript Functions

### `toggleTheme()`
Switches between light and dark mode and saves the selected theme in `localStorage`.

### `themeDataHandling()`
Loads the last theme selected by the user when the page reloads.

### `greetingMessage()`
Displays a greeting message based on the time of day.

### `projectSearchControls()`
Handles project search, filtering, and sorting based on user input and selected options.

### `formValidation()`
Validates the contact form and shows either a success message or an error message.

### `loadGitHubRepos()`
Fetches repository data from the GitHub API, sorts it, and displays it in the GitHub section.

### `loadVisitorName()`
Loads the saved visitor name from `localStorage` and displays it in the About section.

### `siteCounter()`
Displays and updates a counter showing how long the visitor has been on the website.

### `backToTopButton()`
Displays the back-to-top button when the user scrolls down and smoothly returns the page to the top when clicked.

## Learning Outcome
In this assignment, I improved my understanding of JavaScript by learning how to connect to an external API, combine searching, filtering, and sorting logic, use `localStorage` for multiple features, create a counter using `setInterval()`, and add a back-to-top button to improve navigation. I also improved my understanding of deployment using GitHub Pages, debugging code, state management, and how small performance improvements can make a website more efficient and user-friendly.
