import React from 'react';
import { InputBox } from '../common/InputGroup/InputBox';
import { bindActionCreators } from 'redux';
// import * as addCourseActions from '../actions/addCourseActions';
import { connect } from 'react-redux';
import { updateInput } from '../actions/addCourseActions';

class AddCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        errors: {},
      };
  }

  render() {
    return (
        <section id='addCourse-section' className='container-fluid'>
                <div className='col-md-6 col-md-offset-3'>
                    <form method="POST" onSubmit={() => alert('Worked')}>
                        <InputBox
                        required="required"
                        value={this.props.addCourse.courseId}
                        label='Course Id:'
                        name='courseId'
                        type='number'
                        placeholder='Enter Course ID'
                        onChange={(event) => this.props.updateInput(event)} />
                        <InputBox
                        required="required"
                        value={this.props.addCourse.courseTitle}
                        label='Course Title:'
                        name='courseTitle'
                        type='text'
                        placeholder='Enter Course Title'
                        onChange={(event) => this.props.updateInput(event)} />
                        <InputBox
                        required="required"
                        value={this.props.addCourse.url}
                        label='URL:'
                        name='courseURL'
                        type='url'
                        placeholder='Enter Course URL'
                        onChange={(event) => this.props.updateInput(event)} />
                        <InputBox
                        required="required"
                        value={this.props.addCourse.topic}
                        label='Topic:'
                        name='topics'
                        type='text'
                        placeholder='Enter Topic'
                        onChange={(event) => this.props.updateInput(event)} />

                        <button className="btn btn-primary" type="submit">save</button>
                    </form>
                </div>
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
