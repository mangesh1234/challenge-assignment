import { connect } from 'react-redux';
// import EventAction from '../actions/EventAction';
import AddTodoForm from '../components/AddTodoForm';

export default connect<any, any, any>(null, {
  // handleSubmit: any
})(AddTodoForm)