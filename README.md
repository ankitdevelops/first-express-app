# Getting started with Express: Building your first app

In this article, we are going to create our first express app, to get started with this article make sure the following tools are installed in your system.

* NodeJs -
    
    * To verify whether nodejs is installed or not, open your terminal and run the command `node -v` and `npm -v` this should give any version number.
        
* Vscode
    
* postman
    

## Step 1: Basic Setup

First, we will create a project folder, we can do that using the GUI, but let's try to create that by using the terminal.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1680416205176/2b2f38bd-b647-434d-8b64-3718f161b44f.png align="center")

* `mkdir helloExpress` - `mkdir` command is used to create a new directory. so this command will create a new directory `helloExpress`
    
* `cd helloExpress/` - `cd` is used to change the directory. So this command will change the current directory to the `helloExpress` directory.
    
* `code .` this command will open vscode in the current directory.
    

Now the next step is to create our `package.json` file. `package.json` file is a simple JSON file located in the project root directory. This file contains important information about the project like name, version, dependencies, and other configuration options. Every nodejs project contains a p`ackage.json` file.

To create the `package.json` file open the in-built terminal of vs code, you can use `` ctrl + ` `` . Now we are going to write the command `npm init` . This will initialize a new node js project and ask you to fill in a bunch of information about the project. You can give that information or keep pressing enter to either keep them empty or default, and if you don't want to keep pressing enter then you can use `npm init -y` this will skip all the question prompts and set them to default.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1680417121036/737efead-f875-4148-9023-3e7a2d975c9c.png align="center")

This is how our `package.json` file looks currently.

```javascript
{
  "name": "helloexpress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Now the next step is to create an entry point for our application, we will create a new `index.js` file in the project root directory.

```javascript
// index.js file
console.log("Hello Express");
```

Currently, We only have a simple console message in our `index.js` file.

Now we will add `script` in our `package.json` file.

```javascript
{
  "name": "helloexpress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC"
}
```

Now when we run the command `npm start` then it should display `Hello Express` message in the console.

## Step 2: Express and nodemon Installation.

In this section of the article, we are going to install Express and nodemon and do a basic setup of express and nodemon.

***<mark>installing Express</mark>***

> Express is a popular and widely-used web application framework for Node.js. It provides a set of features and tools for building web applications and APIs.

To install Express run command `npm install express` in the vscode in-built terminal.

***<mark>Installing nodemon</mark>***

> Nodemon is a command-line tool that monitosr for any changes in your source and automatically restart your server.

To install nodemon run the command `npm i nodemon -D` . nodemon is used for development and testing purposes, that's why we install it as `devDependencies` for installing any package as `devDependencies` we use `-D` flag.

Now `nodemon` is installed, let's modify the script in `package.json` file.

```javascript
{
  "name": "helloexpress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

Now try doing any changes in `index.js` file and save it, and your server will start automatically.

## Step 3: Express Setup

Let's move to `index.js` file and start setting up our app. Let's add the following code to your `index.js` file and then I will try to explain you each and every line.

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
```

`const express = require("express");`

This line imports the Express module and assigns it to `express` variable. This allows us to use the functionality provided by the Express framework.

`const app = express();`

This creates an instance of the Express application and assigns it to `app` variable. This is the main object that we will use to configure and interact with our application.

`const port = 3000;`

This line sets our port to 3000, our server will listen for any incoming request on this port only.

```javascript
app.get("/", (req, res) => {
  res.send("Hello Express");
});
```

The above line sets up a GET route on the root URL ("/") of our server. It accepts two arguments `PATH` and a `Handler function`. When a user makes a request to the root URL, the function passed as the second argument will be executed. In this case, the function sends the string "Hello World!" as the response.

```javascript
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
```

This line starts the server and listens for incoming requests on the specified port. When the server starts listening for any incoming request, the function passed as the second argument will be executed, which logs a message to the console indicating that the server is listening on the specified port.

Now if you open `localhost:3000` in your browser, it will show you `Hello Express` message.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1680420191993/0bf3b0a8-ca86-4caf-b6c3-41c8a9f2a318.png align="center")

While working with Express we usually don't send this type of one-line message usually we send JSON data which might be coming from the database, but currently, we don't have that type of knowledge so let's create some static JSON data and try to send that as a response. This is the data we are going to send as response.

```javascript
const data = [
  {
    id: 1,
    first_name: "Leonid",
    last_name: "Bardsley",
    email: "lbardsley0@yahoo.co.jp",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Tybalt",
    last_name: "Antushev",
    email: "tantushev1@storify.com",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Bethena",
    last_name: "Worgen",
    email: "bworgen2@virginia.edu",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Bartram",
    last_name: "Matts",
    email: "bmatts3@myspace.com",
    gender: "Non-binary",
  },
  {
    id: 5,
    first_name: "Marice",
    last_name: "Pavlenkov",
    email: "mpavlenkov4@tmall.com",
    gender: "Bigender",
  },
];
```

Next, we need to add a new GET Route and add the following line.

```javascript
app.get("/users", (req, res) => {
  res.status(200).json(data);
});
```

The above line sets up a new GET route on the root URL ("/users") of our server. It accepts two arguments `PATH` and a `Handler function`. When a user makes a request to the URL, the function passed as the second argument will be executed. In this case, the function sends a JSON string as the response. The `status()` method sets the HTTP status code to 200, indicating that the request was successful, and the `json()` method converts the `data` variable into a JSON string and sends it as the response body.

Now if you go to \`[localhost:3000/users](http://localhost:3000/users)\` in your browser or postman you can see the data as result and in postman, you can also see the status code.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1680421403820/a603fb15-1ba3-4ebf-bdf6-7256bfeda09c.png align="center")

That's it you have successfully created your first express app.

Github: [ankitdevelops/first-express-app (](https://github.com/ankitdevelops/first-express-app)[github.com](http://github.com)[)](https://github.com/ankitdevelops/first-express-app)
