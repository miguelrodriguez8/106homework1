

function addToDo(){
    
    var text=$("#txt-task").val();
    var todo={
        text:text,
        user:"Miguel"
    };
    
    if(text!=""){
        displayToDo(todo);
        $("#txt-task").val("");
        console.log(todo.text);
        //clearing the input//
    }else{
        alert("You need to enter a task");
    }
    $("#txt-task").focus();      //selecting the element//

}

function displayToDo(todo){
    var li=`<li> ${todo.text} <button> Done </button></li>`
    $("#pending-list").append(li);
}


function init(){
    console.log('Init the to do app');
    // sense the events here click
        $("#btn-add").click(addToDo);
        $("#txt-task").keypress(function(e){
            console.log(e.key);
            if(e.key==="Enter"){
                addToDo();
            }
        });

}

window.onload=init;