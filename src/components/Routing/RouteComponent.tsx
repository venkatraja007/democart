import * as React from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import { Routes } from "./RouteConfig"; 
import { Grid } from '@material-ui/core';
import Header from "./../Common/Header/Header";
import Footer from "./../Common/Footer/Footer";
export const RouteComponent = (props: IProps) => {
  const routes = Routes;
  return (
    <Grid container>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route
            exact={true}
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}
        <Redirect from="/*" to="/ListPage" />
      </Switch>
      <Footer/>
    </Grid>
  );
};
interface IProps {
  [keyname: string]: any;
}

export default RouteComponent;
