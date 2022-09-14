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
  console.log(s)	
	let arr = s.toLowerCase().split('')
console.log(arr)	
	let uniqueArr =[]
	let aaa = []
	let i=0;
	console.log(arr.slice(1))
	while (i<arr.length){
		let arr1 = arr.slice(i+1)
		!arr1.includes(arr[i])? uniqueArr.push(arr[i]): aaa.push(arr[i])
		i++
	}
	console.log(uniqueArr)
	console.log(aaa);
	let itog = []
	for (let el of uniqueArr) {aaa.includes(el)? el : itog.push(el) }
	console.log(itog);
  itog.length===0? itog = ''  : itog = s[arr.findIndex(x=>x===itog[0])]
  console.log(itog)
	return itog
}
firstNonRepeatingLetter(a)
let c = a.toLowerCase()
console.log(c.indexOf(''))
let b = [...c].findIndex((n, i, a) => a.indexOf(n) === a.lastIndexOf(n)) || ''
console.log(a[b]||'')