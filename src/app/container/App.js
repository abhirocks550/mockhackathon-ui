import React from 'react';
import { User } from '../components/User';
import { Main } from '../components/Main';
import { connect } from 'react-redux';
import { setName } from '../actions/userActions';
class App extends React.Component {

  changeName =  (name) => {
      this.props.setName(name);
    }

  render() {
    return (
        <div className="container">
                <Main changeUsername={(name) => this.changeName(name)} />
                <User username={this.props.user.name} />
            </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
      };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => { dispatch(setName(name)); },
      };
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
