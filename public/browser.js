document.addEventListener("click" , (e)=>{
   if (e.target.classList.contains("edit-me")){
    let input = prompt("enter you values here")
    console.log(input)
    axios.post("/update", {text:input}).then(()=>{
       //do something interesting here
    }).catch(()=>{
       console.log("error occured")
    })
   }
   
    
})
