import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Component} : any) => {
  const auth = useSelector((state : RootStateOrAny) => state.userReducer.auth);
  return (
    <>
      {auth === true ? (
        <Component />
      ) ? auth === false :(
        <Navigate to="/login"/>
      ) : null}
      
    </>
  );
};

export default PrivateRoute;
