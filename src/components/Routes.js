import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, RentalsSearch, RentalDetails, Trips } from './index';

const Routes = () => {
  return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/rentals" component={RentalsSearch} />
        <Route path="/rentals/:rentalId" component={RentalDetails} />
        <Route path="/trips" component={Trips} />
        <Redirect to="/home" />
      </Switch>
  )
};

export default Routes;
