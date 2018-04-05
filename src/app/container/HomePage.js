import React from 'react';
import { InputBox } from '../common/InputGroup/InputBox';
import { bindActionCreators } from 'redux';
import * as addCourseActions from '../actions/addCourseActions';
import { connect } from 'react-redux';
import { updateInput } from '../actions/addCourseActions';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        errors: {},
      };
  }

  saveUser() {
    axios.get('https://api.github.com/users/abhirocks550')
    .then(response => console.log(response.data.name));
  }

  render() {
    return (
        <div className="container">
         <form method="post">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <input type="text" className="form-control" id="designation" placeholder="Enter password" name="designation" />
        </div>
        <button type="button" onClick={this.saveUser} className="btn btn-default">Submit</button>
      </form>
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
