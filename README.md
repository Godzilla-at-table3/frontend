# frontend

## Authors:
[Kenny Lino](https://github.com/kennywlino)

[Nick Seidel](https://github.com/enviouscodefellow)

[TJ Parker](https://github.com/orgs/Godzilla-at-table3/people/tj-parker)

[Monica Ramirez](https://github.com/mramirez92)


## Cooperation Plan

Every person on your team is an asset. This is your chance to discover the hidden strengths and areas for growth for each team member.

Describe at least:

- What are the key strengths of each person on the team?
  - Kenny: Leadership, Technical skills, Communication
  - Monica: Curiosity, Communication, Driven
  - TJ:
  - Nick: Leadership, Processes, Flexibility

- How can you best utilize these strengths in the execution of your project?
  - Kenny:
  - Monica: Inspire innovation out of the box thinking.
  - TJ:
  - Nick: Work with members for effective methods to accomplish our goals and work plans.

- In which professional competencies do you each want to develop greater strength?

  - Kenny: Curiosity, Technical Skills
  - Monica: Technical Skills, Tool Competency, Innovation
  - TJ:
  - Nick: Technical Skill on backend/frontend, Creativity

Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?
Review the code in the morning and speak about modifications made the night before merging to main branch.
Divide the work from to do list.
Break off and work on functions.
Check in when a feature is complete and push to own feature branch/staging.
NOTE: Undoing, Redoing, Replacing, or otherwise steamrolling the project as an individual is considered to be unacceptable. Account for the inevitable divergence of ideas, execution tasks, and assignments of duties here.

## Conflict Plan

Your team should agree on a process for handing disagreements, should they arise. It is better to have a plan in place ahead of time so you can all refer back to it when necessary.

- What will be your group’s process to resolve conflict, when it arises?

  - Team meeting, to discuss issues and concerns.

- What will your team do if one person is taking over the project and not letting the other members contribute?

  -Team meeting, to discuss issues and concerns. Make sure the workload is divided fairly at the start of day to try to avoid this kind of issue.

- How will you approach each other and the challenges of the project knowing that it is
impossible for all members to be at the exact same place in understanding and skill level?
  - Creating a safe space to allow for questions and exploration.

- How will you raise concerns to members who are not adequately contributing?
  - Team meeting to discuss if there are any blockers that we can help overcome.

- How and when will you escalate the conflict if your resolution attempts are unsuccessful?
  - We will reach out to an instructor when we as a team cannot come to a resolution.

## Communication Plan

Before beginning to tackle the project, determine how your group will communicate with each other. This is not an individual effort. Make sure everyone feels comfortable with the identified methods of speaking up.

Describe at least:

- Hours of Communication:

  - Kenny: 9am -6pm PST
  - Monica: 9am - 6pm PST
  - Tj:
  - Nick: 9am - 6pm PST, outside these times may still be available depending on the day ;)

- Communication Platforms:
  - Slack, Remo

- Break schedule:
  - Flexible, 10 minutes every hour or when needed with a Lunch break at 12 pm PST

- What is your plan if you start to fall behind?
  - Team meeting, focus on the MVP.

- How will you communicate after hours and on the weekend?

  - Communicate through slack and relate any concerns and questions there.

- What is your strategy for ensuring everyone’s voice is heard?

  - Check in on each other at the start of the day and throughout the work day.

- How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

  - Include everyone and ask for their insight on each topic.

## Work Plan

Explain your work plan to track whether everyone is contributing equally to all parts of the project, and that each person is working on “meaty” problems. This should prevent “lone wolf” efforts and “siloed” efforts.
NOTE: While researching and experimentation is always encouraged, writing and/or committing code to the project on your own during non-working hours or over the weekend is never acceptable. This puts the entire project at risk. Be explicit in calling out your work hours and the distribution of tasks.

Describe at least:

- How you will identify tasks, assign tasks, know when they are complete, and manage work in general?

  - Creating wireframe for each page that note features needed on page.
  - Divide tasks by features needed on that work day.
  - Keep track of progress on trello or Github,

- What project management tool will be used?

  - Trello or Github

## Git Process

Plan out what your team’s Git workflow looks like for coding tasks.

Describe at least:

- What components of your project will live on GitHub?
  - The front end and the backend.

- How will you share the repository with your teammates?
  - We will have one repository that each of us will fork and clone to our own local machines.

- What is your Git flow?

  - Push the feature to its own branch, merge to staging, and if everything coincides with each other merge staging to Main.
  - Main branch: for the most recently deployed product
  - Staging: Stage for current workday features
  - Individual branches for features.

Will you be using a PR review workflow? If so, consider:

- How many people must review a PR?

  - At least 2 people will review the PR for the feature branch

- Who merges PRs?

  - One of the two reviewers will merge to staging.

- How often will you merge?

  - Merge feature branches to staging at the end of work day and Merge to Main in the morning in case changes had to be made.

- How will you communicate that it’s time to merge?

  - Request a team huddle, and reach out via slack.
  
## User Stories

Music Discovery – As a user, I want to be able to discover new music inspired by images. 

- Feature Tasks
  - Users will have multiple images to choose from 
  - Based on user selection, a track will be rendered 
  - Track information will be displayed 

- Acceptance Tests
  - Users will have the ability to choose an image and receive a track corresponding to the image description/qualities. 
  - Track information will be displayed after clicking. 

Song info – As a user, I want to be able to see the title and artist of that song so that I can obtain artist information.

- Feature Tasks
  - Track will display info: artist, track name, album.
- Acceptance Tests
  - Successfully retrieve data from Spotify API and display appropriate information in component

Saved Recommendations – As a user, I want to be able to save my recommendations and return them later.

- Feature Tasks
  - Users can log in with Auth0
  - Users can opt to choose what they want to save
  - Users can go back and see what tracks they discovered (and possibly the image associated)
- Acceptance Tests
  - Ensure that users can successfully login/logout
  - Ensure that users can successfully retrieve the tracks they've discovered

User Interface – As a user, I want to interact with an easy-to-read interface

- Feature Tasks
  - Bootstrap components will be implemented
  - Fonts and sizes will be readable
  - Instructions  explaining functionality will be displayed somewhere on page 
- Acceptance Tasks
  - Bootstrap components will be displayed using flex.
  - Font sizes will be readable and contrast with the background color/image. 
  - Instructions will be displayed on the main page  

Image Choice – As a user I want to be able to have random multiple image options to choose from.

- Feature Tasks
  - Random images will be displayed 
  - Selection renders track based on image
- Acceptance Tests
  - Track is relatively related to the image.
  - The image does not always give us the same track.

## Software Requirements:

### Vision

- What is the vision of this product? - To create an intersection of visual arts and music 

- What pain point does this project solve? - Creates a new avenue for targeted song recommendation

- Why should we care about your product? - You should care because new methods of content curation will lead to fresher recommendations and thus increased engagement

### Scope (In/Out)

- IN (What will it do?): 
  - The web app will provide images for the user to choose from
  - Based on image selection, the web app will render a track that will have the image's descriptive properties match some part of the track title. 
  - Possibly allow users to discover new music based on simple images. 

- OUT (What will it not do?):

  - Become a mobile app.
  - Create new music
  - Save previously seen images to local storage or cache.

## Minimum Viable Product vs Stretch Goals

### What will your MVP functionality be?

  - The MVP functionality of this application is to take a description of an image from the Unsplash API and using any/all of the words in the description to get a random song on Spotify.

### What are your stretch goals?

- Integrate a Computer Vision API such as Google Cloud Vision API to take in any random image provided, generate labels and/or description to open up the possible images a user could use.
Instead of generating a single song, generate a whole playlist.

### What stretch goals are you going to aim for?

- Integrate the Computer Vision API to expand possible images used.

### Functional Requirements

- A user can select an image from Unsplash and get a song
- A user can login and save the song they got 
- A user can access all of the songs that they had generated

## Data Flow

1. Web app displays random images from Unsplash API. 
2. Front-end(user) makes an image selection, that selection is sent to our local server. 
3. Local server processes the GET request and communicates with Spotify API using schema defined. 
4. Spotify API will respond with data matching request. 
5. Local server will send the requested data to the front end to store in state.  
6. Front end will use a function to randomly choose a song to display. 
7. Front end will display the received data to the user.

Non-Functional Requirements
Protects user’s Spotify account data. Implements Auth0 in such a way so that relevant data is displayed to the user and other user data is not
Interface is clear and the user is able to interact with it intuitively and effectively.
