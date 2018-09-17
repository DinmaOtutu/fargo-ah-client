import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import Home from '../views/Home';
import Login from '../views/Login';
import Editor from '../components/Editor';
import CreateArticle from '../views/CreateArticle';

const Routes = () => ((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/category/:title" component={Login} />
      <Route path="/createarticle" component={CreateArticle} />
      <Route path="/editor" component={Editor} />
    </Switch>
  </BrowserRouter>
));
export default Routes;
