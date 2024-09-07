document.getElementById("phoneNum")
.addEventListener("input",(event)=>{
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const ip = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const value = ip.value;
    const check = regex.test(value);
    if(!check && value.length){
        format.classList.add("block");
        ip.classList.add("invalid");

    }else{
        format.classList.remove("block");
        ip.classList.remove("invalid");
    }
});

document.getElementById("phoneForm").addEventListener("submit",(event)=>{
        event.preventDefault();
        const ip =document.getElementById("phoneNum");
        const res = ip.value;
        const regex = /[-. ]/g;
        const modifiedData = res.replaceAll(regex,"");
        console.log(modifiedData);
        const e1 = encodeURI(res);
        console.log(e1);
        const e2 = encodeURI(modifiedData);
        console.log(e2);
});