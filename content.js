//content.js

document.body.onload = function CreateH1() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id","agediv")
  const newAge = document.createElement("h1");
  newAge.setAttribute("id","age");
  const newActivity = document.createElement("h1");
  newActivity.setAttribute("id","activity");
  const newBitcoin = document.createElement("h1");
  newBitcoin.setAttribute("id","bitcoin");
  const referenceNode = document.querySelector('#SIvCob');
  referenceNode.after(newDiv);
  newDiv.appendChild(newAge);
  newDiv.appendChild(newBitcoin);
  newDiv.appendChild(newActivity);

  setInterval(addQuoteToGoogle, 80);
  httpGet("https://api.coindesk.com/v1/bpi/currentprice.json");
  
  httpGet("https://www.boredapi.com/api/activity");
};

function computeExactAge() {

  const birthday = new Date("December 04 1998");
  const now = new Date();
  let myAge = now - birthday;
  let myExactAge = myAge/31556926000;
  //console.log("Temps à ma naissance : " + birthday.getTime());
  //console.log("Temps aujourd'hui : " + now.getTime());
  //console.log("mon age exacte : " + myExactAge);
  return myExactAge;
};

function addQuoteToGoogle() {
  // Calcul l'age que j'ai en année + seconds
    const exactAge = computeExactAge();
    theH1 = document.getElementById("age");
    theH1.innerHTML = 'Age : ' + exactAge.toFixed(9);
};

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    response = xmlHttp.responseText;
    response_obj = JSON.parse(response);
    if (theUrl == "https://api.coindesk.com/v1/bpi/currentprice.json") {
      theBitcoin = document.getElementById("bitcoin");
      theBitcoin.innerHTML = "Bitcoin stock market price : " + response_obj.bpi.EUR.rate + " €";
      return console.log("Prix actuel du BITCOIN : " + response_obj.bpi.EUR.rate + " €");
    } else if (theUrl == "https://www.boredapi.com/api/activity") {
      //console.log(response_obj["activity"]);
      theActivity = document.getElementById("activity");
      theActivity.innerHTML = "Activity Idea : " + response_obj["activity"];
      return console.log("Activity Idea : " + response_obj["activity"])
    } else {
      return console.log(response);
    }
}


// alert("bim")
