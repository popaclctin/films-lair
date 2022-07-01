import React, { Fragment } from 'react';
import MainHeader from './MainHeader';
import { MainStyled } from './Layout.styled';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <MainStyled>{props.children}</MainStyled>
    </Fragment>
  );
};

export default Layout;
