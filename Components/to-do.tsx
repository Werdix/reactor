import { useState } from "react";

const createItem = (text:string):ToDoItem =>{
    const todo:ToDoItem = {text,created:new Date,id:`item ${new Date().getTime()}`}
    return todo;
    }
    
type ToDoItem = {
    text:string;
    created:Date;
    id:string;
}


export const ToDo:React.FC = () =>{

    const [inputValue,setInput] = useState<string>("example ");
    const [tasks,setTasks] = useState<Array<ToDoItem>>([]);
    
    const deleteItem = (id:string) =>
    {
        setTasks([...tasks.filter((x)=>x.id != id)])
    }

    const handleTask =()=>{
        const newItem = createItem(inputValue);
        setTasks([...tasks,newItem])
        setInput('');
     }
return <>
{
    tasks.map(({id,text,created},index)=>(<div key={id}>{text}{created.toString()} <button onClick={(e)=>deleteItem(id)}>X</button></div>))
    
}

<input onChange={(e)=>setInput(e.target.value)} value={inputValue} name="input"></input>
<button onClick={handleTask}>Add</button>
</>

}