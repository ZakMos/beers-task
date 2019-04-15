import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import Details from './views/Details';
import NotFound from './views/NotFound';
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props)
    this.state={};
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <main>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/details" component={Details} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
