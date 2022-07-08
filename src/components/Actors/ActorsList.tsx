import React from 'react';
import { ActorType } from '../../types';
import Actor from './Actor';
import { Wrapper } from './ActorsList.style';

type Props = {
  actors: ActorType[];
};

const ActorsList = ({ actors }: Props) => {
  return (
    <Wrapper>
      <h2>Actors</h2>
      <table>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'></th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <Actor actor={actor} key={actor.id} />
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default ActorsList;
