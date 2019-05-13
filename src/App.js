import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Dashboard from './Dashboard.js';
import { Route } from "react-router-dom";
import Form7 from './forms/Form7.js';
import Form2 from './forms/Form2.js';
import Form2Preview from './forms/Form2Preview'
import Form2Proceed from './forms/Form2Proceed'
import Form2Submitted from './forms/Form2Submitted'
import MyDocuments from './forms/MyDocuments.js';
import Notifications from './notifications.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.homePath = (process.env.PUBLIC_URL === "") ? '/' : process.env.PUBLIC_URL;
  }

  render() {
    return (

        <div className="full-height">
          <Header fetch={this.props.fetch}/>
          <Route exact path={this.homePath} component={Dashboard} props={{fetch:this.props.fetch}} />
          <Route path={process.env.PUBLIC_URL + '/form.7.html'} component={Form7} />
          <Route path={process.env.PUBLIC_URL + '/form2'} component={Form2} />
          <Route path={process.env.PUBLIC_URL + '/preview'} component={Form2Preview} />
          <Route path={process.env.PUBLIC_URL + '/proceed'} component={Form2Proceed} />
          <Route path={process.env.PUBLIC_URL + '/submitted'} component={Form2Submitted} />
          <Route path={process.env.PUBLIC_URL + '/my-documents.html'} render={()=><MyDocuments fetch={this.props.fetch}/>} />
          <Route path={process.env.PUBLIC_URL + '/notifications.html'} component={Notifications} />
          <Footer />
        </div>
    );
  }
}

export default App;
