function likes(names) {
	let b
	names.length<=1? b = ' likes this' : b = ' like this'
    names.length===0? `no one${b}` : names.length===1? `${names+b}` :names.reduce((x,y)=>x+','+y+' and '+`${b}`)

	
}
console.log()