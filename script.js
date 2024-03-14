const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML );
}

// why diff function
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();