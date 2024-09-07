// const div = document.getElementById("non");
// console.log(div);

// const v = document.querySelector("#hello");
// console.log(v);

// const hello2 = document.querySelector("#hello2");
// console.log(hello2);

// div.style.display="none";
// hello2.style.display="flex";

// const containers = document.getElementsByClassName("container");

// container.style.display="none";
// const divs = document.querySelectorAll(".box");
// console.log(divs);

// const divs = div.querySelectorAll(".box");
// console.log(divs);

// const dow = div.getElementsByTagName("div");
// console.log(dow);

// const items = div.querySelectorAll("div:nth-of-type(2n)");
// console.log(items);

// for(let i=0;i<items.length;i++){
//     // console.log(items[i]);
//     items[i].style.backgroundColor="green";
// };

// const hello = document.getElementById("hello") ;
// console.log(hello);

// const h1 = hello.querySelector("header h1");
// // console.log(h1);
// h1.textContent="hello world";

// const header  = document.querySelector("#hello header");
// console.log(header);

// header.innerHTML = "<h1>HELLO</h1> <p> I am NITHAN</p>";
// header.style.justifyContent = "space-evenly";

// const divs = document.getElementById("non");
// console.log(divs);

// const ed = divs.querySelectorAll("div:nth-of-type(2n");
// console.log(ed);

// // ed[0].parentElement.parentElement.style.backgroundColor="red";

// ed[0].parentElement.lastElementChild.previousElementSibling.style.backgroundColor="red";

const view1 = document.getElementById("hello");
view1.style.display="none";
const view2 = document.getElementById("hello2");
view2.style.display="flex";

function remover(section){
    while(section.lastChild){
        section.lastChild.remove();
    }
}

remover(view2);

// Creating elms

const Creator = (parent,count)=>{
    const ele = document.createElement("div");
    ele.textContent=count;
    ele.style.display="flex";
    ele.style.alignItems="center";
    ele.style.justifyContent="center";
    ele.style.width="100px";
    ele.style.height="100px";
    ele.style.backgroundColor="black";
    ele.style.color="white";
    ele.style.margin="10px";
    parent.append(ele);
}
view2.style.display="flex";
view2.style.justifyContent="center";
view2.style.alignItems="center";
view2.style.flexDirection="column";

for(let i=1;i<=6;i++){
    Creator(view2,i);
}