function solution(numbers) {
	numbers.sort((a,b)=>a-b)
	let num = numbers.length
	for (let i=1; i<num; i++){
	 numbers[num-1]!==numbers[num-1-i]?numbers[num-i]-=numbers[num-i-1]:num}
	  
	for (let j=1;j<num;j++)
	 {while(numbers[num-1]!==numbers[num-1-j]&&numbers[num-1-j]&&numbers[num-1]){
	   numbers[num-1]>numbers[num-1-j]?
	   numbers[num-1]-=numbers[num-1-j]:
	   numbers[num-1]<numbers[num-1-j]?
	   numbers[num-1-j]=numbers[num-1-j]-numbers[num-1]: num }
	 }
	 return numbers[0]*num
   }