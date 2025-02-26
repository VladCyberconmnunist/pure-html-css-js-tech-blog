 // get all elements with tag "a"
 let foundALL = document.querySelectorAll("a")
 //get element with search value (input with Id = "found")
 let optionFound=document.getElementById('found')
 //create event listener that look when value of input changes
 optionFound.addEventListener("change",(e)=>{
     //create variable contains value of input field and make to lower case 
     let optionVal = optionFound.value.toLowerCase()
     //get array of all elements and use function to each element
     foundALL.forEach(element => {
         //get array of all letters in each element and make it to lower case
         let elemArray = element.innerHTML.toLowerCase()
         //show it in console
        //  console.log(elemArray)
         //if array of all letters in word contains letters of search so remove hide css property
         if (optionVal==="") {
             element.parentNode.classList.add("hideThis")
     //hide all elements which  dont contain option value for search
         } 
         else if (elemArray.includes(optionVal)){
             element.parentNode.classList.remove("hideThis")
         } else 
             
          {element.parentNode.classList.add("hideThis")}
     })
 })  