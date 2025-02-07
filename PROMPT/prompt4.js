//bgmi
var playerMode = prompt("'single','duo','squad'");
var map = prompt("'erangel','miramar','vikendi'");

switch (playerMode) 
{
  case "single":
    console.log("You are playing single player mode");
    switch (map) {
      case "erangel":
        console.log("You are playing in erangel map");
        break;
      case "miramar":
        console.log("You are playing in miramar map");
       case "vikendi":
          console.log("You are playing in vikendi map");
       
        break;
    }
    break;
  case "duo":
    console.log("You are playing duo mode");
    switch (map) {
      case "erangel":
        console.log("You are playing in erangel map");
        break;
      case "miramar":
        console.log("You are playing in miramar map");
        break;
      case "vikendi":
        console.log("You are playing in vikendi map");
        break;
    }
    break;
  case "squad":
    console.log("You are playing squad mode");
    switch (map) {
      case "erangel":
        console.log("You are playing in erangel map");
        break;
      case "miramar":
        console.log("You are playing in miramar map");
        break;
      case "vikendi":
        console.log("You are playing in vikendi map");
    }
    break;
}