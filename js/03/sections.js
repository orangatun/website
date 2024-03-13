let aboutSection = document.getElementById("about");
console.log(aboutSection);
let newAboutContent = document.createElement("p");
newAboutContent.innerText = "I've worked with Java most of my life, and I know language is just a tool. Turns out, Java is my go-to tool (it doesn't support goto)";
newAboutContent.classList.add("description");
aboutSection.appendChild(newAboutContent);


let locationElements = document.getElementsByClassName("location");
// console.log(locationElements);
for(const location of locationElements) {
    let arrowElement = document.createElement("span");
    arrowElement.innerHTML = "↗";
    arrowElement.classList.add("ne-arrow");
    location.insertAdjacentElement("afterend", arrowElement);
};