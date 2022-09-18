//5 kyu Simple Pig Latin

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



//5 kyu firstNonRepeatingLetter


/* let a = 'sTreSS'

function firstNonRepeatingLetter(s) {

	let low = s.toLowerCase()
	
	let index = [...low].findIndex((n, i, a) => a.indexOf(n) === a.lastIndexOf(n)) 
	
	return s[index]||''
	
	}
firstNonRepeatingLetter(a) */

//4 kyu    Roman Numerals Helper
/* let a = 5
let obj = {
I : 1,
II : 2,
III : 3,
IV : 4,
V : 5,
VI : 6,
VII : 7,
VIII : 8,
IX : 9,
X : 10,
XX : 20,
XXX : 30,
XL : 40,
L : 50,
LX : 60,
LXX : 70,
LXXX : 80,
XC : 90,
C : 100,
CC : 200,
CCC : 300,
CD : 400,
D : 500,
DC : 600,
DCC : 700,
DCCC : 800,
CM : 900,
M : 1000,
MM : 2000,
MMM : 3000}

// TODO: create a RomanNumerals helper object

let RomanNumerals = {
	toRoman(num){
				let first = num%10
				num = num-first
				let second = (num/10)%10*10
				num = num-second
				let third = (num/100)%10*100
				num = (num-third)
				let fourth = num
				console.log(fourth,third,second,first)
				let arr = []
				for (let k in obj) {
					first === obj[k]? arr.push(k) : k;
					second === obj[k]? arr.push(k) : k;
					third === obj[k]? arr.push(k) : k;
					fourth === obj[k]? arr.push(k) : k;
				}
				return arr.reverse().join('')
				},

	fromRoman(romanNum){
						let result = 0
						let arrr = [...romanNum]
						arrr.forEach((v,i,a)=>
						{	for (let k in obj) 
							{	if (v === k && obj[a[i]]<obj[a[i+1]] )
									{result = result - obj[k]}
								if (v === k && (obj[a[i]]>=obj[a[i+1]] || a[i+1]===undefined))
									{result = result + obj[k]}
							}
						})
						return result
						}
					}





console.log(RomanNumerals.toRoman(2008))
console.log(RomanNumerals.fromRoman('XVIII')) */


//6 kyu Multiples of 3 or 5
/* function solution(number){
	let result = 0;
	for (let i = 1 ; i<number; i++) {(i%3===0||i%5===0)? result+=i:i}
	return result
  } */



  // unique
/* function isUnique(string) {
	console.log([...string].sort())
	return ![...string].sort().some((v,i,a)=>v===a[i+1])
}
//!!!!!!!!!!!! return new Set(string) === string.length --- set - уникальные символы
console.log(isUnique('abcdef'))
console.log(isUnique('1234567'))
console.log(isUnique('abcABC'))
console.log(isUnique('abcadef')) */
