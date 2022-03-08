import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Slider } from "../Components/Slider";
type State = 'opened' | 'closed';

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

export const Gym: FC = () => {

    const [isOpened, divMaximize] = useState(false);
    const gymDetails = [{
        id: 1,
        gymName: "Suncity",
        score: 1057,
        countRate: 12,
        address: "OC Pyramida, Třída Míru 92, Pardubice",
        info: "Na ploše 2000m2 naleznete vše, co potřebujete pro dokonalý fitness trénink. K dispozici jsou vám špičkoví osobní trenéři, pod jejichž vedením dosáhnete rychle a efektivně požadovaných výsledků a vysněných cílů. Moderní Fitness Sun City Pardubice je vybaveno špičkovými stroji Technogym a Life Fitness, velkou kardio zónou se 40 kardio stanovišti, moderními polyuretanovými činkami."
    }, {
        id: 2,
        gymName: "Gym22",
        score: 1254,
        countRate: 15,
        address: "Sukova 292, Pardubice",
        info: 'Lorem ipsum'
    }, {
        id: 3,
        gymName: "MacakGym",
        score: 2106,
        countRate: 22,
        address: "Dubina 306, Pardubice",
        info: 'Lorem ipsum'
    }];
    return (
        gymDetails.map(({ id, gymName, score, countRate, address, info }) => (
            <GymBox onClick={() => divMaximize((prev) => !prev)} className={isOpened ? "isOpened" : 'notOpened'}><h2 key={id}>{gymName}</h2>
                <h5 key={id}>Rating: {Math.round(score / countRate)}%</h5>
                <div key={id} className={isOpened ? 'infoOpened' : 'infoClosed'}>Info: {info}</div>
                <div key={id} className={isOpened ? 'infoOpened' : 'infoClosed'}>Adresa: {address}</div>
                <Slider></Slider>
                <RateButton type="button">Rate!</RateButton>
                <style jsx>{`
                    .isOpened{
                    width:175%;
                    height:175%;
                    }
                    .infoOpened{
                    display:block;
                    font-size:8;
                    }
                    .notOpened{
                    width: 100%;
                    height: 100%;
                    }
                    .infoClosed{
                        display:none; 
                    }   
                `}</style>
            </GymBox>
        ))
    )
}