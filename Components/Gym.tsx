import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Slider } from "../Components/Slider";
import styles from '../styles/Home.module.css';

type State = 'opened' | 'closed';

const GymBox = styled.div`
    /*border: solid 3px #7F7979;*/
    
    border-radius: 10px;
    width: 360px;
    height: 240px;
    margin: 0px 60px 60px 40px; 
    background-color: #543c52;
    padding-left:35px;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ;
    &:hover{
        cursor: pointer;
    }
    `;

const RateButton = styled.button`
width: 55px;
height: 30px;
background-color: #f55951;
color: #f1e8e6;
font-weight: bold;
font-family: sans-serif;
border-width: 2px;
border-radius: 13px;
margin-top:12px;
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
        gymDetails.map(({ id, gymName, score, countRate, address, info }) => (<>
            <GymBox key={id} onClick={() => divMaximize((prev) => !prev)} className={isOpened ? 'isOpened' : 'notOpened'}><h2 key={id}>{gymName}</h2>
                <h5 className={styles.Rating} key={id}>Rating: {Math.round(score / countRate)}%</h5>
                <div key={id} className={isOpened ? 'infoOpened' : 'infoClosed'}>Info: {info}</div>
                <div key={id} className={isOpened ? 'infoOpened' : 'infoClosed'}>Adresa: {address}</div>
                </GymBox>
                <Slider/>
                <RateButton type="button">Rate!</RateButton>
                <style jsx>{`
                    .isOpened{
                    width:220%;
                    height:220%;
                    }
                    .infoOpened{
                    display:block;
                    font-size:8;
                    }
                    .notOpened{
                    width: 110%;
                    height: 110%;
                    }
                    .infoClosed{
                        display:none; 
                    }   
                `}</style>
            </>
        ))
    )
}