const button1 = document.getElementById("addBtn");
const refresh = document.getElementById("refresh");
const refresh = document.getElementById("subtitle");

button.addEventListener("click", async function(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    users.forEach(function(user){
        const list = document.createElement("th");
        list.innerText = user.name;
        lists.appendChild(list);
    })
});