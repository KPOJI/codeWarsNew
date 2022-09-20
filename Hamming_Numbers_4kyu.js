function hamming (n) {
	let arr=[]
	for (let k = 0;k<15;k++ ){
	  for (let j=0;j<21;j++){
		for (let i=0;i<33;i++){
		  arr.push(2**i*3**j*5**k)
		}
	  }
	}
	return arr.sort((a,b)=>a-b)[n-1];
  }