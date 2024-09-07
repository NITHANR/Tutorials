// alert(location);
// window.alert(window.location);

const myObject = {
    Name : "NITHAN",
    log : function () {
        return `Hello, I am ${this.Name}`;
    }
};

const myArr = ["train","learn","fight","eat","sleep","code"];
const details = Object.create(myObject);
// console.log(details.log());
// console.log(myObject.log());
details["age"]=20;
details["fav_quote"]="Be water my friend";
details.log = function () {
    return `${this.Name} and I am ${this.age} andd my favourite quote is ${this.fav_quote}`;
};

// console.log(details.log());
// const json = JSON.stringify(details)
// console.log(json);

// const ret = JSON.parse(json);
// console.log(ret);
myObject["Fav"]=myArr;
myObject["age"]=20;
sessionStorage.setItem("mySessionStorage",JSON.stringify(myObject));

const sessionret = JSON.parse(sessionStorage.getItem("mySessionStorage"));
// console.log(sessionret);
sessionStorage.removeItem("mySessionStorage");
// sessionStorage.setItem("NITHAN",JSON.stringify(myArr));

// const nd = JSON.parse(sessionStorage.getItem("NITHAN"));
// console.log(typeof nd); 

localStorage.setItem("Data",JSON.stringify(myObject));
const strret = JSON.parse(localStorage.getItem("Data"));
// console.log(strret);
// localStorage.removeItem("Data");
localStorage.setItem("Hello","NITHAN");
// console.log(localStorage.key(1));
// for(let i =0;i<localStorage.length;i++){
//     console.log(localStorage.key(i));
// }

// const temp =function(val){
//     return{
//         toBe : (val) =>{
//             return true;
//         },
//         notToBe : (val) =>{
//             return false;
//         }
 
//     };
// }

// console.log(temp(5).toBe(5));
// console.log(temp(2).notToBe(10));


// import age from "./exportWeb.js"

// import {name as n,regular as r} from "./exportWeb.js"
// import * as g from "./exportWeb.js";
// const n = name();
// console.log(g.name());
// console.log(g.regular().col());

// console.log(g.default());

import User  from "./exportWeb.js";
const I = new User("NITHAN",20);
console.log(I);
console.log(I.showDetails());