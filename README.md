# Tennis Coding Test

## Description

Coding exam for hosting a tennis tournament. To aid with this, we're developing a scoring system. See the following:

```
  const match = Match("player 1", "player 2");
  match.pointWonBy("player 1");
  match.pointWonBy("player 2");
  // this will return "0-0, 15-15"
  match.score();

  match.pointWonBy("player 1");
  match.pointWonBy("player 1");
  // this will return "0-0, 40-15"
  match.score();
  
  match.pointWonBy("player 2");
  match.pointWonBy("player 2");
  // this will return "0-0, Deuce"
  match.score();
  
  match.pointWonBy("player 1");
  // this will return "0-0, Advantage player 1"
  match.score();
  
  match.pointWonBy("player 1");
  // this will return "1-0"
  match.score();
 
```

## Prerequisites

Please ensure that the latest version of NPM and NodeJs are installed 

### Installing

```
npm install 
```

## Run sample executions

```
npm start
```

## Running the tests
```
npm run test
```


## Author

**Paul Caruana** 