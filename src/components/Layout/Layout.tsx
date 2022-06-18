import React, { Fragment } from 'react';
import MainHeader from './MainHeader';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}
