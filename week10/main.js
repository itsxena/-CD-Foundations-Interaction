// global variables
let selection = 0

function update() {
	// local variables
	let options = document.querySelectorAll('.option')
	console.log(options)
	options.forEach(item => item.onclick=function() {
		selection = item.id
		console.log(selection)
	})
}

update();

happy.onclick=function(){
happy.innerHTML='I am happy today!'
happy.style.width='5em'
sad.innerHTML='sad'
sad.style.color='black'
neutral.innerHTML='neutral'
neutral.style.color='black'

}

neutral.onclick=function(){
neutral.innerHTML='But, sometimes I can be neutral.'
neutral.style.width='5em'
happy.innerHTML='happy'
happy.style.color='black'
sad.innerHTML='sad'
sad.style.color='black'

}

sad.onclick=function(){
sad.innerHTML='There are some days where I am sad too.'
sad.style.width='5em'
neutral.innerHTML='neutral'
neutral.style.color='black'
happy.innerHTML='happy'
happy.style.color='black'

}
