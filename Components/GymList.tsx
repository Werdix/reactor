import { title } from "process";
import { FC } from "react";
import { Gym } from "./Gym";

export const GymList:FC = () =>{
    type FakeTitleData = {
        id:string;
        name:string;
        rate:number;
        address:string;
    }
const fakeData:[FakeTitleData] = [{
    id:"21",
    name:"Suncity",
    rate:78,
    address:"Praha"
},{

}]
    
return(
    <Gym>
        
        <h3>{fakeData[0].name}</h3>
        <h5>Rating:{fakeData[0].rate}%</h5>
    </Gym> 
    )} 