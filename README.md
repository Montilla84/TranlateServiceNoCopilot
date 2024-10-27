# Translate Service

## Project Description

Translate Service is a web application designed to provide translation services for various languages. It allows users to translate text, manage their profiles, and access additional features such as postal code lookup and notifications.

## Getting Started

To get started with the Translate Service project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Montilla84/TranslateServiceNoCopilot.git
   cd TranslateServiceNoCopilot
   ```

2. Install dependencies for the client:
   ```sh
   cd my-app
   npm install
   ```

3. Install dependencies for the server:
   ```sh
   cd ../server
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `server` directory with the following content:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/miapp
     JWT_SECRET=your_jwt_secret
     ```

5. Start the server:
   ```sh
   npm run dev
   ```

6. Start the client:
   ```sh
   cd ../my-app
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:3000` to access the Translate Service application.

## Features

- User authentication (login and signup)
- Profile management
- Text translation
- Postal code lookup
- Notifications
- Language switching

## Technologies Used

- React
- TypeScript
- Vite
- Material-UI
- Axios
- i18next
- Express
- MongoDB
- JWT (JSON Web Token)

## Contributing

We welcome contributions to the Translate Service project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add your commit message"
   ```
4. Push your changes to your forked repository:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Project Structure

The project is divided into two main directories: `my-app` and `server`.

- `my-app`: Contains the client-side code of the application.
  - `src`: Contains the source code of the client application.
    - `components`: Contains reusable React components.
    - `pages`: Contains the main pages of the application.
    - `assets`: Contains static assets such as images and styles.
    - `i18n`: Contains the internationalization configuration and translation files.
    - `context`: Contains the context providers for managing global state.
    - `types`: Contains TypeScript type declarations.
    - `index.tsx`: The entry point of the client application.
  - `public`: Contains the public assets and the `index.html` file.
  - `package.json`: Contains the dependencies and scripts for the client application.

- `server`: Contains the server-side code of the application.
  - `src`: Contains the source code of the server application.
    - `controllers`: Contains the controller functions for handling API requests.
    - `models`: Contains the Mongoose models for the database.
    - `routes`: Contains the route definitions for the API endpoints.
    - `middleware`: Contains the middleware functions for handling authentication and other tasks.
    - `config`: Contains the configuration files for the server.
    - `server.ts`: The entry point of the server application.
  - `package.json`: Contains the dependencies and scripts for the server application.
