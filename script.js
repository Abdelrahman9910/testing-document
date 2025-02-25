function toggleSideNav() {
    const sideNav = document.getElementById("sideNav");
    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
    } else {
        sideNav.style.width = "250px";
    }
  }
  
  function toggleLanguageDropdown() {
    const dropdown = document.getElementById("customLanguageDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.language-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
  }

  function toggleSideNav() {
    const sideNav = document.getElementById("sideNav");
    const overlay = document.getElementById("overlay");
    
    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
        overlay.style.display = "none"; // Hide the overlay
    } else {
        sideNav.style.width = "250px";
        overlay.style.display = "block"; // Show the overlay
    }
}
  