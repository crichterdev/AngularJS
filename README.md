# AngularJS
https://www.youtube.com/playlist?list=PLpOqH6AE0tNhdnOl1mOBthj4C7OHdwQB2


## Using http-server for AngularJS App

[http-server](https://www.npmjs.com/package/http-server) is a simple command-line tool that allows you to serve static files, including an AngularJS application, easily. Follow these steps to run your AngularJS app with `http-server`:

### Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Open your terminal or command prompt.

2. Install `http-server` globally using npm (Node Package Manager) by running the following command:

```bash
npm install -g http-server
```

### Serve AngularJS App

1. Navigate to the root directory of your AngularJS application using the terminal.

2. Build your AngularJS app (if required). Usually, AngularJS apps don't require a build step, but if you have custom build scripts or dependencies, ensure they are properly set up.

3. Now, run `http-server` in the root directory of your AngularJS app:

```bash
http-server
```

### Access Your App

1. Once the server is running, you will see output indicating that the server is listening on a specific port (e.g., http://127.0.0.1:8080).

2. Open your web browser and navigate to the following URL:

```
http://127.0.0.1:8080
```

3. You should now see your AngularJS app running locally on your computer.

### Stopping the Server

To stop the server, go back to the terminal where `http-server` is running and press `Ctrl+C` to terminate the process.

## Note

AngularJS is an outdated framework, and it is recommended to consider migrating to a more recent version like Angular (commonly referred to as Angular 2+). Angular offers significant improvements and additional features to enhance your web development experience.

For more information about `http-server`, you can check the official [npm page](https://www.npmjs.com/package/http-server).

Remember to update the instructions with any specific details related to your AngularJS application, such as custom build scripts or additional dependencies.