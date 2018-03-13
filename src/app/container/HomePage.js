import React from 'react';
import { InputBox } from '../common/InputGroup/InputBox';
import { bindActionCreators } from 'redux';
import * as addCourseActions from '../actions/addCourseActions';
import { connect } from 'react-redux';
import { updateInput } from '../actions/addCourseActions';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        errors: {},
      };
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <ul>
              <h3>Student Login</h3>
              <li><p>Login will give the access of courses..</p></li>
              <li><p>Courses history which are recently browsing..</p></li>
              <li><p>Add Courses to the portal..</p></li>
              <li><p>Subscribe the coures</p></li>
              </ul>
            </div>
            <div className="col-sm-4">
            <ul>
              <h3>New User/Student Registatrion</h3>
              <li><p>Add skillset of the new user to access the interested courses</p></li>
              <li><p>Helps us to understand the user interests</p></li>
              <li><p>Assign the course material based on skillset</p></li>
            </ul>
            </div>
            <div className="col-sm-4">
            <ul>
              <h3>Add/Display List of Courses</h3> 
              <li><p>Add a course..</p></li>
              <li><p>Remove a course..</p></li>
              <li><p>List of courses..</p></li>
              <li><p>Filter courses..</p></li>
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
