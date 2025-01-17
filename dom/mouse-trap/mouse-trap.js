let lastCircle
export function createCircle() {
    document.addEventListener('click', event => {
        var circle = document.createElement('div')
        circle.classList.add('circle')
        circle.style.left = `${event.clientX-25}px`
        circle.style.top = `${event.clientY-25}px`
        circle.style.backgroundColor = 'white'
        lastCircle = circle
        document.body.appendChild(circle)
    })
}

export function moveCircle() {
    document.addEventListener("mousemove", event => {
        const circles = document.querySelectorAll(".circle")
        const box = document.querySelector(".box")
        const boxRect = box.getBoundingClientRect()
        if (circles.length > 0) {
            const lastCircle = circles[circles.length - 1]
            const circleRect = lastCircle.getBoundingClientRect()
            const circleSize = circleRect.width
            let newX = event.clientX - circleSize / 2
            let newY = event.clientY - circleSize / 2
            if (isInBox(lastCircle, box)) {
                newX = Math.max(boxRect.left + 1, Math.min(newX, boxRect.right - circleSize - 1))
                newY = Math.max(boxRect.top + 1, Math.min(newY, boxRect.bottom - circleSize - 1))
            }
            lastCircle.style.left = `${newX}px`
            lastCircle.style.top = `${newY}px`
            if (isInBox(lastCircle, box)) {
                lastCircle.style.background = 'var(--purple)'
            } else {
                lastCircle.style.background = 'white'
            }
        }
    })
}

export function isInBox(circle, box) {
    var boxRect = box.getBoundingClientRect()
    var circleRect = circle.getBoundingClientRect()
    return (
        circleRect.left >= boxRect.left + 1 &&
        circleRect.left <= boxRect.right - 1 &&
        circleRect.top >= boxRect.top + 1 &&
        circleRect.top <= boxRect.bottom - 1
      )
}

export function setBox() {
    var box = document.createElement('div')
    box.classList.add('box')
    document.body.appendChild(box)
}

