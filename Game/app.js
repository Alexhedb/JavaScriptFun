const game = () => {
  let pScore = 0
  let cScore = 0

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button')
    const introScreen = document.querySelector('.intro')
    const match = document.querySelector('.match')

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut')
      match.classList.add('fadeIn')
    })
  }
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button')
    const playerHand = document.querySelector('.player-hand')
    const computerHand = document.querySelector('.computer-hand')
    const hands = document.querySelectorAll('.hands img')
    hands.forEach((hand) => {
      hand.addEventListener('animationend', function () {
        this.style.animation = ''
      })
    })
    //computer options
    const computerOptions = ['rock', 'paper', 'scissors']
    options.forEach((options) => {
      options.addEventListener('click', function () {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3)
        const computerChoice = computerOptions[computerNumber]
        setTimeout(() => {
          compareHands(this.textContent, computerChoice)

          playerHand.src = `./assets/${this.textContent}.png`
          computerHand.src = `./assets/${computerChoice}.png`
        }, 2000)
        playerHand.style.animation = 'shakePlayer 2s ease'
        computerHand.style.animation = 'shakeComputer 2s ease'
      })
    })
  }

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p')
    const computerScore = document.querySelector('.computer-score p')
    playerScore.textContent = pScore
    computerScore.textContent = cScore
  }

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner')
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie'
      return
    }
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        pScore++
        updateScore()
        winner.textContent = 'Player wins!'
        return
      } else {
        cScore++
        updateScore()
        winner.textContent = 'Computer wins'
        return
      }
    }
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        cScore++
        updateScore()
        winner.textContent = 'Computer wins'
        return
      } else {
        pScore++
        updateScore()
        winner.textContent = 'Player wins!'
        return
      }
    }
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        pScore++
        updateScore()
        winner.textContent = 'Player wins!'
        return
      } else {
        cScore++
        updateScore()
        winner.textContent = 'Computer wins'
        return
      }
    }
  }

  //Call the inner functions
  startGame()
  playMatch()
}

game()
