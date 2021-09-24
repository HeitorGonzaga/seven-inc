import React from 'react';

import AppRoutes from './app.routes';
import {StatusBar} from 'react-native';
const Routes: React.FC = () => {

  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFDFD'}/>
    <AppRoutes />
    </>
  )
};

export default Routes;
