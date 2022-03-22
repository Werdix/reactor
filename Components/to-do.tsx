import { useState } from "react";
import styled from "styled-components";

const createItem = (text: string): ToDoItem => {
    const todo: ToDoItem = { text, created: new Date, id: `item ${new Date().getTime()}` }
    return todo;
}

type ToDoItem = {
    text: string;
    created: Date;
    id: string;
}

export const StyledButton = styled.button`
    background-color: navy;
    width:60px;
    height: 40px;
    border-radius: 20%;
    `
export const StyledInput = styled.input`
    background-color: gray;
    font-weight: bold;
`


export const ToDo: React.FC = () => {

    const [inputValue, setInput] = useState<string>("example ");
    const [tasks, setTasks] = useState<Array<ToDoItem>>([]);

    const deleteItem = (id: string) => {
        setTasks([...tasks.filter((x) => x.id != id)])
    }

    const handleTask = () => {
        const newItem = createItem(inputValue);
        setTasks([...tasks, newItem])
        setInput('');
    }
    return <>
        {
            tasks.map(({ id, text, created }, index) => (<div key={id}>{text}{created.toString()} <button onClick={(e) => deleteItem(id)}>X</button></div>))
        }
        <StyledInput onChange={(e) => setInput(e.target.value)} value={inputValue} name="input"></StyledInput>
        <StyledButton onClick={handleTask}>Add</StyledButton>
    </>
}
