const refresh = document.getElementById("viewBtn");
const titleBtn = document.getElementById("titleSubmit");
const answerBtn = document.getElementById("answerSubmit");
const table1 = document.getElementById("titleTable");
const table2 = document.getElementById("answerTable");

// 議題の更新
titleBtn.addEventListener("click", async function(){
    // APIをcallする
    // URLの部分を更新すれば、画面が更新されるはず！
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
        list = document.createElement("td");
        list.innerText = user.name;
        newCell.appendChild(list);
    })
});

// 回答の更新
answerBtn.addEventListener("click", async function(){
    // APIをcallする
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

    // DOM操作
    users.forEach(function(user){
        // 行を追加する
        let newRow = table2.insertRow();
        // IDを入れる
        let newCell = newRow.insertCell();
        let list = document.createElement("th");
        list.innerText = user.id;
        newCell.appendChild(list);
        // 議題を入れる
        newCell = newRow.insertCell();
        list = document.createElement("td");
        list.innerText = user.email;
        newCell.appendChild(list);
    })
});