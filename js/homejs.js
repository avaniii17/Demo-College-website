
const content = document.getElementById("intext")
const change = document.getElementById("more")

const original = content.textContent
let animationEnalbe = false

change.addEventListener("click",function(){
    if (animationEnalbe){
        content.textContent = original
        content.style.opacity=1
    } else {
        content.textContent="Lumos University, the newest addition to the Ivy League, is a prestigious institution dedicated to fostering excellence in education, research, and innovation. Located in a serene and inspiring campus setting, Lumos offers a comprehensive range of programs and opportunities designed to empower students to reach their fullest potential."
        content.style.width="700px"
        content.style.opacity=1
        content.style.fontSize="20px"
        change.remove()
    }
})

const box1 = document.getElementById("residential")
const box2 = document.getElementById("club")
const box3 = document.getElementById("fest")
const box4 = document.getElementById("outdoor")


