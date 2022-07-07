import styled from 'styled-components';
import { PrimaryBtn } from './PrimaryBtn.style';

export const Wrapper = styled(PrimaryBtn)`
  display: flex;
  place-content: center;
  gap: 0.5rem;
  width: 100%;
  margin: 1rem 0;
  font-size: var(--fs-large);
  line-height: 1;
`;
