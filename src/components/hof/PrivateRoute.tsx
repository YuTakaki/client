import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({Component } : any) => {
  const auth = useSelector((state : RootStateOrAny) => state.userReducer.auth);
  console.log(auth)
  return (
    <>
      {auth === true && (
        <>
          <Component />
        </>
      )}
      {auth === false && (
        <Navigate to="/login"/>
      ) }
      
    </>
  );
};

export default PrivateRoute;
