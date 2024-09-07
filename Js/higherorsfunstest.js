import func from "./higherorsfuns.js";

const res = func();
// console.log(res);
res.forEach((ele) =>{
    console.log(ele);
});
console.clear();

const fil = res.filter((post)=>{
    return post.favNUm===1;

});

fil.forEach((ele =>{
    console.log(ele);
}));

console.clear();

const mapped = res.filter((ele)=>{
    return ele.userId==1 || ele.userId===7;
});
const val = mapped.map((ele)=>{
    return ele.id*10;
});

console.log(val);

console.clear();
console.log(val);
const reduced = val.reduce((tot,ele)=>{
    return tot+ele;
});

console.log(reduced);