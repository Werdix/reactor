import { FC,useState } from "react";
import styled from "styled-components";
import {Slider} from "../Components/Slider";

const GymBox = styled.div`
    border: solid 8px #7F7979;
    border-radius: 10px;
    width: 340px;
    height: 220px;
    margin: 0px 60px 60px 40px; 
    background-color: #5F5B6B;
    padding-left:35px;
    color: white;

    &:hover{
        cursor: pointer;
    }
    `;
  
const RateButton = styled.button`
width: 55px;
height: 30px;
background-color: #3D3B3C;
color: #C1BDB3;
font-weight: bold;
font-family: sans-serif;
border-width: 2px;
border-radius: 13px;
`;

const [isOpened,divMaximize] = useState(false);

export const Gym :FC= () =>{
   
    const gymDetails = [{
        id:1,
        gymName:"Suncity",
        score:1057,
        countRate:12,
        address:"OC Pyramida, Třída Míru 92, Pardubice",
        info:"Na ploše 2000m2 naleznete vše, co potřebujete pro dokonalý fitness trénink. K dispozici jsou vám špičkoví osobní trenéři, pod jejichž vedením dosáhnete rychle a efektivně požadovaných výsledků a vysněných cílů. Moderní Fitness Sun City Pardubice je vybaveno špičkovými stroji Technogym a Life Fitness, velkou kardio zónou se 40 kardio stanovišti, moderními polyuretanovými činkami."
    }]; 

        return(<GymBox onClick={()=> divMaximize((prev)=>!prev)} className={isOpened ? "isOpened":'notOpened'}>
                <h2 key={gymDetails[0].id}>{gymDetails[0].gymName}</h2>
                <h5 key={gymDetails[0].id}>Rating: {Math.round(gymDetails[0].score/gymDetails[0].countRate)}%</h5>
                <div className={isOpened ? 'infoOpened':'infoClosed'}>{gymDetails[0].info}</div>
                <Slider></Slider>
                <RateButton type="button">Rate!</RateButton>
                <style jsx>{`
                    .isOpened{
                    width:595px;
                    height:385px;
                    }
                    .infoOpened{
                        display:block
                    }
                    .notOpened{
                    width: 340px;
                    height: 220px;
                    }
                    .infoClosed{
                        display:none; 
                    }   
                `}</style>
            </GymBox>)
}