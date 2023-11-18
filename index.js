const button = document.querySelectorAll('button')
const displayResults = document.querySelector('.screen1')

// this code clear screen
function clear(){
  buttonArray=['']
  displayResults.textContent=''
}
  

 
var buttonArray=[];
var compute

// this code delete a number
 
const del = () => {
  if (compute.length > 0) {
    compute = compute.slice(0, -1);
    displayResults.textContent = compute;
  }
}

// this code do the calculations
function calculate(button){
   try{
    var value=button.textContent
    if(value==="="){
      return displayResults.textContent = new Intl.NumberFormat().format(eval(compute)) 

     }else if(value==='AC'){
      return clear()

     }else if(value==='Del'){
      return  del()
      
     }else{
     buttonArray.push(value)
     compute = buttonArray.join('')
     displayResults.textContent= compute
     }
   }catch(e){
    displayResults.textContent='wrong entry'
    displayResults.textContent.Style.text='blue'
   }
  

}

button.forEach(button => button.addEventListener('click',()=>calculate(button)));