const mainUlTodo = document.querySelector('.mainUlTodo');

const getTodos = async function(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const answer = await response.json();
        console.log(answer);

        answer.forEach(function(todo, index){
            console.log('todo', todo);
            const createLiElemTodo = document.createElement('li');
            createLiElemTodo.innerHTML = todo.title;
            createLiElemTodo.classList.add("lineTodo");
            if(todo.completed){
                createLiElemTodo.classList.add("completedTrue");
            }else {
                createLiElemTodo.classList.add("completedFalse");
            }
            mainUlTodo.appendChild(createLiElemTodo)
        })

    }catch(error){
        console.log(error);
    }
    
}


getTodos();