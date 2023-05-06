# PortalEd

![logo1](https://user-images.githubusercontent.com/76506163/236370824-e533a022-758c-47d0-b1a6-6d896571e8d2.png)

# Synopsis

PortalEd is an web based application that allows teachers to be more closely connected with the parents and guardians of their students. Teachers can notify their students guardians on their attendance, behavior, and academic progress with the tap of a button using a traffic light based color scheme.

Often teachers and school faculty will send students home with paper slips indicating that their student has received an infraction, but they have no way of knowing if the guardians will see these papers or be the ones signing them. This application gives notifications to parents and guardians and prompts them to acknowledge their child's behavior, attendance, or academic alerts. This makes it so the parents and guardians are more involved in their students' education and that they get the necessary information to maximize their child's success.

This app also shows a students overview so that guardians, teachers, and councelors can be given the proper information to address any areas that may be of concern. This area will show the average score for the behavior, attendance, and academics of a student.

# Installation

(rohit)

- List any system requirements or compatibility information, such as operating system, hardware, or software versions.
- Specify any dependencies or libraries that need to be installed before the project can be set up.
- Provide a step-by-step guide on how to install the project, including all necessary commands or actions.
- If your project is hosted on a package manager (such as npm, pip, or RubyGems), include instructions on how to install it using the package manager.
- If your project needs to be cloned or downloaded from GitHub, include the appropriate command or link.
- Explain any configuration files, environment variables, or settings that need to be adjusted before using the project.
- Provide examples of configuration values and explain their purpose.
- Include instructions on how to verify that the installation was successful, such as running a specific command or script, or checking for expected output.

- Runs as an web application.
- Clone the Github repository to your local computer from here: https://github.com/bruteforceproject/PortalEd
- install Node.js (https://nodejs.org/en/download)
- Cd Frontend (Go to Frontend folder of portel ED)
- npm install (Helps you install npm)
- Most of the libraries should be installed already in the code!
- To run the code, you need a Website browser in the local system.
- npm start (helps you run the code in browser)

# Testing

(julian)

- Explain the purpose of tests in your project and how they help ensure code quality and functionality.
- Provide instructions on how to run the tests, including any necessary commands, environment setup, or dependencies.

  (ariel)

- Mention any testing frameworks or tools used in the project.
- If applicable, explain how to write new tests or modify existing ones.
- Indicate any known issues or limitations related to the tests.

- During the testing phase of our project, we utilized NPM (Node Package Manager) for testing purposes. We focused on testing our frontend to ensure that each view is properly styled and functions according to our desired specifications.

# Deployment

(ramez)

- Describe the deployment process for your project, including any prerequisites, such as system requirements or software dependencies.
- Deployment
  Prerequisites
  To deploy this project, we will need:
  • A machine running Windows, or macOS,
  • Node.js (version X or higher)
  • MongoDB (version X or higher)
  • A GitHub account

  Installation

1. Clone the repository from GitHub:

   git clone https://github.com/bruteforceproject/PortalEd.git

2. Install dependencies using npm (if it require for your local):

   npm install

   Building and running the application

3. Build the application:
   npm run build

4. Start the application:
   npm start

Deployment

5. Create an AWS or MongoDB account and provision the necessary resources (such as a database instance and storage bucket).

6. Follow the provider-specific instructions for deploying a Node.js application.

7. Set any necessary environment variables (such as database credentials) in the deployment environment.

Testing

8. Run tests using npm:

   Npm run test
   And
   To perform UI testing, we will create any testing framework based on Java and the Selenium web driver.

9. The test suite covers the following areas:
   • Unit tests for each module
   • Integration tests for the API endpoints
   • End-to-end tests for the entire application

Troubleshooting

1. If the application fails to start, check that all dependencies are installed and that any necessary environment variables are set correctly.

2. If tests fail, review the error messages, and update the relevant code or configuration to address the issues.

3. For additional support, contact [Javier Gracia].

(angel)

- Provide step-by-step instructions for deploying the project, including any necessary commands or configurations.
- Explain any environment-specific considerations, such as environment variables or configuration files.

# Developer Instructions

(vardan)

- Provide information on how to set up a development environment for your project, including required software, tools, and libraries.
- Required Software: Any IDE that is capable of editing, creating and running a react application.
-     -Teams preferred IDE: Visual Studio Code
- Required Libraries: This project has many packages built in, thus no additional packages are needed.
-       Note* (If having an issue running the program than downloading "react-scripts" may solve your issue. Enter "npm install react-scripts" in directory to fix                    issue.)
-       Dependencies for frontend include: "react", "user-event", "moment", "react-big-calendar", "react-dom", "react-router-dom", "react-scripts"
- Explain any coding standards or style guidelines that contributors should follow.
-       -For certain features such as images for attendance, academics and behavior, three specific colors must be used (hex values):
-             - For good behavior: #558c3b (green)
-             - For infraction: #f2ca52 (yellow)
-             - For disciplinary action: #f25d50 (red)
-       - Images used for attendance, academics and behavior must be uniform. Images for these three are located in the "PortalEd/frontend/src/components/" directory             and named appropriately as "attendnace.png", "academics.png", "behavior.png"
- Describe the project's file structure and organization, and explain the purpose of key files or directories.
-      -all routing paths done in "App.js" located in: PortalEd/frontend/src/App.js
-      -all pages that are viewable by users located in "components" folder located in PortalEd/frontend/src/components
-      -main pages will be ".js" files instead of html since we are using react.
      -each page has a corresponding .css file that handles styling

# Timeline

(uriel)
List key milestones, how much we have left to do for 191, and what we expect to get done in 191

# Credits

PortalEd is a project created by Matthew Brimberry

The team programming this product is:

Javier Garcia | javiermgarcjr@gmail.com | https://github.com/JavierGarciaJr | https://www.linkedin.com/in/javier-garcia-b97409202/

Angel Castillo

Ariel Manalo | arielrosemanalo@csus.edu | https://github.com/ArielManalo14 | https://www.linkedin.com/in/arielmanalo14/ 

Julian Calero

Ramez Hassan | mahshar0arm@gmail.com | https://github.com/ImRamez |

Rohit Agrawal | rohit777agrawal@gmail.com | https://github.com/rohit777agrawal | https://www.linkedin.com/in/rohit777agrawal/

Uriel Sombrerero

Vardan Vardanyan | vardanvardanyan@csus.edu | https://github.com/GyumriV | https://www.linkedin.com/feed/?trk=onboarding-landing

# License

All right are observed. This project is not open source.
