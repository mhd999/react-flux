# React Starter Project

This a react starter project uisng Flux, and babel.

### Flux desgin pattern
![alt tag](https://s3-eu-west-1.amazonaws.com/vas-pics/flux.png)

### Installation

The project requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd root project
$ npm install -d
$ npm install -g nodemon
$ nodemon
```
### run project
```sh
$ cd root project
$ webpack -w -d
$ nodemon
```

### Build docker image
```sh
docker build -t {TAG_NAME} .
```

### run docker image
```sh
docker run -d -p 8080:3000 {TAG_NAME}
```