let bars = document.getElementById("bars");
let close = document.getElementById("close");
let navIcons = document.getElementById("nav-icons");

let mobileMenu = document.getElementById("mobile-nav-links");
let mobileStatus = false;

function handleMobileNav() {
  mobileStatus = !mobileStatus;
  if (mobileStatus) {
    // mobileMenu.style.display = "flex";
    mobileMenu.style.top = "38px";
    bars.style.display = "none";
    close.style.display = "block";
  } else {
    // mobileMenu.style.display = "none";
    mobileMenu.style.top = "-1000px";
    bars.style.display = "block";
    close.style.display = "none";
  }
}
navIcons.addEventListener("click", handleMobileNav);
