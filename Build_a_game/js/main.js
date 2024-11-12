const mnswpbtn = document.querySelector(".Minesweeper")
const pkmnbtn = document.querySelector(".Pokémon_battle_sim")
const rijbutton = document.querySelector(".op_een_rij")

const preview = document.querySelector(".preview")

const previewmnswp = `Minesweeper.png`
const previewpkmn = `pkmnbattlesim.png`
const preview4r =  `4r.png`

//mouse hover functions
mnswpbtn.addEventListener("mouseover", function(){
    previewfnOn(previewmnswp)
})
mnswpbtn.addEventListener("mouseout", function(){
    previewfnOff(previewmnswp)
})
pkmnbtn.addEventListener("mouseover", function(){
     previewfnOn(previewpkmn)
 })
pkmnbtn.addEventListener("mouseout", function(){
     previewfnOff(previewpkmn)
 })
rijbutton.addEventListener("mouseover", function(){
    previewfnOn(preview4r)
})
rijbutton.addEventListener("mouseout", function(){
    previewfnOff(preview4r)
})

function previewfnOn(game){
    preview.innerHTML = `<img src="./img/${game}" class = "temppreview" width="90" height="90">`
    document.querySelector(".preview").style.paddingLeft  = "50px"
    document.querySelector(".preview").style.paddingTop = "6px"
    document.querySelector(".temppreview").style.border = "medium solid rgb(255, 0, 0)";

}
function previewfnOff(game){
    preview.innerHTML = ` `
}