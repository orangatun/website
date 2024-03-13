// Adding a subheading and a one-liner

let nameHeader1 = document.getElementById("rg-name");
const jobTitle = document.createElement("span");
jobTitle.id = "job-title";
jobTitle.innerText = "Software Engineer";
nameHeader1.insertAdjacentElement("afterend", jobTitle);
const oneLiner = document.createElement("p");
oneLiner.id = "one-liner";
oneLiner.innerHTML = `A back-end engineer interested in distributed systems, learning to design and build the front-end.`;
jobTitle.insertAdjacentElement("afterend", oneLiner);


// Hiding resume from links
let resumeLink = document.getElementById("links").lastElementChild;
resumeLink.style.display="none";

// Active section
let links = document.getElementById("links").children;
const sections = document.querySelectorAll("section");

var currentSection = "";
if(document.location.hash.length===0) {
    window.scrollTo(0,1);
} else {
    let hashVal = document.location.hash.substring(1);
    sections.forEach(section => {
        if(hashVal===section.id) {
            window.scrollTo(0, section.offsetTop+1);
        }
    });
}
console.log(currentSection);
window.addEventListener("scroll", function() {
    var newSection = links[0].getAttribute("href");
    sections.forEach(section => {
        if(this.scrollY>=section.offsetTop) {
            newSection = '#'+section.id;
        }
    });
    if(newSection===currentSection) return;
    for(const link of links) {
        if(link.getAttribute("href")===currentSection) {
            link.classList.remove("active-section");
        }
        if(link.getAttribute("href")===newSection) {
            link.classList.add("active-section");
        }
    }
    currentSection = newSection;
});