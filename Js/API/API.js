// Promise
// state 3 : rejected,fulfilled,pending

// const myPro = new Promise((h,reject)=>{
//     const err = true;
//     if(!err){
//         h("Solved");
//     }
//     else{
//         reject("Not solved yet");
//     } 

// });


// console.log(myPro);

// myPro.then((value)=>{
//     return value+" NITHAN";
// }).then(newVal =>{
//     console.log(newVal);
// });

// myPro
// .then((value)=>{
//     console.log(value);
// })
// .catch((err)=>{
//     console.log(err);
// });


// const Pro1 = new Promise((comp,rej)=>{
//     const err = false;
//     if(!err){
//         comp("No error");
//     }else{
//         rej("There is an err");
//     }
// });

// // Pro1.then((val)=>{
// //     console.log(val);
// // })
// // .catch(err=>{
// //     console.log(err);
// // });

// const Pro2 = new Promise((ful,rej)=>{
//     setTimeout(()=>{
//         rej("Rejected");
//     },3000);
// });
// Pro2.then(val=>{
//     console.log(val);
// });
// Pro1.then(val=>{
//     console.log(val);
// });

                    // Fetch Api

// const data = fetch("https://jsonplaceholder.typicode.com/users")
// console.log(data);

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(responce=>{
//     // console.log(responce);
//     return responce.json();
// })
// .then(data=>{
//     // data.filter(element => {
//     //     // if (element.id===1 || element.id===9){
//     //     //     console.log(element);
//     //     // }
//     // });
//     console.log(data);
// });

//                     // Async / Await
// const myObj = {
//     myUser : []
// };

// const userData = async () =>{
//     const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonData = await responce.json();
//     console.log(jsonData);
//     return jsonData;  
//     // console.log(responce);  
// }

// // userData();
// const anothrefun = async ()=>{
//     const result = await userData();
//     // console.log(result);
//     // const filtered =  Object.keys(result);
//     // console.log(filtered);
    
//     const arr = result.filter(ele=>{
//         // if(ele.id===1)
//         // console.log(ele);
//         return ele.id===1;
//     })
//     console.log(arr);
// }

// anothrefun();
// console.log(myObj.myUser);

// const emails = async () =>{
//     const users = await fetch("https://jsonplaceholder.typicode.com/users");
//     // await users.forEach(element => {
//         // console.log(users.json());
//     // });
//     const respone  = await users.json();
//     console.log(respone);

//     const userEmail = respone.map((ele)=>{
//         return ele.email;
//     });
//     // console.log(userEmail);
//     postTheData(userEmail);

// }
// emails();

// const postTheData = (data)=>{
//     console.log(data);
// }
// const jokes = async () =>{
//     const apiData =await fetch("https://icanhazdadjoke.com/",{
//         headers:{
//             Accept:"application/json"
//         },
//         method:"GET"
//     });
//     const data = await apiData.json();
//     console.log(data);
//     console.log(data.joke);
// };

// jokes();

// const jokes = async ()=>{
//     const apiData = await fetch("https://icanhazdadjoke.com/",{
//         method:"GET",
//         headers:{
//             Accept:"text/plain"
//         }
//     });
//     const data = await apiData.text();
//     console.log(data);
// }

// jokes();


                // sent data with an api
                
// const dadJoke = {
//     id: 'Qusrcahiib', 
//     joke: 'Astronomers got tired watching the moon go around …arth for 24 hours. They decided to call it a day.'
//     };


// const sendData =async (data) =>{
//     const sentToApi  = await fetch("https://httpbin.org/post",{
//         method:"POST",
//         headers:{
//             "content-type":"application/json"
//         },
//         body:JSON.stringify(data)
//     });
//     const responce = await sentToApi.json();
//     console.log(responce);
// }
// sendData(dadJoke);

                    // Getting a particular person

// const getJoke = async (firstName,lastName)=>{
//     // const apiRes = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`,{
//     //     method:"GET",
//     //     headers:{
//     //         Accept:"application/json"
//     //     }
//     // });
//     const apiRes = await fetch(`https://api.chucknorris.io/jokes/random$category=${firstName}`,{
//         method:"GET",
//         headers:{
//             Accept:"application/json"
//         }
//     });
//     const responce = await apiRes.json();
//     console.log(responce);
// };

// getJoke("animal","Lee");


                    // MINI API Application

const getData = ()=>{
    const myObj = {
        category:'cat'
    };
    return myObj;
}

const getUrl = (obj)=>{
    const url = `https://api.chucknorris.io/jokes/random?category=${obj.category}`;
    return url;
}

const process = async (url)=>{
    const api = await fetch(url);
    //     method:"GET",
    //     headers:{
    //         Accept:"application/json"
    //     }
    // });
    const responce = await api.json();
    showResponce(responce);
}

const showResponce= (res)=>{
    console.log(res);
};

    // workflow
const callFunc =async ()=>{
    const data = getData();
    const url = getUrl(data);
    await process(url);
    console.log("END");
}

callFunc();

