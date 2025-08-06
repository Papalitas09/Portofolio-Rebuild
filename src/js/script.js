//Navbar buttons
let Buttons = [
    document.getElementById("Home"),
    document.getElementById("About"),
    document.getElementById("Project"),
    document.getElementById("Contact")
]
//content
let Content = [
    document.getElementById("Home-Content"),
    document.getElementById("About-Content"),
    document.getElementById("Project-Content"),
    document.getElementById("Contact-Content")
]

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
