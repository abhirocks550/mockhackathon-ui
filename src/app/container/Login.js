import React from 'react';

//import { InputBox } from '../common/InputGroup/InputBox';
import { bindActionCreators } from 'redux';
//import * as addCourseActions from '../actions/addCourseActions';
import { connect } from 'react-redux';
import { updateLoginInput } from '../actions/handleLoginActions';
import './Login.css';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        errors: {},
    };

    this.goToHome = this.goToHome.bind(this);
  }

  goToHome() {
    this.context.router.push('/');
  }

  render() {
    return (
        <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 loginbox"> 
            <div className="panel panel-info" > 
                <div className="panel-heading"> 
                    <div className="panel-title"> Sign In </div>
                </div> 
                <div className="panel-body panel-pad"> 
                
                    <form id="loginform" className="form-horizontal" role="form" method="POST" onSubmit={() => alert('Login Works')}>
                        
                        <div className="input-group addSpacing" > 
                            <span className="input-group-addon">
                                <i className="glyphicon glyphicon-user"></i>
                            </span> 
                            <input id="login-username" type="text" 
                                className="form-control" 
                                name="username" placeholder="username or email" 
                                onChange={(event) => this.props.updateLoginInput(event)}/> 
                        </div> 
                        <div className="input-group addSpacing"> 
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span> 
                            <input id="login-password" type="password" 
                                className="form-control" 
                                name="password" placeholder="password" 
                                onChange={(event) => this.props.updateLoginInput(event)}/> 
                        </div> 
                        <div className="form-group addSpacing"> 
                            <div className="col-sm-12 controls text-center"> 
                                
                            <button value="register" className="btn btn-primary btn-success pull-center" style={{marginRight: '5px'}}>Submit</button>
                                <button value="cancel" className="btn btn-secondary pull-center" onClick={this.goToHome}>Cancel</button> 
                            </div> 
                        </div> 
                    </form> 
                </div> 
            </div>
        </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}
const mapStateToProps = (_state) => {
    let state = _state;
    return {
        addCourse: state.addCourse,
      };
  };

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators({ updateLoginInput }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
