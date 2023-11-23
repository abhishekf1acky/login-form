# Login App

This project is a production-ready login form built with React and Redux. It uses a dummy login API for authentication, making it a great starting point for testing or building out a larger application.

## Tools and Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **React Router**: Declarative routing for React.
- **react-redux**: Official React bindings for Redux.
- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.
- **Axios**: Promise based HTTP client for the browser and node.js.
- **react-icons**: Utilize ES6 imports that allows you to include only the icons that your project is using.

## Folder Structure

- `node_modules/`
- `public/`
  - `index.html`
  - `manifest.json`
- `src/`
  - `components/`
    - `shared/`
      - `Input.jsx`
      - `Button.jsx`
    - `LoginForm.jsx`
    - `index.js`
  - `hooks/`
    - `useFetchData.js`
    - `useLocalStorage.js`
    - `index.js`
  - `pages/`
    - `HomePage.jsx`
    - `LoginPage.jsx`
    - `ProtectedRoute.jsx`
    - `index.js`
  - `store/`
    - `authSlice.js`
    - `formSlice.js`
    - `store.js`
  - `App.jsx`
  - `index.jsx`
  - `index.css`

## Installation & Setup

Follow these steps to install and run this project locally:

### 1. Clone the repository

First, you'll need to clone the repository to your local machine. You can do this with the following command:

```bash
git clone https://github.com/your-username/project-name.git

```

### 2. Navigate to the project directory

Change to the project directory with:

```
cd project-name
```

### 3. Install the dependencies

Next, you'll need to install the project's dependencies. In the project directory, you can run:

```
npm install
```

This command installs a package, and any packages that it depends on.

### 4. Start the development server

To start the development server, use:

```
npm start
```

Open http://localhost:3000 to view the project in the browser.

##Available Scripts
In the project directory, you can also use the following scripts:

```

npm run dev: Starts the development server.
npm run build: Builds the app for production in the dist folder.
npm run serve: Locally previews the production build.
```
