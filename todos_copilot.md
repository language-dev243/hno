# Step-by-Step Blueprint for "hno" 52 / 120

## 1. Initial Project Setup 27/27

- [x] Initialize the project with Vite, React, TypeScript, Tailwind CSS, and React Query.
  - [x] Run the command to create a new Vite project.
  - [x] Choose React and TypeScript as the project template.
- [x] Install Tailwind CSS.
  - [x] Run the command to install Tailwind CSS.
  - [x] Configure Tailwind CSS in the project.
- [x] Install React Query.
  - [x] Run the command to install React Query.
  - [x] Set up a basic configuration for React Query.
- [x] Set up a basic folder structure.
  - [x] Create a `components` folder.
  - [x] Create a `hooks` folder.
  - [x] Create a `utilities` folder.
- [x] Configure ESLint.
  - [x] Install ESLint.
  - [x] Create an ESLint configuration file.
  - [x] Add basic ESLint rules.
- [x] Configure Prettier.
  - [x] Install Prettier.
  - [x] Create a Prettier configuration file.
  - [x] Integrate Prettier with ESLint.
- [x] Configure TypeScript.
  - [x] Create a `tsconfig.json` file.
  - [x] Add TypeScript configurations.
- [x] Implement a simple home page.
  - [x] Create a `Home` component.
  - [x] Add a placeholder header to the `Home` component.

## 2. Basic Routing and Layout 9 / 11

- [x] Set up React Router.
  - [x] Install React Router.
  - [x] Configure the router in the project.
- [x] Implement a basic layout with a `Header` component.
  - [x] Create a `Header` component.
- [ ] Configure a route for the main story feed.
  - [x] Create a `StoryFeed` component.
  - [ ] Add a route for the `StoryFeed` component.
- [x] Add a placeholder for modal navigation for story details.
  - [x] Create a placeholder `StoryModal` component.
  - [x] Add logic to open the `StoryModal` when a story is clicked.

## 3. Fetch and Display Stories 10 / 13

- [x] Integrate React Query for API calls.
  - [x] Set up a basic query client.
  - [x] Create a custom hook for fetching stories.
- [x] Fetch and display a list of stories from the Hacker News API.
  - [x] Create a `StoryItem` component.
  - [x] Display the list of stories using the `StoryItem` component.
- [x] Implement pagination (20 stories per page) with filtering options.
  - [x] Add pagination controls.
  - [x] Implement logic to fetch the next 20 stories.
  - [x] Add filtering options.
- [ ] Ensure proper error handling with error popups.
  - [ ] Create an `ErrorPopup` component.
  - [ ] Display error popups when API calls fail.

## 4. Implement Story Modal 6 / 8

- [x] Create a `StoryModal` component that opens when a story is clicked.
  - [x] Set up the structure of the `StoryModal` component.
  - [x] Add logic to open the modal when a story is clicked.
- [x] Fetch and display full story details in the modal.
  - [x] Create a custom hook for fetching story details.
  - [x] Display story details in the `StoryModal` component.
- [ ] Implement smooth transitions for opening and closing the modal.
  - [ ] Add CSS transitions for the modal opening and closing.

## 5. Fetch and Display Comments 0 / 9

- [ ] Implement a `Comment` component to display nested comments.
  - [ ] Create the structure of the `Comment` component.
  - [ ] Add logic to display nested comments.
- [ ] Load only initially visible comments first.
  - [ ] Fetch and display the first level of comments.
- [ ] Fetch remaining comments in the background for a smoother experience.
  - [ ] Add logic to fetch nested comments in the background.
- [ ] Implement indentation and vertical lines for nested comments.
  - [ ] Add CSS styles for indentation and vertical lines.

## 6. Dark/Light Mode Support 0 / 9

- [ ] Implement a system to detect and apply system preference on load.
  - [ ] Add logic to detect system preference.
  - [ ] Apply the detected preference on load.
- [ ] Add a toggle button in the `Header` for manual switching.
  - [ ] Create a toggle button component.
  - [ ] Add the toggle button to the `Header` component.
- [ ] Store preference in local storage for persistence.
  - [ ] Add logic to store the preference in local storage.
  - [ ] Retrieve the preference from local storage on load.

## 7. Error Handling and Notifications 0 / 9

- [ ] Implement a global error-handling mechanism.
  - [ ] Create a global error handler.
  - [ ] Integrate the error handler with React Query.
- [ ] Show errors as dismissible popups that disappear after a few seconds.
  - [ ] Create a `DismissiblePopup` component.
  - [ ] Add logic to display error messages in the popup.
- [ ] Ensure error messages are meaningful and provide user feedback.
  - [ ] Write meaningful error messages.
  - [ ] Add logic to display user-friendly feedback.

## 8. Improve UI/UX 0 / 9

- [ ] Add animations and transitions for modals and popups.
  - [ ] Add CSS animations for modals.
  - [ ] Add CSS animations for popups.
- [ ] Optimize layout for mobile responsiveness.
  - [ ] Add responsive styles for mobile devices.
  - [ ] Test the layout on different screen sizes.
- [ ] Improve typography and spacing for readability.
  - [ ] Adjust font sizes and weights.
  - [ ] Adjust spacing between elements.

## 9. Unit and Integration Testing

- [ ] Write unit tests for all core components.
  - [ ] Write tests for `StoryFeed` component.
  - [ ] Write tests for `StoryItem` component.
  - [ ] Write tests for `StoryModal` component.
  - [ ] Write tests for `Comment` component.
- [ ] Test API integration and data fetching with React Query.
  - [ ] Write tests for data fetching hooks.
  - [ ] Mock API responses for testing.
- [ ] Ensure the pagination and filtering logic works correctly.
  - [ ] Write tests for pagination logic.
  - [ ] Write tests for filtering options.

## 10. End-to-End Testing 0 / 10

- [ ] Use Cypress or Playwright to simulate real user interactions.
  - [ ] Set up Cypress or Playwright in the project.
  - [ ] Write tests to simulate user interactions.
- [ ] Test navigation, filtering, modals, and error handling.
  - [ ] Write tests for navigation.
  - [ ] Write tests for filtering.
  - [ ] Write tests for modals.
  - [ ] Write tests for error handling.
- [ ] Ensure dark/light mode toggles correctly.
  - [ ] Write tests for dark/light mode toggle.

## 11. Deployment and Optimization 0 / 11

- [ ] Optimize performance with lazy loading and caching.
  - [ ] Implement lazy loading for components.
  - [ ] Set up caching for API responses.
- [ ] Deploy the app using Vercel or Netlify.
  - [ ] Choose a deployment platform (Vercel or Netlify).
  - [ ] Configure the project for deployment.
  - [ ] Deploy the app.
- [ ] Monitor performance and errors in production.
  - [ ] Set up monitoring tools (e.g., Sentry).
  - [ ] Monitor performance metrics.
  - [ ] Track and fix errors in production.

## 12. future todos 0 / 5

- [ ] add favicon
- [ ] check packagejson to see which deps are actually dev deps
- [ ] no setters as props
- [ ] loading should return a skeleton component
- [ ] put use effect in custum hook?
