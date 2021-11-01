### Objective

Your assignment is to implement a website showcasing and notifying visitors about
the next SpaceX rocket launch, and displaying details about next launches.
Use JavaScript and React.

### Brief

You're the last Front-End developer on earth. Everyone is leaving and going to Mars,
to live a safer, cooler life there. The one problem is, people need to know when the next launch
is happening, and that's where you come in the picture. You need to build a website that informs
the public about the next launch, and give them information about future launches.
Everyone is counting on you, go write that website.

### Tasks

- Implement assignment using:
  - Language: **JavaScript**
  - Framework: **React**
- Build out the project to the designs inside the `/Designs` folder
- Connect your application to the **SpaceX-API** (Docs and playground: `https://docs.spacexdata.com/?version=latest`)
- Use the API to build two screens/sections like in the design
- The countdown should be live and specify days, hours, minutes and seconds
- The 'Upcoming Launches' screen/section should display the mission name, date, and launchpad like in the design
- The countdown and upcoming launches table can be implemented either in seperate screens (implement navigation)
  or simply with different sections in the page, just make them intuitive and fluid
- Add a share buttons for social media platforms, to share the next launch with friends
- Fetching should be done safely, with a fallback when an error occurs
- Each launch should have a 'Bookmark' or 'Favorite' button, that adds it to a seperate 'Favorites'
  table/screen. Implement using local storage (either save the launches data or its id for
  later fetching)

### API Endpoints

- Next Launch Counter: 'https://api.spacexdata.com/v3/launches/next'
- Upcoming Launches: 'https://api.spacexdata.com/v3/launches/upcoming'

With these endpoints, a simple GET request will provide you all the data needed for the tasks, no authentication required.

### Deliverables

Make sure to include all source code in the repository. To make reviewing easier, include a fully built version of your assignment in a folder named **public**.

### Evaluation Criteria

- **JavaScript** best practices
- Show us your work through your commit history
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Testing: is the system adequately tested? do your components have unit tests?
- Responsiveness and full mobile compatibility
- Elegantly use placeholders/skeletons when fetching data

