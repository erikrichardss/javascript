const bodyEl = document.querySelector('body')

bodyEl.addEventListener('mousemove', (event) => { 
    /*  */
    const xPos = event.offsetX /*  */
    const yPos = event.offsetY
    const spanEl = document.createElement('span')
    const size = Math.random() * 100 /*  */

    spanEl.style.left = xPos + 'px' /*  */
    spanEl.style.top = yPos + 'px'
    
    bodyEl.appendChild(spanEl)

    spanEl.style.width = size + 'px'
    spanEl.style.height = size + 'px'

    setTimeout(() => {
        spanEl.remove()
    }, 1200)
})