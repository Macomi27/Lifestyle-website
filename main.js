let bars = document.getElementById("bars");
let close = document.getElementById("close");
let navIcons = document.getElementById("nav-icons");
// let categoryList = document.getElementById("category-list");
// let catListLink = document.getElementById("cat-list-links");

let mobileMenu = document.getElementById("mobile-nav-links");
let mobileStatus = false;
let catStatus = false;

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

let hoverStatus = false;

// function handleHoverNav() {
//   hoverStatus = !hoverStatus;
//   if (hoverStatus) {
//     catListLink.style.top = "38px";
//   } else {
//     catListLink.style.top = "-1000px";
//   }
// }

// categoryList.addEventListener("mouseenter", () => {
//   handleHoverNav();
// });

// categoryList.addEventListener("mouseleave", () => {
//   handleHoverNav();
// });
