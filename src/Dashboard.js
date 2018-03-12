import React, { Component } from 'react';
import SelectForm from './forms/select.form.js';
import Top5 from './forms/top.5.js';
import ActiveForms from './forms/active.forms.js';
import NotificationCenter from './notification.center.js';
import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
        <div id="topicTemplate" className="template container gov-container">
            <div className="row">
                <div id="main-content" role="main" className="contentPageMainColumn col-sm-12">   
                    <div className="col-sm-8">
                        <ActiveForms />
                        <SelectForm />
                    </div>
                    <div className="col-sm-4">
                        <NotificationCenter />
                        <Top5 />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;
