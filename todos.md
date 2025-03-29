# Tasks Left

## Table of Contents

- [Tasks Left](#tasks-left)
  - [Table of Contents](#table-of-contents)
  - [Implement Story Modal](#implement-story-modal)
  - [Fetch and Display Comments](#fetch-and-display-comments)
  - [Dark/Light Mode Support](#darklight-mode-support)
  - [Error Handling and Notifications](#error-handling-and-notifications)
  - [Improve UI/UX](#improve-uiux)
  - [Unit and Integration Testing](#unit-and-integration-testing)
  - [End-to-End Testing](#end-to-end-testing)
  - [Deployment and Optimization](#deployment-and-optimization)
  - [Future Todos](#future-todos)
  - [App-Wide Date Formatting](#app-wide-date-formatting)
  - [diverses](#diverses)

## Implement Story Modal

- [x] Create a `StoryModal` component that opens when a story is clicked.
- [x] Fetch and display full story details in the modal.
- [x] Implement smooth transitions for opening and closing the modal.

## Fetch and Display Comments

- [x] Implement a `Comment` component to display nested comments.
  - [x] Create the structure of the `Comment` component.
  - [x] Add logic to display nested comments.
- [x] Load only initially visible comments first.
  - [x] Fetch and display the first level of comments.
- [ ] Fetch remaining comments in the background for a smoother experience.
  - [ ] Add logic to fetch nested comments in the background.
- [x] Implement indentation and vertical lines for nested comments.
  - [x] Add CSS styles for indentation and vertical lines.

## Dark/Light Mode Support

- [ ] Implement a system to detect and apply system preference on load.
  - [ ] Add logic to detect system preference.
  - [ ] Apply the detected preference on load.
- [ ] Add a toggle button in the `Header` for manual switching.
  - [ ] Create a toggle button component.
  - [ ] Add the toggle button to the `Header` component.
- [ ] Store preference in local storage for persistence.
  - [ ] Add logic to store the preference in local storage.
  - [ ] Retrieve the preference from local storage on load.

## Error Handling and Notifications

- [x] Implement a global error-handling mechanism.
- [x] Show errors as dismissible popups that disappear after a few seconds.
- [x] Ensure error messages are meaningful and provide user feedback.

## Improve UI/UX

- [ ] Add animations and transitions for modals and popups.
  - [x] Add CSS animations for modals.
  - [ ] Add CSS animations for popups.
- [ ] Optimize layout for mobile responsiveness.
  - [ ] Add responsive styles for mobile devices.
  - [ ] Test the layout on different screen sizes.
- [ ] Improve typography and spacing for readability.
  - [ ] Adjust font sizes and weights.
  - [ ] Adjust spacing between elements.

## Unit and Integration Testing

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

## End-to-End Testing

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

## Deployment and Optimization

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

## Future Todos

- [ ] Add favicon.
- [ ] Check package.json to see which dependencies are actually dev dependencies.
- [ ] Avoid using setters as props.
- [ ] Use a skeleton component for loading states.
- [ ] Consider moving custom hooks to a separate file.

## App-Wide Date Formatting

- [ ] Implement consistent date formatting across the application.
  - [ ] Choose a date formatting library (e.g., date-fns).
  - [ ] Update all date displays to use the chosen formatting.
  - [ ] Ensure consistency in date formatting across all components.

## diverses

- [ ] überall error popup implementieren
- [ ] jdie ersten comments sollten keine vertikale linie haben
- [ ] $ npm i
(node:78784) ExperimentalWarning: CommonJS module /Users/dom/.nvm/versions/node/v23.1.0/lib/node_modules/npm/node_modules/debug/src/node.js is loading ES Module /Users/dom/.nvm/versions/node/v23.1.0/lib/node_modules/npm/node_modules/supports-color/index.js using require().
Support for loading ES Module in require() is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

added 198 packages, and audited 199 packages in 8s

57 packages are looking for funding
  run `npm fund` for details

1 moderate severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
