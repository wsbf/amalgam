import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

interface ServicesProps { baseUrl: string; }

export default class Services extends React.Component<ServicesProps> {
  public render() {
    return (
      <Router ref="router" basename={this.props.baseUrl}>
        <Switch>
        </Switch>
      </Router>
    );
  }
}
