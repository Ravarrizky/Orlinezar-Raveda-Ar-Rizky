const aboutButton = document.getElementById("aboutMeButton");

aboutButton.addEventListener("click", function () {
    window.location.href = "porto2.html";
});

aboutButton.addEventListener("mouseover", function () {
    aboutButton.style.backgroundColor = "aqua";
    aboutButton.style.color = "#333";
});
aboutButton.addEventListener("mouseout", function () {
    aboutButton.style.backgroundColor = "#ECD9BA";
    aboutButton.style.color = "black";
});

const contactButton = document.getElementById("myButton");

contactButton.addEventListener("click", function () {
    window.location.href = "porto1.html";
});

contactButton.addEventListener("mouseover", function () {
    contactButton.style.backgroundColor = "aqua";
    contactButton.style.color = "#333";
});

contactButton.addEventListener("mouseout", function () {
    contactButton.style.backgroundColor = "#ECD9BA";
    contactButton.style.color = "black";
});