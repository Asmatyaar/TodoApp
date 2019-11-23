document.addEventListener("click" , (e)=>{
   if (e.target.classList.contains("edit-me")){
    let input = prompt("enter you values here",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
    
    if(input){
      axios.post("/update", {text:input,id:e.target.getAttribute("data-id")}).then(()=>{
         e.target.parentElement.parentElement.querySelector(".item-text").innerHTML=input
      }).catch(()=>{
         console.log("error occured")
      })
    }
   }
   
    
})
