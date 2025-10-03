function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function toggleNav() {
  if (document.getElementById("sidenav").style.width === "0px") {
    openNav();
  } else {
    closeNav();
  }
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.maxHeight) {
      dropdownContent.style.maxHeight = null;
      dropdownContent.style.backgroundColor = "#111111";
      this.getElementsByClassName("dropdown-icon")[0].getElementsByTagName("polyline")[0].style.transform = "rotate(0deg)";
    } else {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
      dropdownContent.style.backgroundColor = "#202020";
      this.getElementsByClassName("dropdown-icon")[0].getElementsByTagName("polyline")[0].style.transform = "rotate(90deg)";
    }
  });
}

// makes sure that the Home section is displayed by default
window.location.hash = "#Home";