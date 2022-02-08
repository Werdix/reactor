import { title } from "process";
import { FC } from "react";
import { Gym } from "./Gym";

export const GymList:FC = () =>{
    type FakeTitleData = {
        id:string;
        name:string;
    }
const fakeData = [{
    id:"21",
    name:"Suncity"
},
{
    id:"26",
    name:"Gym22"
},{
    id:"24",
    name:"MacakGym"
}]

return(
fakeData.forEach(element => {
    <Gym>
        <h3>{element.name}</h3>
    </Gym>
})



)
}