// const name = () =>{
//     return "NITHAN";
// };
// const age  = function(){
//     return 20;
// };

// const regular = ()=>{
//     function dep(){
//         return "AD";
//     };
//     function col(){
//         return "bit";
//     };

//     return{
//         dep,
//         col
//     };
// };

// export default age;
// export {regular,name};


export default class User{
    name;
    #age;
    constructor(name,age){
        this.name=name;
        this.#age=age;
    }
    showDetails(){
        return `My name is ${this.name} and I am ${this.#age} years old`;
    }
};

