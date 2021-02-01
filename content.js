//content.js

document.body.onload = function CreateH1() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id","agediv")
  const newH1 = document.createElement("h1");
  newH1.setAttribute("id","age");
  const referenceNode = document.querySelector('#SIvCob');
  referenceNode.after(newDiv);
  newDiv.appendChild(newH1);
  setInterval(addQuoteToGoogle, 80);
};

function computeExactAge() {

  const birthday = new Date("December 04 1998");
  const now = new Date();
  let myAge = now - birthday;
  let myExactAge = myAge/31556926000;
  console.log("Temps à ma naissance : " + birthday.getTime());
  console.log("Temps aujourd'hui : " + now.getTime());
  console.log("mon age exacte : " + myExactAge);
  return myExactAge;
};


  function addQuoteToGoogle() {
    // Calcul l'age que j'ai en année + seconds
      const exactAge = computeExactAge();
      theH1 = document.getElementById("age");
      theH1.innerHTML = 'Age : ' + exactAge.toFixed(9);
  };
