const key = e => {
	const soundBox = document.querySelectorAll('.sound__box')
	soundBox.forEach((el, i, arr) => 	e.key === el.dataset.key ? animate(el,arr) : false)
}

const animate = (el,arr) => {
	el.classList.add('sound__active')
	el.firstElementChild.currentTime = 0
	el.firstElementChild.play()
	console.log(el)
	arr.forEach(box => {
		box.addEventListener('transitionend', () => box.classList.remove('sound__active'))
	})
}

window.addEventListener('keydown', key)