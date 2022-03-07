import { FC,useState } from "react";
import styled from "styled-components";
const RateSlider = styled.div`
    
    .slider{
        background-color: #5F5B6B;
        height: 15px;
    }
`;

export const Slider : FC = () =>{
    
    const [rateValue,setSliderValue] = useState(1) 
    
    return(<RateSlider>
        <input className="slider" type="range" min={1} max={100} value={rateValue} onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
            ): void => {
                setSliderValue(
                    parseInt(ev.target.value, 10),
                )}}></input>
        <div>Your Rating!: {rateValue} %</div>
    </RateSlider>)   
}