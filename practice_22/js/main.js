let storageObject = {
    click: 0,
    keypress: 0
}

document.addEventListener('click', (event) => {
    console.log('click', event.target.tagName)
    if (event.target.tagName === 'BUTTON') {
        storageObject.click++
    }
})

document.addEventListener('keypress', (event) => {
    if (event.target.tagName === 'INPUT') {
        storageObject.keypress++
    }
})