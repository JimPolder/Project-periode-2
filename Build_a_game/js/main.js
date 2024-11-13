const homebtn = document.querySelector(".Home")
const mnswpbtn = document.querySelector(".Minesweeper")
const pkmnbtn = document.querySelector(".Pokémon_battle_sim")
const rijbutton = document.querySelector(".op_een_rij")

const preview = document.querySelector(".preview")

const previewhome = `HomeIcon.png`
const previewmnswp = `Minesweeper.png`
const previewpkmn = `pkmnbattlesim.png`
const preview4r =  `4r.png`

//mouse hover functions

//home
homebtn.addEventListener("mouseover", function(){
    previewfnOn(previewhome)
    
})
homebtn.addEventListener("mouseout", function(){
    previewfnOff(previewhome)
})

//minesweeper
mnswpbtn.addEventListener("mouseover", function(){
    previewfnOn(previewmnswp)
})
mnswpbtn.addEventListener("mouseout", function(){
    previewfnOff(previewmnswp)
})

//pokemon battle sim
pkmnbtn.addEventListener("mouseover", function(){
     previewfnOn(previewpkmn)
 })
pkmnbtn.addEventListener("mouseout", function(){
     previewfnOff(previewpkmn)
 })

//4 op een rij
rijbutton.addEventListener("mouseover", function(){
    previewfnOn(preview4r)
})
rijbutton.addEventListener("mouseout", function(){
    previewfnOff(preview4r)
})

//Preview functions

//on
function previewfnOn(game){
    preview.innerHTML = `<img src="./img/${game}" class = "temppreview" width="90" height="90">`
    document.querySelector(".preview").style.paddingLeft  = "50px"
    document.querySelector(".preview").style.paddingTop = "6px"
    document.querySelector(".temppreview").style.border = "medium solid rgb(255, 0, 0)";

}

//off
function previewfnOff(game){
    preview.innerHTML = ` `
}