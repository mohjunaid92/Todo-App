let todo = [];
let req = prompt("Enter your Request");

while( true ){
    if(req == "quit"){
        break;
    }
    if( req == "list"){
        for(let i = 0; i<todo.length; i++){
            console.log(todo[i]);
        }
    } else if(req == "add"){
        let task = prompt("Enter task");
        todo.push(task);
        console.log("Task added");
    } else if( req == "delete"){
        todo.pop();
    }



    req = prompt("Enter your Request");




}
