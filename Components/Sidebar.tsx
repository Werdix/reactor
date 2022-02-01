import React,{FC,useEffect,useState} from "react";



export const Sidebar = () =>{

    const [opened,setIsOpened] = useState(false);
    const[width, setWidth] = useState('200px'); //držet stav komponenty
    const[color, setColor] = useState('gray');

    useEffect(()=>{
        const size = window.document.body.offsetWidth;
        setWidth(`${size/5}px`);
    },[]);
    
    return (
        <div className={opened ? "x open" : "x"} style={{
            backgroundColor: color
        }}>
            
            <div className="hamburger" onClick={()=> setIsOpened((prev)=>!prev)}>=</div>
            <button className="black" onClick={() => setColor("black")}></button> 
            <button className="green" onClick={() => setColor("green")}></button> 
            <button className="red" onClick={() => setColor("red")}></button> 
            <button className="blue" onClick={() => setColor("blue")}></button>
            <style jsx>{`
                .x {
                    position: absolute;
                    left: -150px;
                    top: 0;
                    width: 50px;
                    bottom: 0;
                    transition: left 0.5s ease;
                }
                .open {
                    left: 0px;
                    width: 150px;
                }
                .hamburger {
                    cursor:pointer;
                    position: absolute;
                    padding: 5px;
                    background-color: gray;
                    border: 1px solid black;
                    left: 150px;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                button {
                    padding: 10px;
                    display:flex;
                    width: 25px;
                    height: 16px;
                }
                .black {
                    background-color: black;
                }
                .green {
                    background-color: #4CAF50;
                }
                .red {
                    background-color: #f44336;
                }
                .blue {
                    background-color: #008CBA;
                }
            `}</style>
        </div>
    )

}