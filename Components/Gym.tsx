import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Slider } from "../Components/Slider";
import styles from '../styles/Home.module.css';
import {theme} from '../Components/theme';
import { useGymsQuery } from "../generated/graphql";



type divStates = 'minimized' | 'maximized'

type GymProps = {
    state: divStates
}

const GymBox = styled.div<GymProps>`
    border-radius: 10px;
    width: ${({state}) =>state=='maximized'?theme.size.maximizedW : theme.size.maximizedW};
    height:${({state}) =>state=='maximized'?theme.size.maximizedH : theme.size.maximizedH} ;
    margin: 0px 60px 60px 40px; 
    background-color: #543c52;
    padding-left:35px;
    color: white;
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ;
    &:hover{
        cursor: pointer;
        width: 200%;
        height: 200%;
    } 
    `;

export const Gym:FC = () => {
    const { loading, error, data } = useGymsQuery();
    if (loading) return <div>Loading</div>;

    if (error) return <div>Error</div>;

    const [isOpened, divMaximize] = useState(true);
    return (<>
        {data?.gyms.map(({ id, gymName, score, countRate, address }) => (<>
            <GymBox state="minimized" key={id} onClick={() => divMaximize((prev) => !prev)}><h2 key={id}>{gymName}</h2>
                <h5 className={styles.Rating} key={id}>Rating: {Math.round(score / countRate)}%</h5>
                <div key={id} className={isOpened ? 'infoOpened' : 'infoClosed'}>Info: </div><br/>
                <div key={id} className={isOpened ? 'infoOpened' : 'infoClosed'}>Adresa: {address}</div>
                <Slider/>
                </GymBox>
                <style jsx>{`
                    .isOpened{
                    width:220%;
                    height:220%;
                    }
                    .infoOpened{
                    display:block;
                    font-size:6;
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
        ))}</>
    )
    
}



