import * as React from 'react';
import * as moment from 'moment';
import './addButton.css';
import timeData = require('./Time.json');
import { bindActionCreators } from 'redux';
import { add } from '../../actions/EventAction'
import { connect } from 'react-redux';

interface IProps {
    currentDate: any,
    add?(event: any): any,
    history: any
}

class AddEvent extends React.Component<IProps, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            todayDate: moment(new Date()).format("DD MMM YYYY"),
            timeData: timeData
        }
    }

    close = () => {
        this.props.history.push('/');
    }

    render() {
        const handleEvent = (event: any) => {
            this.props.add(event)
            this.props.history.push('/');
        }
        return (
            <div className="add-container">
                <form onSubmit={handleEvent}>
                    <div className="row">
                        <div className="col-25">
                            <label>Meeting</label>
                        </div>
                        <div className="col-75">
                            <input className="input" name="title" placeholder="Enter Meeting" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Start Time</label>
                        </div>
                        <div className="col-75">
                            <input className="input" name="startTime" type="datetime-local" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>End Time</label>
                        </div>
                        <div className="col-75">
                            <input className="input" name="endTime" type="datetime-local" />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit"/>
                        <button className="submit-button" onClick={this.close}>Close</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        currentDate: state.events.currentDate
    }
}

const matchDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ add: add }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(AddEvent)