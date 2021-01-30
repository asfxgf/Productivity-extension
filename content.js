//alert("Hey boy");

document.body.onload = function CreateH1() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id","agediv")
  var newH1 = document.createElement("h1");
  newH1.setAttribute("id","age");
  var referenceNode = document.querySelector('#SIvCob');
  referenceNode.after(newDiv);
  newDiv.appendChild(newH1);
  setInterval(addQuoteToGoogle, 150);
};






function computeExactAge() {

  const birthday = new Date("December 04 1998");
  const now = new Date();
  var myAge = now - birthday;
  var myExactAge = myAge/31556926000;
  console.log("Temps à ma naissance : " + birthday.getTime());
  console.log("Temps aujourd'hui : " + now.getTime());
  console.log("mon age exacte : " + myExactAge);
  return myExactAge;
};


  function addQuoteToGoogle() {
    // Calcul l'age que j'ai en année + seconds
      var exactAge = computeExactAge();
      theH1 = document.getElementById("age");
      theH1.innerHTML = 'Age : ' + exactAge.toFixed(9);
  };
