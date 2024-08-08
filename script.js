//const projectCard = document.getElementById("projectCard")
//Variable from the html file
const projectCard = document.querySelector("#projectCard")
console.log(projectCard)

// Title ↓

//Variable that creats a h3, to be used on the webpage
const projectCardHeading = document.createElement("h3")
console.log(projectCardHeading)

// Image ↓

const projectCardImg = document.createElement("img")
console.log(projectCardImg)

const projectCardInfo = document. createElement("p")

// Adding to page ↓

//Variable that was created via JS which is shown on the webpage
projectCardHeading.textContent = "My Project 2"

projectCardHeading.classList.add("projectTitle")

projectCardImg.classList.add("projectImg")

projectCardImg.src = "Destiny.jpg";

projectCardImg.alt = "Destiny the game"

projectCardInfo.textContent = "Is just a game..."

// Added elements ↓

projectCard.appendChild(projectCardHeading)

projectCard.appendChild(projectCardImg)

projectCard.appendChild(projectCardInfo)

//
//

//const businessCard = document.querySelector("#businessCard");

//businessCard.innerHTML = `
    //<h3 class="projectTitle">I'm Andy</h3>
    //<img class="projectImg" src="Destiny.jpg" alt="Destiny the game" />
    //<p>Front End Developer</p>
//`