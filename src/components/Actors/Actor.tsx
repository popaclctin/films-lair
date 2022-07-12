import React from 'react';
import { ActorType } from '../../types';
import { Wrapper } from './Actor.style';
import { IMAGE_BASE_URL, PROFILE_SIZE } from '../../lib/config';
import noProfile from '../../images/no-profile-cropped.jpg';

type Props = {
  actor: ActorType;
};

const Actor = ({ actor }: Props) => {
  return (
    <Wrapper>
      <td className='actor__profile'>
        <div>
          <img
            src={
              actor.profile_path
                ? `${IMAGE_BASE_URL}/${PROFILE_SIZE}/${actor.profile_path}`
                : noProfile
            }
            alt={actor.name}
            width='185'
            height='278'
          />
        </div>
      </td>
      <td className='actor__name'>{actor.name}</td>
      <td>...</td>
      <td className='actor__character'>{actor.character}</td>
    </Wrapper>
  );
};

export default Actor;
