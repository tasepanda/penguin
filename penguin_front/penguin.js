const refresh = document.getElementById("viewBtn");
const titleBtn = document.getElementById("titleSubmit");
const answerBtn = document.getElementById("answerSubmit");
const table1 = document.getElementById("targetTable");

titleBtn.addEventListener("click", async function(){
    // APIをcallする
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

    // DOM操作
    users.forEach(function(user){
        // 行を追加する
        let newRow = table1.insertRow();
        // IDを入れる
        let newCell = newRow.insertCell();
        let list = document.createElement("th");
        list.innerText = user.id;
        newCell.appendChild(list);
        // 議題を入れる
        newCell = newRow.insertCell();
        list = document.createElement("th");
        list.innerText = user.name;
        newCell.appendChild(list);
    })
});