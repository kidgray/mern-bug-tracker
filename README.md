# Bug Tracker App

This app allows a user to log bugs or issues. It is written using the MERN (MongoDB, Express.js, React, Node.js) stack, JavaScript and SASS.


# Table of contents
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)

# Installation
[(Back to top)](#table-of-contents)

Navigate to the directory in which you want to install the project, then run the following commands:

```git init```

```git clone https://github.com/kidgray/mern-bug-tracker.git```

To install the project dependencies, navigate to the root directory of the cloned project and use
the following command:

```yarn install```

NOTE: This project uses the following ports:

    Client: Port 8080
    Server: Port 3000

Please make sure these ports are available for use prior to executing it.

On the terminal, navigate to the client folder and start the client by using the command:

```yarn client```

Upon success, the client may be accessed at:

    http://localhost:8080

You may start the server by navigating to the server folder and using the command:

```yarn server```

Upon success, the server may be accessed at:

    http://localhost:5050

# Usage
[(Back to top)](#table-of-contents)

### Adding a Bug

To add a Bug, enter a Priority value and a description into the "Add New Bug" form and click the "Add Bug" button.

### Editing a Bug

To edit a bug, simply click on the bug's ID in the bug list.