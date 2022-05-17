import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { useGymsQuery } from '../generated/graphql';
import styles from '../styles/Home.module.css';
import { Slider } from './Slider';
import { theme } from './theme';
import { useUserContext } from './userContext';

type divStates = 'minimized' | 'maximized';

type GymProps = {
  state: divStates;
};
interface LayoutProps {
  id: string;
  key: string;
  Disabled: boolean;
}

const GymBox = styled.div<GymProps>`
  border-radius: 10px;
  width: ${({ state }) =>
    state === 'maximized' ? theme.size.maximizedW : theme.size.maximizedW};
  height: ${({ state }) =>
    state === 'maximized' ? theme.size.maximizedH : theme.size.maximizedH};
  margin: 0px 60px 60px 40px;
  background-color: #543c52;
  padding-left: 35px;
  color: white;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    cursor: pointer;
    width: 200%;
    height: 200%;
  }
`;

export const Gym: FC<LayoutProps> = ({ Disabled }) => {
  const [isOpened, divMaximize] = useState(true);
  const { user } = useUserContext();
  const { loading, error, data } = useGymsQuery();
  const [isDisabled] = useState(Disabled);
  Disabled = !user?.user.email;

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      {data?.gyms.map(({ id, gymName, score, countRate, address }) => (
        <>
          <GymBox
            state="minimized"
            key={id.toString()}
            onClick={() => divMaximize((prev) => !prev)}
          >
            <h2 key={id.toString()}>{gymName}</h2>
            <h5 className={styles.Rating} key={id.toString()}>
              Rating: {Math.round(score / countRate)}%
            </h5>
            <div
              key={id.toString()}
              className={isOpened ? 'infoOpened' : 'infoClosed'}
            >
              Info:{' '}
            </div>
            <br />
            <div
              key={id.toString()}
              className={isOpened ? 'infoOpened' : 'infoClosed'}
            >
              Adresa: {address}
            </div>
            <Slider
              key={id.toString()}
              id={id.toString()}
              Disabled={isDisabled}
            />
          </GymBox>
          <style jsx>{`
            .isOpened {
              width: 220%;
              height: 220%;
            }
            .infoOpened {
              display: block;
              font-size: 6;
            }
            .notOpened {
              width: 110%;
              height: 110%;
            }
            .infoClosed {
              display: none;
            }
          `}</style>
        </>
      ))}
    </>
  );
};
