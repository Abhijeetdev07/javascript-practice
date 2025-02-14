let todo = [];
let request = prompt("please enter your request");

while(true) {
    if(request == "quit") {
        console.log("i quit");
        break;
    }

    if(request == "list") {
        console.log("----------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i+1, todo[i]);
        }
        console.log("----------------------");
    }else if(request == "add") {
        let task = prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }else if(request == "delete"){
        let idx = prompt("please enter your task no to delete");
        todo.splice(idx,1)
        console.log("task delete");
    }
    
    request = prompt("please enter your options");

}