let str = 13

let count = ""

for(let i = 1 ; i<=str.length ; i++){

 if(str%i===0){
    count++
 }
}
if(count=2){
   console.log(prime)
}
else{
    console.log(Not prime)
}