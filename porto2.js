const contactButton = document.getElementById("myButton");

contactButton.addEventListener("click", function () {
    window.location.href = "porto1.html";
});

contactButton.addEventListener("mouseover", function () {
    contactButton.style.backgroundColor = "aqua";
    contactButton.style.color = "#333";
});

contactButton.addEventListener("mouseout", function () {
    contactButton.style.backgroundColor = "#212529";
    contactButton.style.color = "white";
});

const aboutButton = document.getElementById("contactButton");

aboutButton.addEventListener("click", function () {
    window.location.href = "porto3.html";
});

aboutButton.addEventListener("mouseover", function () {
    aboutButton.style.backgroundColor = "aqua";
    aboutButton.style.color = "#333";
});
aboutButton.addEventListener("mouseout", function () {
    aboutButton.style.backgroundColor = "#212529";
    aboutButton.style.color = "white";
});