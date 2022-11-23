	let dayNight = document.querySelector('.dayNight')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')
let theme = 'light'

dayNight.onclick = function (){
if (theme === 'light') {
	body.classList.add('dark')
	dayNight.classList.add('active')
	theme = 'dark'
}else {
	body.classList.remove('dark')
	dayNight.classList.remove('active')
	theme = 'light'
}
localStorage.setItem('selected-theme', theme)
}
menuToggle.onclick = function (){
	menuToggle.classList.toggle('active')
	navigation.classList.toggle('active')
}

const selectedTheme = localStorage.getItem('selected-theme')
if (selectedTheme) {
	body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark')
	dayNight.classList[selectedTheme === 'dark' ? 'add' : 'remove']('active')
	theme = selectedTheme
}