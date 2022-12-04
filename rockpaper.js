let myScore = 0
let opponentScore = 0
let gameOver = false

window.onload = function() {
    startGame()
}

function startGame() {
    const rock = document.createElement('img')
    rock.src = 'rock.png'
    rock.id = 1
    rock.addEventListener('click', setChoice)
    const paper = document.createElement('img')
    paper.src = 'paper.png'
    paper.id = 2
    paper.addEventListener('click', setChoice)
    const scissors = document.createElement('img')
    scissors.src = 'scissors.png'
    scissors.id = 3
    scissors.addEventListener('click', setChoice)

    document.getElementById('choices').append(rock)
    document.getElementById('choices').append(paper)
    document.getElementById('choices').append(scissors)
}

function setChoice() {
    if(gameOver) return
    document.getElementById('your-choice').src = this.src

    let randomChoice = Math.floor(Math.random() * 4)
    if(randomChoice === 0) {
        randomChoice += 1
    }

    let opponnentChoiceSrc = document.getElementById(randomChoice.toString()).src
    let opponnentChoiceId = document.getElementById(randomChoice.toString()).id

    document.getElementById('opponent-choice').src = opponnentChoiceSrc

    if(this.id == 1 && opponnentChoiceId == 2) {
        opponentScore++
        document.getElementById('opponent-score').innerText = opponentScore
    } else if(this.id == 1 && opponnentChoiceId == 3) {
        myScore++
        document.getElementById('your-score').innerText = myScore
    } else if(this.id == 2 && opponnentChoiceId == 1) {
        myScore++
        document.getElementById('your-score').innerText = myScore
    } else if(this.id == 2 && opponnentChoiceId == 3) {
        opponentScore++
        document.getElementById('opponent-score').innerText = opponentScore
    } else if(this.id == 3 && opponnentChoiceId == 1) {
        opponentScore++
        document.getElementById('opponent-score').innerText = opponentScore
    } else if(this.id == 3 && opponnentChoiceId == 2) {
        myScore++
        document.getElementById('your-score').innerText = myScore
    } else if(this.id == opponnentChoiceId) {
        myScore++
        document.getElementById('your-score').innerText = myScore
        opponentScore++
        document.getElementById('opponent-score').innerText = opponentScore
    }

    if(myScore > 9) {
        gameOver = true
        setTimeout(() => {
            alert('You have won')
        }, 50)
    } else if(opponentScore > 9) {
        gameOver = true
        setTimeout(() => {
            alert('You have lost')
        }, 50)
    }
}
