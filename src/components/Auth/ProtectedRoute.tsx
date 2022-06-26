import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-redux';

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to='/films' replace />;
  }
  return children;
};
