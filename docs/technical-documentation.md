# Technical Documentation

## Project Overview
This assignment is an improved version of my portfolio website from Assignment 1. It adds interactive features, uses localStorage to save the current theme, includes a project search feature, and a form validation system that gives feedback.

## Technologies and Tools Used
- HTML: The structure of the website.
- CSS: The styles for the page.
- JavaScript: The functionality of the page.
- ChatGPT: Used to assist with debugging and suggestions for tasks.

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

### 5. Project Search Filter
The projects section includes a search bar that filters projects based on user input.
JavaScript is used to compare the entered keyword with each project's 'data-search' value.
`FPGA` will show the first project.
`BFS` will show the second project.
`star` will show the third project.
`cloud` will show the `No projects found` message.

### 6. Greeting Message Based on the Time of Day
A greeting message is displayed above the navigation bar depending on the time of day.

## JavaScript Functions

### `toggleTheme()`
Switches between light and dark mode and saves the selected theme in localStorage.
      
### `themeDataHandling()`
Loads the last theme selected by the user when the page reloads.

### `greetingMessage()`
Displays a greeting message based on the time of day.
         
### `projectSearch()`
Filters the project cards based on the keywords entered in the search bar by the user.

### `formValidation()`
Validates the contact form and shows either a success message or an error message.  
      
## Learning Outcome
I improved my understanding of JavaScript and learned how usefulness localStorage can be for saving changes by the user and create a validation system to make my website more interactive and user-friendly. And with ChatGPT's assistance, I was able to understand how to use certain code and create useful functions that will help me in the future.
