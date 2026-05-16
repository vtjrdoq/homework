const btnClickToOpen = document.querySelector('.header__burger')
const modal = document.querySelector('.modal')
const modalWindow = document.querySelector('.modal__window')
const body = document.body

const openModalWindow = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
    modalWindow.classList.add('modal__window--open')
}

const closeModalWindow = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
    modalWindow.classList.remove('modal__window--open')
}


btnClickToOpen.addEventListener('click', openModalWindow)

modal.addEventListener('click', (event) => {
    const target = event.target
    if (target && (target.classList.contains('modal') || target.classList.contains('button--modal-close'))) {
        closeModalWindow()
    }
})

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModalWindow()
    }
})