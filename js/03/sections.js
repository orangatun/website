let aboutSection = document.getElementById("about");
console.log(aboutSection);
let newAboutContent = document.createElement("p");
newAboutContent.innerText = "I've worked with Java most of my life, and I know language is just a tool. Turns out, Java is my go-to tool (it doesn't support goto)";
newAboutContent.classList.add("description");
aboutSection.appendChild(newAboutContent);


let locationElements = document.getElementsByClassName("location");
for(const location of locationElements) {
    let arrowElement = document.createElement("span");
    arrowElement.innerHTML = "↗";
    arrowElement.classList.add("ne-arrow");
    location.insertAdjacentElement("afterend", arrowElement);
};

document.getElementById("iu").addEventListener("click", function() {
    window.open("https://bloomington.iu.edu");
});


document.getElementById("vtu").addEventListener("click", function() {
    window.open("https://vtu.ac.in/en/");
});
