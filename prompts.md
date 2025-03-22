# prompts

## step 1: idea honing/brainstorming

Ask me one question at a time so we can develop a thorough, step-by-step spec for this idea. Each question should build on my previous answers, and our end goal is to have a detailed specification I can hand off to a developer. Let’s do this iteratively and dig into every relevant detail. Remember, only one question at a time.

Here’s the idea with some notes i have so far:

i want to build a like reddit app-looking overlay for hackernews.com

- mobile friendy
- dark/light mode
- readonly, no login, posting, answering, commenting, whatever just reading the api to get stories and posts

- there should be a top bar with the title (hno) and a button to change dark/light mode
- then a bar beneath with a dropdown menu to allow filtering the stories (best, new, etc), here you need to help me whats possible with the api
- beneath is the mainfeed showing the stories ( it shows the time of the story, the auhtor, the domain name of the link (if its a link to a specific github project for example, it should show the domain github.com), count of upvotes, count of comments, title)
- the storyfeed should be realized with pagination, numberd pages, page numbers at the bottom, 20 stories per page, the comments with infinte scrolling, We'll load only the initially visible comments first, and then load the remaining comments in the background for a smooth user experience.
- for the comments section, we'll include the comment text along with author name, timestamp, and comment score.
- we'll implement nested comments with indentation and vertical lines similar to the Reddit app design
- the app will check the user's system preference for dark/light mode by default, then allow them to manually override if desired
- make sure external links open in new tabs
- error and missed api calls and such should be displayed via popups
- we'll design the error popups to disappear automatically after a short duration, but also provide an option for the user to close them instantly.
- when you click on a story, it should open a full screen modal with the comments etc
- react query/tanstack query for the api calls
-

techstack: vite react typescript tailwind

- i want to include ssr in react

also, i want to ship fast, no time for accessibility, internatianlozication, caching, etc, this will all come later. i want to have a working mvp as fast as possible

Now that we’ve wrapped up the brainstorming process, can you compile our findings into a comprehensive, developer-ready specification? Include all relevant requirements, architecture choices, data handling details, error handling strategies, and a testing plan so a developer can immediately begin implementation. please provide your answer in an codebox so i can copy-paste it into a md file. also i dont want to see any code yet, were still in the planning phase.

## step 2: planing

Draft a detailed, step-by-step blueprint for building this project. Then, once you have a solid plan, break it down into small, iterative chunks that build on each other. Look at these chunks and then go another round to break it into small steps. Review the results and make sure that the steps are small enough to be implemented safely with strong testing, but big enough to move the project forward. Iterate until you feel that the steps are right sized for this project.

From here you should have the foundation to provide a series of prompts for a code-generation LLM that will implement each step in a test-driven manner. Prioritize best practices, incremental progress, and early testing, ensuring no big jumps in complexity at any stage. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step.

Make sure and separate each prompt section. Use markdown. Each prompt should be tagged as text using code tags. The goal is to output prompts, but context, etc is important as well.
