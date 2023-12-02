# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# FavLinks Project

### Here's a video:
![favlinks](https://github.com/AmJoy01/favlinks/assets/93353341/9813d21c-14ef-40a5-8b96-a2f61a13594f)

https://github.com/AmJoy01/favlinks/assets/93353341/6d0571c2-811b-4540-83fd-40880947ee6e


### Here are the steps:

- [x] Look through the App.jsx
- [x] Look through all of the files in the components folder for TODOs
- [x] Create a simple HTML table using JSX in the Table.jsx
- [x] Render your Table component properly in LinkContainer.jsx
- [x] Review the code in TableHeader and TableBody
- [x] Change your Table component to render the TableHeader and TableBody components
- [x] Pass a prop called linkData to your Table component from the LinkContainer component
- [x] Access and show data passed from LinkContainer in TableBody
- [x] Create a state object in our LinkContainer to hold an array called favLinks
- [x] Create a removeLink function in the LinkContainer class that updates the state and removes an item from favLinks
- [x] Create a prop called removeLink that passes your removeLink function to your Table component
- [x] Create a button in your TableBody with an onClick that calls this.props.removeLink and passes the index of the table row
- [x] Create a Form component in your Form.jsx file with inputs and labels for name and URL
- [x] Set the initial state of the Form to be an object with empty properties for a link name and URL
- [x] Update the state of the Form every time the name or URL field is changed
- [x] Render the Form component below the Table component in your LinkContainer
- [x] Create a function called handleSubmit on the LinkContainer to update the state of this.state.favLinks and add new favLink from Form
- [x] Add the handleSubmit as a parameter to your Form component
- [x] Create a method called submitForm that calls the handleSubmit and passes the Form data and resets the state of the Form values to be empty
- [x] Add a submit button to the Form that calls submitForm in its onClick parameter

