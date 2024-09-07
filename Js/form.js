document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === 'complete'){
        console.log("DOM:READY");
        initApp();
    }
})

const initApp = () =>{
    const container = document.querySelector(".container");
    const form = container.querySelector("form");
    console.log(form);
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("submitted");
    });
}