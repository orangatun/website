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

