const effects = (el, type, unit) => {
	document.querySelector(`.${el}`).addEventListener(type, e => {
		document.documentElement.style.setProperty(`--${el}`,`${e.target.value}${unit}`)
	})
}
effects('spacing', 'input', 'px')
effects('blur', 'input', 'px')
effects('color', 'change', '')