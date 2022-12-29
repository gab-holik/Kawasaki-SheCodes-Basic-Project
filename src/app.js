function showSpecs() {
    document.getElementById("pspecs").style.display = "block";
    document.getElementById("specs").style.display = "block";
  }
  function showPics() {
    document.getElementById("pics").style.display = "block";
    document.getElementById("pictures").style.display = "block";
    document.getElementById("blast").style.display = "block";
  }
  function omover(){document.getElementById("kawa2008").src="images/kawa3.png";}
  function omout(){document.getElementById("kawa2008").src="images/kawa1.png";}
  function omover2(){document.getElementById("kawa2008a").src="images/kawa5.png";}
  function omout2(){document.getElementById("kawa2008a").src="images/kawa2.png";}

  function getKawa() {
    let name = prompt("What's your name?");
    name = name.trim();
    let email = prompt("What's your email address?");
    if (name.length == 0) {
      alert("You didn't give me your name 😿");
    } else {
      alert(
        "Thank you " +
          name +
          ", we will be in touch shortly. Let the good times roll! 🤘"
      );
    }
  }
  let getButton = document.querySelector("button");
  getButton.addEventListener("click", getKawa);