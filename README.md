# Todo App

This is a simple Todo application built with React and Redux.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/MG-9205/MH_BLOGS.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
 npm run start
```


## Dependencies

- @reduxjs/toolkit: ^2.2.2
- @testing-library/jest-dom: ^5.17.0
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-redux: ^9.1.0
- react-router-dom: ^6.21.3
- react-scripts: 5.0.1
- web-vitals: ^2.1.4

## Project Structure

.src/
    .app/
        .store.js
    .components/
        .MainComponent.js
        .Pending.js
        .Complete.js
        .Total.js
    .features/
        .todoSilice.js
.App.css
.App.js
.index.css
.index.js
.public/
    .index.html


## Redux Setup

The `todoSilice.js` file defines the Redux slice for managing todos. It includes initial state, reducers for adding, removing, and updating todos.

## React Components

- **MainComponent**: The main component of the application. It includes routing and displays different components based on the current URL.
- **Pending**: Displays pending tasks with an option to mark them as completed.
- **Complete**: Displays completed tasks.
- **Total**: Displays all tasks with an option to delete them.

## Usage

- Users can add new tasks using the input field and the "Add" button.
- They can mark tasks as completed by checking the checkboxes next to each task.
- They can view pending or completed tasks by navigating to the respective routes.
- They can delete tasks by clicking the delete icon next to each task.

## Scripts

- `npm start`: Start the development server.
- `npm run build`: Build the project for production.
- `npm test`: Run tests.
- `npm run eject`: Eject from create-react-app for advanced configuration.

## Contributing

Contributions are welcome! Please follow the standard coding conventions and open a pull request for any bug fixes or feature enhancements.

## License

This project is licensed under the MH CODERS License 
