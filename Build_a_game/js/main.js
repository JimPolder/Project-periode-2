const mnswpbtn = document.querySelector(".Minesweeper")
const pkmnbtn = document.querySelector(".Pokémon_battle_sim")
const rijbutton = document.querySelector(".op_een_rij")
const previewmnswp = document.querySelector(".previewmnswp")
const previewpkmn = document.querySelector(".previewpkmn")
const preview4r = document.querySelector(".preview4r")

//mouse hover functions
mnswpbtn.addEventListener("mouseover", function(){
    previewfnOn(previewmnswp)
})
mnswpbtn.addEventListener("mouseout", function(){
    previewfnOff(previewmnswp)
})
pkmnbtn.addEventListener("mouseover", function(){
     previewfnOn(previewmnswp)
 })
pkmnbtn.addEventListener("mouseout", function(){
     previewfnOff(previewmnswp)
})
rijbutton.addEventListener("mouseover", function(){
    previewfnOn(preview4r)
})
rijbutton.addEventListener("mouseout", function(){
    previewfnOff(preview4r)
})

function previewfnOn(preview){
    preview.style.display = "inline"
}
function previewfnOff(preview){
    preview.style.display = "none"
}