const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const headings = document.getElementById("headings");
// we cant change datatype of const, therefore here i am using let for d
let d = new Date();
let dd = d.getDate().toString();
let dm = d.getMonth().toString();
let dy = d.getFullYear().toString();
fulldate = dd.concat('.',dm,'.',dy);
const currentDateString = d.toString();//convert to string format for comparision



//will 

//add task needed--after adding tasks -- these to are direct todays task so they are as child components

function addtask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }
    else{
        let task = document.createElement("li");
        task.innerHTML = inputBox.value;
        // below is to display text
        listContainer.appendChild(task);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        // below is to display cross
        task.appendChild(cross); 
        // taskdate={};
        // d['tasks'] = inputBox.value;
        // d['data'] = d;
        // tasks.push(taskdate);
        savedata(); 
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

}, false);
// why this false?

// function savedata(tasks){
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }
// function getTasks(){
//     const storedTasks = localStorage.getItem('tasks');
//     return JSON.parse(storedTasks);
// }

// let tasks = getTasks();
// function renderTasks(){
//     const
// }



function savedata(){
    localStorage.setItem("data", listContainer.innerHTML );
}

// why diff function
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
function showDate(){
    let date = document.createElement("p");
    date.innerHTML = fulldate;
    headings.appendChild(date);
}

showTask();
showDate();
