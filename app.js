
function sendIt(humanHand){
    let aiHand = ['rock','paper','scissor']
    let winner = false
    
    let index = Math.floor(Math.random() * aiHand.length)

    console.log(index)

    if(humanHand == aiHand[index]){
        document.getElementById("winLoseDraw").innerText = "DRAW"
        console.log('draw',winner)
    } 
    if(humanHand == 'paper' && aiHand[index] == 'scissor'){
        document.getElementById("winLoseDraw").innerText = "LOSER"
        console.log('scissor beats paper','ai wins',winner)
    }
    if(humanHand == 'rock' && aiHand[index] == 'paper'){
        document.getElementById("winLoseDraw").innerText = "LOSER"
        console.log('paper beats rock','ai wins',winner)
    }
    if(humanHand == 'scissor' && aiHand[index] == 'rock'){
        document.getElementById("winLoseDraw").innerText = "LOSER"
        console.log('rock beats scissor', 'ai wins',winner)
    }
    if(humanHand == 'scissor' && aiHand[index] == 'paper'){
        document.getElementById("winLoseDraw").innerText = "WINNER"
        winner = true
        console.log('scissor beats paper','human wins',winner)
    }
    if(humanHand == 'paper' && aiHand[index] == 'rock'){
        document.getElementById("winLoseDraw").innerText = "WINNER"
        winner = true
        console.log('paper beats rock', 'human wins',winner)
    }
    if(humanHand == 'rock' && aiHand[index] == 'scissor'){
        document.getElementById("winLoseDraw").innerText = "WINNER"
        winner = true
        console.log('rock beats scissor','human wins',winner)
    }


}

    
    
