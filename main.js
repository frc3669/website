function openNav() {
    document.getElementById("menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function goHome() {
  document.getElementById("main").innerHTML = `
    <h1>FRC team 3669<br></h1>
    <h2>the CarbonKnights</h2>
  `;
}

function goRobots() {
  document.getElementById("main").innerHTML = `
    <h1>Robots</h1>
    <h2>Twitchy (2025)</h2>
    <img src="Twitchy.jpg" class="image">
  `;
}

function goCAD() {
  document.getElementById("main").innerHTML = `
    <h2>CAD (Computer Aided Design)</h2>
  `;
}

function goProgramming() {
  document.getElementById("main").innerHTML = `
    <h2>Robot Programming</h2>
  `;
}

function goWiring() {
  document.getElementById("main").innerHTML = `
    <h2>Robot Wiring</h2>
  `;
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      this.innerHTML = this.innerHTML.replace("nf nf-fa-minus_square_o", "nf nf-fa-plus_square_o");
    } else {
      dropdownContent.style.display = "block";
      this.innerHTML = this.innerHTML.replace("nf nf-fa-plus_square_o", "nf nf-fa-minus_square_o");
    }
  });
}