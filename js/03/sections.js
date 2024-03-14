let aboutSection = document.getElementById("about");
// console.log(aboutSection);
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

/* Another attempt at sticky.
let blurElement = document.createElement("div");
blurElement.classList.add("blur");
document.getElementsByTagName("body")[0].appendChild(blurElement);*/
/* This was to move the body container to inside another div. An attempt at blurry.
let outOfFocus = document.createElement("div");
outOfFocus.classList.add("out-of-focus");
let bodyContainer = document.getElementById("body-container");
let body = document.getElementsByTagName("body")[0];
body.removeChild(bodyContainer);
outOfFocus.appendChild(bodyContainer);
body.appendChild(outOfFocus);
*/


// Adds links to experience

document.getElementById("ifers").addEventListener("click", function() {
    window.open("https://ifers.org");
});

document.getElementById("bloom").addEventListener("click", function() {
    window.open("https://bloominsuranceagency.com/");
});

document.getElementById("accn").addEventListener("click", function() {
    window.open("https://accenture.com/");
});

document.getElementById("surya").addEventListener("click", function() {
    window.open("https://surya-soft.com/");
});

// Combining Role with heading
let experiences = document.getElementById("experience").children;
for(let i=1; i<experiences.length; i++) {
    // Adds latest role to the title.
    let latestRole = experiences[i].children[3].children[0];
    experiences[i].children[0].textContent = latestRole.textContent+" · " + experiences[i].children[0].textContent;
    
    console.log(experiences[i].children[3].children[1].textContent);
    let latestTimeFrame = experiences[i].children[3].children[1].textContent;
    // Moves old roles to top
    var oldestTimeFrame = "";
    for(let j=experiences[i].children.length-1; j>3; j--) {
        let roleSpan = experiences[i].children[j].children[0];
        experiences[i].children[j].removeChild(roleSpan);
        oldestTimeFrame = experiences[i].children[j].children[0].textContent;
        experiences[i].children[j].removeChild(experiences[i].children[j].children[0]); // Removes extra timeframes
        latestRole.insertAdjacentElement("afterend", roleSpan);
    }    
    if(oldestTimeFrame.length!=0) {
        // Combines individual timeframes
        experiences[i].children[3].children[2].textContent = oldestTimeFrame.split("-")[0]+"-"+latestTimeFrame.split("-")[1];

        // Put timeframe ahead of old job roles
        let timeFrame = experiences[i].children[3].children[2];
        experiences[i].children[3].children[1].insertAdjacentElement("beforebegin", timeFrame);
    }    

    // Removes latest role from spans
    experiences[i].children[3].removeChild(latestRole);

}    



// Adds resume 
resumeDiv = document.createElement("div");
resumeDiv.classList.add("resume-div");
resumeLink = document.createElement("a");
resumeLink.setAttribute("href", "./files/RaghunadhamG_Resume.pdf");
resumeLink.textContent="View Résumé";
resumeLink.classList.add("resume-link");
let resumeArrow = document.createElement("span");
resumeArrow.innerHTML = "↗";
resumeArrow.classList.add("ne-arrow");
resumeLink.insertAdjacentElement("afterend", resumeArrow);
resumeDiv.appendChild(resumeLink);
resumeDiv.appendChild(resumeArrow);
document.getElementById("experience").appendChild(resumeDiv);


// About the page
let footerDiv = document.createElement("div");
let footerText = document.createElement("p");
footerText.appendChild(document.createTextNode("Design inspired by "));
console.log(footerText);
footerText.appendChild(document.createElement("a"));
footerText.lastChild.setAttribute("href", "https://brittanychiang.com/");
footerText.lastChild.textContent = "Brittany Chiang's website";
footerText.lastChild.classList.add("text-link");
footerText.appendChild(document.createTextNode(" and coded in VSCode, from scratch, using plain JS and CSS. Everything here is in "));
footerText.appendChild(document.createElement("a"));
footerText.lastChild.setAttribute("href", "https://rsms.me/inter/");
footerText.lastChild.textContent = "Inter";
footerText.lastChild.classList.add("text-link");
footerText.appendChild(document.createTextNode(" typeface. Check out the source files in "));
footerText.appendChild(document.createElement("a"));
footerText.lastChild.setAttribute("href", "https://github.com/orangatun/website/tree/main");
footerText.lastChild.textContent = "my Github repo";
footerText.lastChild.classList.add("text-link");
footerText.appendChild(document.createTextNode("."));

footerDiv.appendChild(footerText);
footerDiv.classList.add("footer-div");

sections[sections.length-1].insertAdjacentElement("afterend", footerDiv);
