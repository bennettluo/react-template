import React, { useEffect } from 'react';
import history from '../utils/history';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import Dashboard from '../containers/Dashboard';

const Routes = () => {
  const pathname = history.location;

  useEffect(() => {
    console.log('route:', pathname.pathname);
  }, [pathname]);

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
