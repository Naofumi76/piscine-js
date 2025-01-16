var interval
var brickCount = 0

export const build = (brickAmount) => {
    const towerContainer = document.createElement('section')
    towerContainer.id = 'tower'
    document.body.appendChild(towerContainer)

    interval = setInterval(() => {
        if (brickCount < brickAmount) {
            brickCount++
            const brick = document.createElement('div')
            brick.setAttribute('id', 'brick-' + brickCount)
            if (brickCount % 3 === 2) {
                brick.dataset.foundation = true
            }
            towerContainer.appendChild(brick)
        } else {
            clearInterval(interval)
        }
    },100)
}

export const repair = (...ids) => {
    ids.forEach(id => {
        const brick = document.getElementById(id)
        if (brick) {
            if (brick.getAttribute('data-foundation') === 'true') {
                brick.setAttribute('data-repaired', 'in progress')
            } else {
                brick.setAttribute('data-repaired', true)
            }
        }
    })
}

export const destroy = () => {
    var towerContainer = document.getElementById('tower')
    var lastBrick = towerContainer.lastChild
    if (!lastBrick) {
        return
    } else {
        lastBrick.remove()
    }
}