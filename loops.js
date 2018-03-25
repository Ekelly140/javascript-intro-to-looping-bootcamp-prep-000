function forLoop (array){
<<<<<<< HEAD
for (let i = 1; i <= 25; i++){
=======
for (let i = 0; i < 25; i++){
>>>>>>> e7eca23ad72cc0f91a6a68f826e6bff47484a4fa
  if (i === 1){
       array.push( "I am 1 strange loop.")
  }
  else{
<<<<<<< HEAD
      array.push('I am ' +i+ ' strange loops.')
  }
}
console.log(array)
return array

}

function whileLoop(num){
  while(num > 0){
    console.log(num)
    num--
  }
  return "done"
}

function doWhileLoop(array){
 do{
   
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  array.pop()
 }
while(array.length > 0 && maybeTrue())

return array;
=======
      array.push('I am ${i} strange loops.')
  }
console.log(array.length)
}
>>>>>>> e7eca23ad72cc0f91a6a68f826e6bff47484a4fa
}