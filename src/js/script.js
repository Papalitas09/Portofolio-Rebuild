//Navbar
const HomeButton = document.getElementById("Home")
const AboutButton = document.getElementById("About")
const ProjectButton = document.getElementById("Project")
const ContactButton = document.getElementById("Contact")


let item = 0
let Content = [
    document.getElementById("Home-Content"),
    document.getElementById("About-Content"),
    document.getElementById("Project-Content"),
    document.getElementById("Contact-Content")
]
//content
// const HomeContent = document.getElementById("Home-Content")
// const AboutContent = document.getElementById("About-Content")
// const ProjectContent = document.getElementById("Project-Content")
// const ContactContent = document.getElementById("Contact-Content")
Home()
function Home(){
    Content[0].style.visibility = "visible"
    Content[1].style.visibility = "hidden"
    Content[2].style.visibility = "hidden"
    Content[3].style.visibility = "hidden"
}

function About(){
    Content[1].style.visibility = "visible"
    Content[0].style.visibility = "hidden"
    Content[2].style.visibility = "hidden"
    Content[3].style.visibility = "hidden"
}

function Project(){
    Content[2].style.visibility = "visible"
    Content[3].style.visibility = "hidden"
    Content[1].style.visibility = "hidden"
    Content[0].style.visibility = "hidden"
}

function Contact(){
    Content[3].style.visibility = "visible"
    Content[2].style.visibility = "hidden"
    Content[1].style.visibility = "hidden"
    Content[0].style.visibility = "hidden"
}
