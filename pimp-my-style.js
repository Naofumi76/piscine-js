import { styles } from './pimp-my-style.data.js'
var stylesIndex = 0
var unpimping = false
export function pimp() {
    var button = document.getElementsByTagName('button')[0]
    if (!unpimping) {
        button.classList.add(styles[stylesIndex])
        stylesIndex++
        if (stylesIndex === styles.length) {
            unpimping = true
            button.classList.add('unpimp')
        }
    } else if (unpimping) {
        button.classList.remove(styles[stylesIndex - 1])
        stylesIndex--
        if (stylesIndex === 0) {
            button.classList.remove('unpimp')
            unpimping = false
        }
    }
}