import React from 'react';
import Layout from './hoc/layout';
import { Switch, Route } from 'react-router-dom';
import MainTasks from './Components/maintasks';

const Routes = () => {

  return (
    <Layout>
      <Switch>
        <Route path="/" component={MainTasks} />
      </Switch>
    </Layout>
  );



}

export default Routes;
