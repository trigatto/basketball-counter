let scoreHome = 0
let scoreAway = 0

let scoreHomeReal = document.getElementById("scr-home")
let scoreAwayReal = document.getElementById("scr-away")

function addHome1(){
    scoreHome+=1
    scoreHomeReal.textContent = scoreHome
    console.log(scoreHome)
}
function addHome2(){
    scoreHome+=2
    scoreHomeReal.textContent = scoreHome
    console.log(scoreHome)
}
function addHome3(){
    scoreHome+=3
    scoreHomeReal.textContent = scoreHome
    console.log(scoreHome)
}
function addAway1(){
    scoreAway+=1
    scoreAwayReal.textContent = scoreAway
    console.log(scoreAway)
}
function addAway2(){
    scoreAway+=2
    scoreAwayReal.textContent = scoreAway
    console.log(scoreAway)
}
function addAway3(){
    scoreAway+=3
    scoreAwayReal.textContent = scoreAway
    console.log(scoreAway)
}
