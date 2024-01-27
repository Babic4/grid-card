let section1 = document.getElementsByClassName('s-1')[0]
let section2 = document.getElementsByClassName('s-2')[0]
let section3 = document.getElementsByClassName('s-3')[0]

let scroll1 = document.getElementsByClassName('scroll-1')[0]
let scroll2 = document.getElementsByClassName('scroll-2')[0]
let scroll3 = document.getElementsByClassName('scroll-3')[0]

section1.addEventListener('click', e => {
	e.preventDefault()
	scroll1.scrollIntoView({ block: 'center', behavior: 'smooth' })
})
section2.addEventListener('click', e => {
	e.preventDefault()
	scroll2.scrollIntoView({ block: 'center', behavior: 'smooth' })
})
section3.addEventListener('click', e => {
	e.preventDefault()
	scroll3.scrollIntoView({ block: 'center', behavior: 'smooth' })
})
