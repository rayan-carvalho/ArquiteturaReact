import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import  Home  from '../pages/Home';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};