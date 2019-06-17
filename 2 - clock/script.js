const changeStyle = (el,val) =>{
	document.querySelector(`.${el}`).style.transform = `rotate(${val}deg)`
} 

const moving = () => {
	const time = new Date().toLocaleTimeString().split(':').map(el => parseInt(el))
	changeStyle('hour', `${((time[0] / 12) * 360) + 90}`)
	changeStyle('min', `${((time[1] / 60) * 360) + 90}`)
	changeStyle('sec', `${((time[2] / 60) * 360) + 90}`)
}

setInterval(moving, 1000)