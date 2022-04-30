import { FC,useState } from "react";
import styled from "styled-components";
import { useUpdateRatingMutation } from "../generated/graphql";
import {gql} from '@apollo/client'
const RateSlider = styled.div`
    
    #slider{
        background-color: #5F5B6B;
        height: 15px;
        margin-top: -50px;
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
margin-top:10px;
`;

interface LayoutProps {
    id: string;
}

export const Slider : FC<LayoutProps> = ({id}) =>{
    
    const [rateValue,setSliderValue] = useState(1) 
    const [updateRating,{loading,error}] = useUpdateRatingMutation()
    
    if (loading) return <div>Loading...</div>
    if (error) return <div>An Error Occurred</div>

    return(<RateSlider key={id}>
        <form onSubmit={e=>{ 
            e.preventDefault();
            updateRating({
                variables:{
                    count: 1,
                    rating: rateValue,
                    id:id
                }
            })}}>
        <input className="notOpened" id="#slider" type="range" min={1} max={100} value={rateValue} onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
            ): void => {
                setSliderValue(
                    parseInt(ev.target.value, 10),
                )}}></input>
        <div>Your Rating!: {rateValue} %</div>
        <RateButton type="submit">Rate!</RateButton>
        </form>
    </RateSlider>)   
}