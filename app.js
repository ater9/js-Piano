const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    new Audio(newUrl).play()
    console.log(newUrl)
}

pianoKeys.forEach((pianoKey, i) => {
    const keyArray = [1,3,6,8,10,13,15,18,20,22,0,2,4,5,7,9,11,12,14,16,17,19,21,23]
    const number = keyArray[i] < 9 ? '0' + (keyArray[i] + 1) : (keyArray[i] + 1)
    const newUrl = 'sound/24-piano-keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})
