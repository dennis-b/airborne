<p align="center">
  First airborne FullStack
</p>

  
## Description

 Air borne fullstack exercise


## Demo
url for user command input : 
<br>
https://salty-hollows-42871.herokuapp.com/#/home
<br>
<br>
url where the socket events will be shown : 
<br>
https://salty-hollows-42871.herokuapp.com/#/events

## Installation
install - [yarn](https://yarnpkg.com/en/) 
<br>
<br>
from root folder:

```bash
$ yarn install 

```

## Running the app
from root folder:
```bash
# development
$ yarn start:dev
```
navigate to - http://localhost:3000/#/home for user input
<br>
navigate to -  http://localhost:3000/#/events to see the events get handled

```bash
# production mode
$ yarn start:prod
```
navigate to - http://localhost:5000/#/home for user input
<br>
navigate to -  http://localhost:5000/#/events to see the events get handled


## Running the app with Docker
from root folder:
```bash
$  docker build -t airborne/fullstack .
$  docker run -p 5000:5000 airborne/fullstack
```
navigate to - http://localhost:5000/#/home for user input
<br>
navigate to -  http://localhost:5000/#/events to see the events get handled

## Stay in touch
- Author - [Dennis Borshchevski](mailto:http://dennisborsh@gmail.com)

