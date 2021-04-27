const startApp = () => {
  var images = []

  function addImages() {
    var div = document.createElement('div')
    for (var i = 0; i <= 23; i++) {
      if (i % 6 == 0) {
        div = document.createElement('div')
        div.className = 'row'
      }
      var colDiv = document.createElement('div')
      var image = document.createElement('img')
      var btn = document.createElement('button')
      var btnadd = document.createElement('button')
      var isShowingFront = true
      var buttontog = true
      image.setAttribute('src', 'cards/' + i + '.png')
      image.setAttribute('id', 'Card' + i)
      btnadd.innerHTML = 'Add card'
      btnadd.className = 'buttonCards'
      btn.innerHTML = '< >'
      btn.className = 'buttonCards'
      colDiv.className = 'col-md-2'
      image.className = 'zoom'
      addListeners(image, btn, btnadd, i, isShowingFront, buttontog)
      colDiv.appendChild(image)
      colDiv.appendChild(btn)
      colDiv.appendChild(btnadd)
      div.appendChild(colDiv)
      if (i % 6 == 0) {
        document.querySelector('.test').appendChild(div)
      }
    }
  }
  function addListeners(image, button, button1, i, isShowingFront, buttontog) {
    image.addEventListener('click', function () {
      window.open(image.src)
    })

    button.addEventListener('click', () => {
      if (isShowingFront) {
        image.setAttribute('src', 'cards/' + i + '-back.png')
      } else {
        image.setAttribute('src', 'cards/' + i + '.png')
      }
      isShowingFront = !isShowingFront
    })
    button1.addEventListener('click', () => {
      if (buttontog) {
        if (!images.includes(i)) {
          images.push(i)
        }
        button1.innerHTML = 'Remove card'
        button1.className = 'buttonCardsRm'
      } else {
        let index = images.indexOf(i)
        images.splice(index, 1)
        button1.innerHTML = 'Add card'
        button1.className = 'buttonCardsRm'
      }
      buttontog = !buttontog
    })
  }
  function addSubmit() {
    const playBtn = document.getElementById('introbtn')
    const introScreen = document.querySelector('.test')
    const wheelScreen = document.querySelector('.wheel')
    const ListOfImages = document.querySelector('.ImageList')
    var clicked = true
    playBtn.addEventListener('click', () => {
      if (clicked) {
        introScreen.classList = 'test'
        introScreen.style.display = 'none'
        wheelScreen.style.display = 'block'
        ListOfImages.style.display = 'block'
        for (var j = 0; j < images.length; j++) {
          if (j % 4 == 0) {
            div = document.createElement('div')
            div.className = 'row'
          }
          var image = document.createElement('img')
          var txt = document.createTextNode(j + 1)
          div = document.createElement('div')
          divHeader = document.createElement('div')
          div.className = 'mydiv row'
          divHeader.className = 'mydivheader row'

          txt.className = 'col-md-1'
          document.querySelector('.ImageList').appendChild(div)
          document.querySelector('.ImageList').appendChild(divHeader)
          image.className = 'col-md-5'
          image.setAttribute('src', 'cards/' + images[j] + '.png')
          div.appendChild(txt)
          div.appendChild(image)
          if (j % 4 == 0) {
            document.querySelector('.ImageList').appendChild(div)
          }
        }
        playBtn.innerHTML = 'Show cards!'
      } else {
        document.querySelector('.ImageList').innerHTML = ''
        introScreen.style.display = 'block'
        wheelScreen.style.display = 'none'
        ListOfImages.style.display = 'none'
        playBtn.innerHTML = 'Show wheel!'
      }
      clicked = !clicked
    })
  }
  addSubmit()
  addImages()
}

startApp()
