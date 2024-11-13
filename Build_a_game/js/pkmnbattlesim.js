const startbutton = document.querySelector(".startbutton")
const gamecontainer = document.querySelector(".gamecontainer")
const containerimg = document.querySelector(".containerimg")


startbutton.addEventListener("click", function(){
    startbutton.style.display = "none"
    gamecontainer.style.opacity = "100%"
    containerimg.style.display = "none"
    startclicked()
    
})

function startclicked(){
    gamecontainer.innerHTML+= `<button class="onepbutton">1P game</button>`
    gamecontainer.innerHTML+= `<button class="twopbutton">2P game</button>`
    gamecontainer.innerHTML+= `<h1 class="or">OR</h1>`
    const oneplayerbtn = document.querySelector(".onepbutton")
    const twoplayerbtn = document.querySelector(".twopbutton")

    oneplayerbtn.addEventListener("click", function(){
        initiategame(1)
    })
    twoplayerbtn.addEventListener("click", function(){
        initiategame(2)
    })
}

function initiategame(playeramount){
    console.log(playeramount,"player game")
    document.querySelector(".onepbutton").style.display = "none"
    document.querySelector(".twopbutton").style.display = "none"
    document.querySelector(".or").style.display = "none"
}