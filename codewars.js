//Simple Pig Latin

/* function pigIt(str){
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
pigIt('hello world !') */



//firstNonRepeatingLetter


let a = 'sTreSS'

function firstNonRepeatingLetter(s) {

	let low = s.toLowerCase()
	
	let index = [...low].findIndex((n, i, a) => a.indexOf(n) === a.lastIndexOf(n)) 
	
	return s[index]||''
	
	}
firstNonRepeatingLetter(a)
