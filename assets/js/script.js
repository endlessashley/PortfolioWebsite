var aboutButton = document.getElementById("about-button");
var portfolioButton = document.getElementById("portfolio-button");


var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio-section");

function showAboutMe() {
  if (about.style.display = "none") {
    about.style.display = "block";
    portfolio.style.display = "none";
   }
}

function showPortfolio() {
  if (portfolio.style.display = "none") {
    portfolio.style.display = "block";
    about.style.display = "none";
    }
}

showAboutMe();

aboutButton.addEventListener("click", showAboutMe);
portfolioButton.addEventListener("click", showPortfolio);