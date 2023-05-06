# PortalEd

![logo1](https://user-images.githubusercontent.com/76506163/236370824-e533a022-758c-47d0-b1a6-6d896571e8d2.png)

# Synopsis

PortalEd is a web-based application for optimizing the partnership and communication between schools and the parents/guardians. Teachers observe their student’s attendance, behavior, and academic engagement and efficiently record them utilizing a simple and straight-forward color-based scheme.

Prompt notification and response to student infractions is necessary to effectively improve the learning environment. Too much time often elapses after an infraction, which can result in the loss of the optimal opportunity to address and rectify the incident and promote positive changes in the student’s conduct and habits.

This application automatically notifies the student’s parents and guardians and requires them to acknowledge awareness of their child's behavior, attendance, or academic alerts. With this expedient notification and response, the parents and guardians are more actively engaged and influencing their child’s education, growth, and success.

In addition to alerts, this application enables parents, guardians, and schools to analyze their student’s history and monitor for any positive or negative changes. With this wealth of information, informed-decisions can be made to improve the quality of learning.

# Installation

- Runs as an web application.
- Clone the Github repository to your local computer from here: https://github.com/bruteforceproject/PortalEd
- install Node.js (https://nodejs.org/en/download)
- cd frontend (Go to frontend folder of portel ED)
- npm install (Helps you install npm)
- Most of the libraries should be installed already in the code!
- To run the code, you need a Website browser in the local system.
- npm start (helps you run the code in browser)

# Deployment

### Please refer to the following software and systen requirements to ensure your machine can support our application.

**Software Requirements:**

- Node Js: v18.16.0. or later
- Studio Visual Code: 1.77.0 or later
- Any Compatible Browsers: Chrome, Safari, Edge, Firefox, etc
- Cloned Portal ED Repository folder

**System Requirements**

- Windows: 10 or later
- MacOS: X High Sierra or later
- 1.6 GHz or faster processor
- 1 GB of RAM

### Follow the steps below to deploy this project locally on your machine:

1. Open **Studio Visual Code**.

2. Go to **File** and click on **Open Folder**.

3. Locate your **Cloned Portal Ed Repository folder** and click on **Open**.

4. Once opened, navigate to **Terminal**.

5. Click anywhere inside the **Terminal** and input the following command:
   `cd frontend`

6. Next, input the following command in the **Terminal** which will run the application: `npm start`

# Testing

The purpose of tests in the PortalEd project is to ensure that the application is functioning correctly and efficiently. Tests play a crucial role in maintaining code quality, reliability, and functionality by identifying potential issues, bugs, or inconsistencies early in the development process. They help to:

- Validate the expected behavior of various features, such as attendance tracking, behavior monitoring, and academic progress reporting.

- Ensure that new features and updates do not introduce breaking changes or unintended side effects.

- Facilitate refactoring and optimization of the codebase by providing a safety net for developers to make changes without inadvertently breaking existing functionality.

- Improve collaboration between team members by making it easier to understand the intended behavior of the code and verify its correctness.

To run the tests for the PortalEd project, follow these instructions:

1. Ensure your development environment is set up correctly:

   - Install the required dependencies, such as the appropriate language runtime, package manager, and testing framework.

   - Make sure you have the latest version of the project code from the repository.

2. Install the necessary test dependencies:

   - Use the project's package manager to install the required testing libraries and tools. For example, if the project uses npm, run npm install in the project root directory.

3. Run the tests:

   - Depending on the testing framework and configuration, the command to run the tests may vary. For example, if the project uses a popular JavaScript testing framework like Jest, you can run the tests with npm test or yarn test.

   - If the project uses a different testing framework, refer to the framework's documentation for the appropriate command.

4. Review the test results:

   - The test runner should provide a summary of the test results, including any failed tests and error messages. Use this information to identify and fix any issues with the code.

By following these instructions, you can run the tests for the PortalEd project to ensure that it maintains a high level of code quality and functionality. Regularly running and updating tests throughout the development process is crucial for delivering a reliable and efficient application to help teachers, parents, and guardians better support their students' education.

- During the testing phase of our project, we utilized NPM (Node Package Manager) for testing purposes. We focused on testing our frontend to ensure that each view is properly styled and functions according to our desired specifications.

# Developer Instructions

- Required Software: Any IDE that is capable of editing, creating and running a react application.
-     -Teams preferred IDE: Visual Studio Code
- Required Libraries: This project has many packages built in, thus no additional packages are needed.
-       Note* (If having an issue running the program than downloading "react-scripts" may solve your issue. Enter "npm install react-scripts" in directory to fix                    issue.)
-       Dependencies for frontend include: "react", "user-event", "moment", "react-big-calendar", "react-dom", "react-router-dom", "react-scripts"
- Coding standards or style guidelines that contributors should follow.
-       -For certain features such as images for attendance, academics and behavior, three specific colors must be used (hex values):
-             - For good behavior: #558c3b (green)
-             - For infraction: #f2ca52 (yellow)
-             - For disciplinary action: #f25d50 (red)
-       - Images used for attendance, academics and behavior must be uniform. Images for these three are located in the "PortalEd/frontend/src/components/" directory             and named appropriately as "attendnace.png", "academics.png", "behavior.png"
- The project's file structure and organization, and purpose of key files or directories.
-      -all routing paths done in "App.js" located in: PortalEd/frontend/src/App.js
-      -all pages that are viewable by users located in "components" folder located in PortalEd/frontend/src/components
-      -main pages will be ".js" files instead of html since we are using react.
      -each page has a corresponding .css file that handles styling

# Timeline

List key milestones, how much we have left to do for 191, and what we expect to get done in 191

### Key Milestones:

- [x] Front-end Counselor View
- [x] Front-end Parent View
- [x] Front-end Teacher View
- [x] Setup MongoDB
- [x] Display Student-History
- [x] Student Average widget

### What's left to do for 190

- [ ] Establish consistent visual stype so the app looks cohesive and unified across all screens
- [ ] Database management
- [ ] Counselor View components

### What we expect to get done in 191

- Mongodb variables for student names
- Calculate and store student history and averages in database
- All components to be integrated in a way that data can be shared and access consistently

# Credits

PortalEd is a project created by Matthew Brimberry

The team programming this product is:

Javier Garcia | javiermgarcjr@gmail.com | https://github.com/JavierGarciaJr | https://www.linkedin.com/in/javier-garcia-b97409202/

Angel Castillo | angelcastillo@csus.edu | | https://github.com/ange1castillo

Ariel Manalo | arielrosemanalo@csus.edu | https://github.com/ArielManalo14 | https://www.linkedin.com/in/arielmanalo14/

Julian Calero

Ramez Hassan | mahshar0arm@gmail.com | https://github.com/ImRamez |

Rohit Agrawal | rohit777agrawal@gmail.com | https://github.com/rohit777agrawal | https://www.linkedin.com/in/rohit777agrawal/

Uriel Sombrerero | sombrerero5016@gmail.com | https://github.com/uriel-18 | https://www.linkedin.com/in/urielsombrerero/

Vardan Vardanyan | vardanvardanyan@csus.edu | https://github.com/GyumriV | https://www.linkedin.com/feed/?trk=onboarding-landing

# License

All right are observed. This project is not open source.
