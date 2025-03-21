# Project Specification: "hno"

## Overview
"hno" is a Hacker News client built using Vite, React, TypeScript, Tailwind CSS, and React Query. The main goal is to create an MVP that provides a smooth and responsive user experience for browsing and interacting with Hacker News stories and comments.

## Requirements
1. **Story Feed**
   - Numbered pages with 20 stories per page.
   - Filters provided by the Hacker News API (best, new, etc.).
   - Story items are clickable and open in a full-screen modal.

2. **Comments Section**
   - Nested comments with indentation and vertical lines.
   - Only initially visible comments are loaded first, with remaining comments loaded in the background.

3. **Top Bar**
   - Title ("hno").
   - Dark/light mode toggle button.
   - Simple design, no additional buttons or icons.

4. **Error Handling**
   - Display errors via popups that disappear shortly.
   - Users can close error popups instantly.

5. **Tech Stack**
   - Vite
   - React
   - TypeScript
   - Tailwind CSS
   - React Query (for API requests and state management)

## Architecture Choices
1. **Single Page Application (SPA)**
   - The app will be a single page that dynamically updates based on user actions.
   - React Router can be used for managing the modal view for stories.

2. **Component Structure**
   - `Header`: Contains the title and dark/light mode toggle.
   - `StoryFeed`: Displays the list of stories with pagination and filters.
   - `StoryItem`: Represents each story in the feed.
   - `StoryModal`: Displays the full content of a story and its comments in a modal.
   - `Comment`: Represents each comment with nesting support.

3. **State Management**
   - React Query will manage API requests and caching.
   - Local state will handle UI-specific states like dark/light mode and modal visibility.

## Data Handling
1. **Fetching Stories**
   - Use the Hacker News API to fetch stories based on the selected filter.
   - Implement pagination to load stories in pages of 20.

2. **Fetching Comments**
   - Fetch only the initially visible comments first.
   - Load remaining comments in the background for a smooth UX.

3. **Dark/Light Mode**
   - Check the system preference on initial load.
   - Allow users to toggle between dark and light mode.

## Error Handling
1. **Error Popups**
   - Display error messages in popups.
   - Popups disappear automatically after a few seconds.
   - Users can close popups instantly.

## Testing Plan
1. **Unit Tests**
   - Test individual components and their logic.
   - Ensure proper rendering and behavior of components like `Header`, `StoryFeed`, `StoryModal`, and `Comment`.

2. **Integration Tests**
   - Test the interaction between components.
   - Verify data fetching and state management using React Query.

3. **End-to-End Tests**
   - Use tools like Cypress or Playwright to simulate user interactions.
   - Test the entire user flow including story navigation, filtering, and comment loading.
