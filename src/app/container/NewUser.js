import React from 'react';
import { InputBox } from '../common/InputGroup/InputBox';
import { bindActionCreators } from 'redux';
 import * as addCourseActions from '../actions/addCourseActions';
import { connect } from 'react-redux';
import { updateInput } from '../actions/addCourseActions';
import PropTypes from 'prop-types';

class NewUser extends React.Component {
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
        <div id="signupbox" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 signup-box"> 
        <div className="panel panel-info"> 
            <div className="panel-heading"> 
                <div className="panel-title"> New User </div> 
            </div> 
            <div className="panel-body"> 
                <form id="signupform" className="form-horizontal" role="form"> 
                    
                    <div className="form-group"> 
                        <label htmlFor="name" className="col-md-3 control-label">Name</label>
                        <div className="col-md-9"> 
                            <input type="text" className="form-control" name="name" placeholder="Name" /> 
                        </div> 
                     </div> 
                     <div className="form-group"> 
                        <label htmlFor="sapid" className="col-md-3 control-label">SAP ID</label>
                        <div className="col-md-9"> 
                            <input type="text" className="form-control" name="sapid" placeholder="SAP ID" /> 
                        </div> 
                     </div> 
                    <div className="form-group"> 
                        <label htmlFor="email" className="col-md-3 control-label">Email</label>
                        <div className="col-md-9"> 
                            <input type="text" className="form-control" name="email" placeholder="Email Address" /> 
                        </div> 
                     </div> 
                     <div className="form-group"> 
                        <label htmlFor="password" className="col-md-3 control-label">Password</label> 
                        <div className="col-md-9"> 
                            <input type="password" className="form-control" name="password" placeholder="Password" /> 
                        </div> 
                     </div> 
                     <div className="form-group"> 
                        <label htmlFor="skill" className="col-md-3 control-label">Primary skill</label> 
                        <div className="col-md-9"> 
                            <select className="form-control" id="skill">
                                <option value="Java">Java</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Devops">Devops</option>
                                
                            </select>
                        </div> 
                     </div> 
                     <div className="form-group"> 
                        <label htmlFor="band" className="col-md-3 control-label">BAND</label> 
                        <div className="col-md-9"> 
                            <select className="form-control" id="band">
                                <option value="E0">E0</option>
                                <option value="E1">E1</option>
                                <option value="E2">E2</option>
                            </select>
                        </div> 
                     </div> 
                     
                     <div className="form-group"> 
                     
                        <div className="col-md-offset-3 col-md-9"> 
                            <button id="btn-signup" type="button" className="btn btn-info"> <i className="icon-hand-right"></i> &nbsp; Sign Up </button>
                            <button id="btn-cancel" style={{ margin: '5px'}} type="button" className="btn btn-info" onClick={this.goToHome}>
                                 <i className="icon-hand-right"></i> &nbsp; Cancel 
                            </button>
                        </div> 
                     </div> 
                     
                </form> 
            </div> 
        </div> 
    </div>
    );
  }
}
const mapStateToProps = (_state) => {
    let state = _state;
    return {
        addCourse: state.addCourse,
      };
  };

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators({ updateInput }, dispatch);
  };

NewUser.contextTypes = {
  router: PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
