import { FC,useState } from "react"
import styled from "styled-components"
import { Slider } from '@mui/material';
const GymBox = styled.div`
    border: solid 8px black;
    border-radius: 10px;
    width: 360px;
    height: 240px;
    margin: 0px 60px 60px 40px; 
    padding-left:35px;
    `
const RateButton = styled.button`
width: 55px;
height: 30px;
background-color: #F84AA7;
color: white;
font-weight: bold;
font-family: sans-serif;
border-width: 2px;
border-radius: 13px;
border-color: #F84AA7;
`

export const Gym :FC= () =>{
    
    const[gymDetails,loadedGyms] = useState([{
        id:"1",
        gymName:"Suncity",
        score:1057,
        countRate:12,
        address:"Praha"
    },{
        id:"2",
        gymName:"Gym22",
        score:1920,
        countRate:33,
        address:"Hradec Králové"
    },{
        id:"3",
        gymName:"MacakGym",
        score:1578,
        countRate: 22,
        address:"Pardubice"
    }]); 

    return(
    <GymBox>
        <h2>{gymDetails[0].gymName}</h2>
        <h4>Rating: {Math.round(gymDetails[0].score/gymDetails[0].countRate)}%</h4>
        <p>Adress: {gymDetails[0].address}</p>
        <input type="range"></input>
        <output id="output">Your Rating:{}</output><br/>
        <RateButton type="button">Rate!</RateButton>
    </GymBox>)
}