# react-app

This is a web application that serves as a content sharing platform. Users can sign in, follow different domains of interest, view posts within these domains, and create their own posts. The application features a dashboard for easy navigation and content discovery.

## Key Features

This application provides a rich user experience for content sharing, structured around the following key features and pages:

*   **User Authentication (`/SignIn-Form`, `/`)**:
    *   Secure sign-in using username and password.
    *   Displays clear error messages for invalid credentials or missing inputs.
    *   Includes a link/option for user registration (Sign Up).
    *   Redirects to the Dashboard upon successful authentication.

*   **Main Dashboard (`/homeScreen`)**:
    *   Serves as the central hub after login.
    *   Displays a primary `TimeLine` of posts, likely aggregated from various domains.
    *   Features a persistent side `Menu` for navigation, accessing different domain types, and viewing pending requests or notifications.
    *   Includes a `DashboardHeader` for consistent branding and potential user-specific controls.
    *   Fetches and presents initial data like domain types and a general list of posts.

*   **Domain Specific View (`/followingDomain/:domainId`)**:
    *   Provides a focused view of a single domain that the user follows.
    *   Dynamically loads and displays the description and posts specifically for the selected domain ID.
    *   Integrates into the standard `Dashboard` layout, replacing the general timeline with `DomainDetails` (which includes the posts from that domain).
    *   The side `Menu` may update to show requests or actions relevant to the viewed domain.

*   **Post Specific View (`/followingDomain/:domainId/post/:postId` or `/:domainType/post/:postId`)**:
    *   Offers a detailed presentation of an individual post.
    *   Accessible either via a specific followed domain context or through a general domain type.
    *   The `PostDetails` component displays the full post content (e.g., title, body, author, comments).
    *   Rendered within the `Dashboard` layout, with `PostDetails` replacing the main timeline.

*   **Create Post (`/createPost`)**:
    *   Allows users to compose and publish new content.
    *   Presents a form within the `Dashboard` layout.
    *   Form fields include:
        *   Post Title.
        *   Domain Selection (from a list of followed domains).
        *   Tag Selection (tags are dynamically loaded based on the chosen domain).
        *   Post Description (main content area).
    *   Includes client-side validation to ensure all required fields are completed before submission.
    *   A "Submit Post" button to publish the content.

## Key Technologies

This project is built with a modern JavaScript stack, including:

*   **React**: A JavaScript library for building user interfaces.
*   **MobX**: For scalable and simple state management.
*   **React Router**: For declarative routing in the application.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Storybook**: For developing UI components in isolation and creating a component library.
*   **Jest & React Testing Library**: For writing unit and integration tests.
*   **Prettier**: For automated code formatting to ensure consistent style.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `npm run deploy`

Builds the app for production to the `build` folder.<br />
Deploys the build folder to S3 bucket from cloud9 environment.

### `npm run storybook`

Starts the Storybook development server on [http://localhost:8080](http://localhost:8080).<br />
This allows you to view and interact with UI components in isolation.

### `npm run build-storybook`

Builds Storybook as a static web application for deployment.<br />
The output is typically generated in the `storybook-static` folder.

### `npm run pretty`

Formats code in the `src` directory using Prettier.<br />
This helps maintain a consistent code style across the project.

## Contributing

Contributions are welcome! If you're planning to contribute, please ensure your code adheres to the project's style guidelines.

You can format your code using Prettier by running:

```bash
npm run pretty
```

This will help maintain a consistent codebase.
