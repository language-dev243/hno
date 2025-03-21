# Step-by-Step Blueprint for "hno"

## 1. Initial Project Setup
- Initialize the project with Vite, React, TypeScript, Tailwind CSS, and React Query.
- Set up a basic folder structure for components, hooks, and utilities.
- Configure ESLint, Prettier, and TypeScript for best practices.
- Implement a simple home page with a placeholder header.

## 2. Basic Routing and Layout
- Set up React Router for navigation.
- Implement a basic layout with a `Header` component.
- Configure a route for the main story feed.
- Add a placeholder for modal navigation for story details.

## 3. Fetch and Display Stories
- Integrate React Query for API calls.
- Fetch and display a list of stories from the Hacker News API.
- Implement pagination (20 stories per page) with filtering options.
- Ensure proper error handling with error popups.

## 4. Implement Story Modal
- Create a `StoryModal` component that opens when a story is clicked.
- Fetch and display full story details in the modal.
- Implement smooth transitions for opening and closing the modal.

## 5. Fetch and Display Comments
- Implement a `Comment` component to display nested comments.
- Load only initially visible comments first.
- Fetch remaining comments in the background for a smoother experience.
- Implement indentation and vertical lines for nested comments.

## 6. Dark/Light Mode Support
- Implement a system to detect and apply system preference on load.
- Add a toggle button in the `Header` for manual switching.
- Store preference in local storage for persistence.

## 7. Error Handling and Notifications
- Implement a global error-handling mechanism.
- Show errors as dismissible popups that disappear after a few seconds.
- Ensure error messages are meaningful and provide user feedback.

## 8. Improve UI/UX
- Add animations and transitions for modals and popups.
- Optimize layout for mobile responsiveness.
- Improve typography and spacing for readability.

## 9. Unit and Integration Testing
- Write unit tests for all core components (`StoryFeed`, `StoryItem`, `StoryModal`, `Comment`).
- Test API integration and data fetching with React Query.
- Ensure the pagination and filtering logic works correctly.

## 10. End-to-End Testing
- Use Cypress or Playwright to simulate real user interactions.
- Test navigation, filtering, modals, and error handling.
- Ensure dark/light mode toggles correctly.

## 11. Deployment and Optimization
- Optimize performance with lazy loading and caching.
- Deploy the app using Vercel or Netlify.
- Monitor performance and errors in production.

---

# Code Generation Prompts

## Prompt 1: Project Initialization

You are a TypeScript and React expert. Write a shell command to initialize a new Vite project with React, TypeScript, and Tailwind CSS. Then, provide a minimal `App.tsx` file with a basic layout and a `Header` component.

## Prompt 2: Routing Setup

Implement React Router in the project. Set up a basic `Router` with a home page for the story feed and a route for the story modal. Ensure the layout persists across navigation.

## Prompt 3: Fetching and Displaying Stories

Use React Query to fetch and display a paginated list of Hacker News stories. Implement pagination (20 stories per page) and allow filtering (top, new, best). Use Tailwind CSS for styling.

## Prompt 4: Implementing Story Modal

Create a `StoryModal` component that fetches and displays the full story details when a user clicks on a story. Implement smooth transitions for opening and closing the modal.

## Prompt 5: Fetching and Displaying Comments

Create a `Comment` component that fetches and displays nested comments. Load only initially visible comments first, then fetch remaining comments in the background. Implement indentation and vertical lines for nested comments.

## Prompt 6: Dark/Light Mode

Implement a dark/light mode toggle in the `Header` component. Detect system preference on load and allow users to switch themes manually. Store preference in local storage.

## Prompt 7: Error Handling

Implement a global error-handling mechanism that displays dismissible error popups. Ensure errors disappear automatically after a few seconds and allow users to close them manually.

## Prompt 8: Testing

Write unit tests for the `StoryFeed`, `StoryItem`, `StoryModal`, and `Comment` components using Jest and React Testing Library. Ensure correct rendering and data fetching behavior.

## Prompt 9: End-to-End Testing

Use Cypress or Playwright to create end-to-end tests for user interactions, including navigation, filtering, modals, and error handling.

## Prompt 10: Deployment

Provide steps to optimize and deploy the project using Vercel or Netlify. Ensure performance optimizations such as lazy loading and caching are implemented.

