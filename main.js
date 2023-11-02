const buttons = document.querySelectorAll('button[type="button"]')
const screen = document.getElementById('screen')
const form = document.getElementById('form')
const ESPECIAL_CHARS = ['+', '-', '*', '/', '.', 'AC', 'C']

let lastCharIsOperator = false

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let newChar = button.value
    let lastChar = screen.textContent.charAt(screen.textContent.length - 1)

    if (screen.textContent === 'Hello!') {
      if (ESPECIAL_CHARS.includes(newChar)) return

      if (screen.textContent === 'Hello!') {
        screen.textContent = newChar
        return
      }
      return
    }

    if (button.value === 'AC') {
      screen.textContent = ''
      return
    }

    if (button.value === 'C') {
      screen.textContent = screen.textContent.slice(
        0,
        screen.textContent.length - 1
      )
      return
    }

    if (ESPECIAL_CHARS.includes(newChar)) {
      if (ESPECIAL_CHARS.includes(lastChar)) {
        screen.textContent =
          screen.textContent.slice(0, screen.textContent.length - 1) +
          button.value
        return
      }

      screen.textContent += newChar
      return
    }

    screen.textContent += newChar
  })
})

form.addEventListener('submit', event => {
  event.preventDefault()
  let result = eval(screen.textContent)
  screen.textContent = result
})
