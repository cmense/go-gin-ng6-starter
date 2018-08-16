# Golang Gin + Angular 6 Web Application

## Technologies
Starter project template using the following libraries/frameworks:

- [Gin Gonic](https://gin-gonic.github.io/gin/)
- [Govendor](https://github.com/kardianos/govendor) 
- [Angular](https://angular.io/)
- [Protocol Buffers](https://developers.google.com/protocol-buffers/)
- [GORM](http://gorm.io/)
- [Socket.io](https://github.com/googollee/go-socket.io/)
- [JWT](https://github.com/appleboy/gin-jwt)

Services for CI & CD:
- [Travis CI](https://travis-ci.com/)
- [Heroku CD](https://www.heroku.com/)

## Get project from Github

To get the project, you need to install Go and set your Go workspace (i.e. [`$GOPATH`](https://golang.org/doc/code.html)) first.

```sh
$ go get github.com/app8izer/go-gin-ng6-starter
```

Alternatively, use git to clone the project: 

```sh
$ git clone https://github.com/app8izer/go-gin-ng6-starter.git
```

## Install Dependencies via Govendor

If not yet installed, install govendor via:

```sh
$ go get -u github.com/kardianos/govendor
```

To install the golang dependencies, run

```sh
$ govendor sync
```

in root of project.

## Development Setup

To start the application with PostgreSQL database, Golang backend, and Angular frontend, the following steps are required.

### Database: PostgreSQL

Run 

```sh
$ docker-compose -f docker-compose.dev.yml
```

in root of project directory.
This will fire up a database listening on port `5432` of your `localhost`.  

### Backend: Gin Gonic

To start the backend server on port `8080` run 

```sh
$ cd ./backend
$ go run main.go
```

in root of project directory.

### Frontend: Angular

To start the frontend server on port `4200` run 

```sh
$ cd ./frontend
$ yarn run dev
```

in root of project directory.
