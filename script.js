let thisInput = document.querySelector("#nameField")

function Moving(){
    const inputwidth = thisInput.offsetWidth
    const inputheight = thisInput.offsetHeight
    const winw = window.innerWidth - inputwidth
    const winh = window.innerHeight - inputheight

    thisInput.style.translate =`
    ${Math.floor(Math.random()*(winw + 1))}px
    ${Math.floor(Math.random()*(winh + 1))}px
    `
}

thisInput.addEventListener('mouseover', Moving)