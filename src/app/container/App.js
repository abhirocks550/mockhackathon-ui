/*import React from 'react';
import { connect } from 'react-redux';
import AddCourse from './AddCourse';
import NavBar from '../components/NavigationBar/NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import Header from '../components/NavigationBar/Header';
import NavBar from '../components/NavigationBar/NavigationBar';
import {browserHistory} from 'react-router';

class App extends React.Component {

  render() {
    var Child;
    
    var currentRoute = this.props.location.pathname;
    if (currentRoute == '/Login' || currentRoute == '/NewUser') {
        Child = Header;
    } else {
        Child = NavBar;
    }
    
    return (
      <div className="container">
        <Child />
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
    router: React.PropTypes.object,
    location: React.PropTypes.object
}

export default App;