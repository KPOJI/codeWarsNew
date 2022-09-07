function pigIt(str){
	let strArr = str.split(' ')
	let strEnd = []
	for (let i = 0; i < strArr.length; i++) {
		strTak=strArr[i].split('')
		console.log(strTak)
		strTak.push(strTak.shift())
    console.log(strTak)
		if ((strTak[0] !== '!') && (strTak[0] !== '?' )) {strTak.push('ay')} 
		strEnd.push(strTak.join(''))
		console.log(strTak)
		
	}
	
console.log(strEnd.join(' '))
return strEnd.join(' ')
}
pigIt('hello world !')