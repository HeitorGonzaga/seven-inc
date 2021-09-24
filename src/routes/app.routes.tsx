import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/dashboard";
import Employee from "../pages/employee";


const App = createNativeStackNavigator();
const AppRoutes: React.FC = () => {
  return (
      <App.Navigator initialRouteName="Dashboard" screenOptions={{headerShown:false}}>
        <App.Screen name="Dashboard" component={Dashboard} />
        <App.Screen name="Employee" component={Employee} />
      </App.Navigator>
  );
};

export default AppRoutes;
