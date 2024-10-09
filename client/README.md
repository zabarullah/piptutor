# MERN Stack with TypeScript Project Template

This is a boilerplate template for a MERN (MongoDB, Express, React, Node.js) stack project with TypeScript and testing on the front-end with Jest and React Testing Library.


## Setup Instructions

### Prerequisites

- Node.js (>=18.16.0)
- npm (>=9.5.1)

### Installation

_1. Clone the repository:_

```sh
git clone https://github.com/zabarullah/piptutor.git
cd piptutor
```

_2. Install server dependencies in the root folder:_

```sh
npm install
```

_3. Install client dependencies(client folder):_

```sh
cd client
npm install
```

_4. Create .env files:_

- In the root directory, create a .env file with necessary environment variables for the server.
- In the client directory, create a .env file with necessary environment variables for the client.

### Running the Project

_1. Start the development servers concurrently:_

From the root directory:

```sh
npm run dev
```

This will start both the Express server and the React development server concurrently.

## Branch Structure

This project follows a branching strategy to maintain a clean and organized codebase. Each branch serves a specific purpose, allowing for easier collaboration and feature development. Below is a description of the branch types and their purposes:

### Main Branches

- **`main`**
  - **Purpose:** This branch contains the production-ready code. It reflects the latest stable version of the application.
  - **Usage:** Merge dev branches into this branch once they are complete, tested, and reviewed.

- **`dev`**
  - **Purpose:** This is the development branch where all new features and updates are merged, tested, before they are released to the main branch.
  - **Usage:** Developers should branch off from dev for new features. After developing a feature on a feature branch, it should be pushed to the remote repository, and a pull request (PR) should be created to merge it back into the dev branch. Once the PR is reviewed and approved, the changes can be merged into dev.
  
  DO NOT DEVELOP DIRECTLY ON THE main OR dev BRANCH.!!!! See below for more details.

### Feature Branches

Feature branches are created to develop new features or enhancements. The naming convention for feature branches is as follows:

- **`feature/[feature-name]`**
  - **Purpose:** This branch is dedicated to developing a specific feature of the application.
  - **Usage:** Create a feature branch when starting work on a new feature. For example, for a homepage layout, use `feature/homepage-layout`.

### Example Feature Branches

- **`feature/homepage-layout`**
  - **Purpose:** Develop the header, footer, and main layout components for the homepage.
  - **Usage:** Start with this branch to work on homepage-related features.


### Bug-fix Branches

Bug fix branches are created to fix bugs. The naming convention for bug-fix branches is as follows:

- **`bug-fix/[bug-name]`**
  - **Purpose:** This branch is dedicated to fixing a particular bug.
  - **Usage:** Create a bug-fix branch when starting work on a bug-fix. For example, for a homepage auth error, use `bug-fix/homepage-auth-error`.

### Example bug-fix Branches

- **`bug-fix/homepage-auth-error`**
  - **Purpose:** fix the auth error on this branch
  - **Usage:** Start with this branch to work on homepage related auth error

## Branching Guidelines

**Pull Latest Code**: 
   Before creating a new feature branch, developers should pull the latest code from the `dev` branch.
   ```sh
   git checkout dev
   git pull origin dev
   ```
**Create Feature Branch: Create a new branch for the specific feature you are working on**
   ```sh
   git checkout -b feature/{feature-name}
   ```
**Work on Feature: Make your changes and commit them to your feature branch**
   Update the CHANGELOG.md file with the work that has be done.
   ```sh
   git add .
   git commit -m "Implement feature {feature-name}"
   ```
**Push Feature Branch: Push your feature branch to the remote repository**
   ```sh
   git push origin feature/{feature-name}
   ```
**Raise a Pull Request (PR):** 
Open a PR on GitHub from your feature branch to the dev branch.

**Bug-fix**
Bug fix process will be done similarly to feature development but within its own bug-fix branch.
Don't forgot to update the CHANGELOG.nd with the work that has been done.

**Review and Merge:** 
As the lead developer, I will review the PR and approve the work if it meets the quality standards. Once approved, the feature branch will be merged into dev.

**Testing:** 
After merging into dev, further testing will be conducted. Once confirmed, another PR will be raised to merge dev into main for production deployment.

**Important Notes** 
Always create a feature branch or bug-fix branch off of dev.
Use descriptive names for branches to indicate the purpose clearly.
Regularly pull changes from dev into your feature branch to stay updated with the latest code.
After completing the feature, create a pull request to merge your branch back into dev.
Ensure all changes are tested and linted before merging.


