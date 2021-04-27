//let sound = new Audio('rooster.mp3');
let ele, butt
document.addEventListener('DOMContentLoaded', function () {
  ele = document.querySelector('.timer')
  ele.innerHTML = formatTimestamp(tbs)
  butt = document.querySelector('.butt')
})

let tbs = 3.5 * 60 * 1000
let jad_adds = 1.75 * 60 * 1000
let warn_at = 10 * 1000

let start = null
let pause = null
let resume = null
let sint

function progress() {
  validateField()
  if (start == null) {
    start = Date.now()
    butt.innerHTML = 'Pause'
    sint = setInterval(tick, 50)
  } else if (pause == null) {
    pause = Date.now()
    butt.innerHTML = 'Resume'
  } else if (resume == null) {
    resume = Date.now()
    butt.innerHTML = 'Reset'
  } else {
    start = pause = resume = null
    butt.innerHTML = 'Start'
    ele.innerHTML = formatTimestamp(tbs)
    clearInterval(sint)
  }
}

function formatTimestamp(timestamp) {
  let min = Math.floor(timestamp / 60000)
  let sec = Math.floor((timestamp % 60000) / 1000)
  let mil = timestamp % 1000
  min = min.toString().padStart(2, '0')
  sec = sec.toString().padStart(2, '0')
  mil = mil.toString().padStart(2, '0').substring(0, 2)
  return min + ':' + sec + ':' + mil
}

function tick() {
  let tts = 0

  if (pause) {
    let pre_elap = pause - start
    tts = tbs - (pre_elap % tbs) + jad_adds
  } else {
    let pre_elap = Date.now() - start
    tts = tbs - (pre_elap % tbs)
  }

  if (resume) {
    let post_elap = Date.now() - resume
    if (post_elap > tts) {
      tts = tbs - ((post_elap - tts) % tbs)
    } else {
      tts = tts - post_elap
    }
  }

  if (tts < warn_at) {
    if (!ele.classList.contains('warning')) {
      ele.classList.add('warning')
      // sound.play();
    }
  } else {
    ele.classList.remove('warning')
  }

  ele.innerHTML = formatTimestamp(tts)
}
function validateField() {
  var docs = document.getElementById('img')
  docs.setAttribute('src', './test.gif')
}
