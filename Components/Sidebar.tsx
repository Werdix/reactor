import React,{FC,useEffect,useState} from "react";
export const Sidebar = () =>{

    const [opened,setIsOpened] = useState(false);
    const[width, setWidth] = useState('200px'); //držet stav komponenty
    const[color, setColor] = useState('LightGray');

    useEffect(()=>{
        const size = window.document.body.offsetWidth;
        setWidth(`${size/5}px`);
    },[]);
    
    return (
        <div className={opened ? "x open" : "x"} style={{
            backgroundColor: color
        }}>
            
            <div className="hamburger" onClick={()=> setIsOpened((prev)=>!prev)}>=</div>
            
            <style jsx>{`
                .x {
                    position: absolute;
                    left: -180px;
                    top: 0;
                    width: 50px;
                    bottom: 0;
                    transition: left 0.5s ease;
                }
                .open {
                    left: 0px;
                    width: 180px;
                }
                .hamburger {
                    cursor:pointer;
                    position: absolute;
                    padding: 5px;
                    background-color: gray;
                    border: 1px solid black;
                    left: 180px;
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
            `}</style>
        </div>
    )

}