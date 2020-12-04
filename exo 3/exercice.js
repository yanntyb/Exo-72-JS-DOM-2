let listDiv = document.getElementsByClassName("name-tag");

for(let i of listDiv){
    let newP = document.createElement("p");
    newP.innerHTML = "Hello !";
    newP.style.bottom = "0px";
    i.appendChild(newP);
}









