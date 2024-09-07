const view  = document.querySelector(".container");
// console.log(view);

const fun = () =>{
    alert("Hello");
}

// view.addEventListener("click",fun,true);

// const para  = view.querySelector("p");

// para.addEventListener("click",(event) =>{
//     // console.log(event.target);
//     event.target.textContent = "Clicked";

// },true)

const initApp = () => {
    const container = document.querySelector(".container");
    const middle = container.querySelector(".inner");
    const inner = middle.querySelector(".inside");
    const para = inner.querySelector("p");
        // console.log(container);
        // console.log(middle);
        // console.log(inner);

    container.addEventListener("click",(event) =>{
        // container.style.backgroundColor = "yellow";
        container.classList.toggle("brown");
        container.classList.toggle("red");
        
    },false);

    middle.addEventListener("click",(event) =>{
        middle.style.backgroundColor = "green";
        // middle.classList.add("red");

    },false);

    inner.addEventListener("click",(event)=>{
        // event.stopPropagation();
        // event.target.classList.add("brown")
        event.target.style.backgroundColor = "orange";

    },false);

    para.addEventListener("click",(event)=>{
        const temp = event.target.textContent;
        temp === ("My 2nd Div") ? para.textContent="Element" : event.target.textContent="My 2nd Div";
    });

    const nav = document.querySelector("nav");
    // console.log(nav);
    
    nav.addEventListener("mouseover",(event)=>{
        nav.style.height="80px";
    });
    nav.addEventListener("mouseout",(event)=>{
        nav.style.height="40px";
    });

}


document.addEventListener("readystatechange",(event) =>{
    if(event.target.readyState === "complete"){
        console.log("readyState : Cpmplete");
        initApp();
    }
});