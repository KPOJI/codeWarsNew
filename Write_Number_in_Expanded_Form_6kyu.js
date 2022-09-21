function expandedForm(num) {
	let arr = []
	let len = num.toString().split('').length
	num.toString().split('').forEach((v,i,a)=>v!=='0'? arr.push(v*(10**(len-1-i))):len)
	return arr.join(' + ')
  }