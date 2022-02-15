import { FC,useState } from "react"
import styled from "styled-components"
const GymBox = styled.div`
    border: solid 12px black;
    border-radius: 10px;
    width: 360px;
    height: 240px;
    margin: 70px 0px 0px 0px; 
    padding-left:30px;
`

export const Gym :FC= () =>{
    
    const[gymDetails,loadedGyms] = useState([{
        id:"1",
        name:"Suncity",
        score:1057,
        countRate:74,
        address:"Praha"
    },{
        id:"2",
        name:"Gym22",
        score:1920,
        countRate:198,
        address:"Hradec Králové"
    },{
        id:"3",
        name:"MacakGym",
        score:1578,
        countRate: 223,
        address:"Pardubice"
    }]); 

    return(
    <GymBox>
        <h3>{gymDetails.map(name=>name)}</h3>
        <h6>Rating: {Math.round((gymDetails.map(score=>score))/(gymDetails.map(countRate => countRate)))}%</h6>
        <p>Adresa: {gymDetails.map(address=>{address})}</p>
        <input className="Sl" type="range" min="1" max="100"></input>
        <label>Your Rating:{}</label>
        <input type="submit" value="Rate!"></input>
    </GymBox>)
}