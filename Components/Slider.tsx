import { FC, useState } from 'react';
import styled from 'styled-components';

import { useUpdateRatingMutation } from '../generated/graphql';
import { useUserContext } from './userContext';

const RateSlider = styled.div`
  #slider {
    background-color: #5f5b6b;
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
  margin-top: 10px;
`;

interface LayoutProps {
  id: string;
  Disabled: boolean;
}

export const Slider: FC<LayoutProps> = ({ id, Disabled }) => {
  const [rateValue, setSliderValue] = useState(1);
  const [updateRating, { loading, error }] = useUpdateRatingMutation();
  const { user } = useUserContext();
  Disabled = user?.user.email != undefined;
  const [isDisabled] = useState(Disabled);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An Error Occurred</div>;
  }

  return (
    <RateSlider key={id}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateRating({
            variables: {
              count: 1,
              rating: rateValue,
              id,
            },
          });
        }}
      >
        <input
          className="notOpened"
          id="#slider"
          type="range"
          min={1}
          max={100}
          value={rateValue}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
            setSliderValue(Number.parseInt(ev.target.value, 10));
          }}
        />
        <div>Your Rating!: {rateValue} %</div>
        <RateButton disabled={isDisabled} id="rateB" type="submit">
          Rate!
        </RateButton>
      </form>
    </RateSlider>
  );
};
