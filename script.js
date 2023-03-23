var div=document.createElement("div");
div.style.textAlign='center';

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.style.marginBottom="6px";
active.setAttribute("id","active");

let deaths=document.createElement("div");
deaths.style.marginBottom="6px"
active.setAttribute("id","death");

let recovered=document.createElement("div");
recovered.style.marginBottom="6px"
active.setAttribute("id","recover");

div.append(input,button,active,deaths,recovered);
document.body.append(div);


async function foo(){
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/dayone/country/${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    let index=res2.length-1;
    console.log(res2[index].Active);
    active.innerHTML=`Total Active cases:${res2[index].Active}`;
    deaths.innerHTML=`Total Death cases:${res2[index].Deaths}`; 
    recovered.innerHTML=`Total Recovered cases:${res2[index].Recovered}`;


}