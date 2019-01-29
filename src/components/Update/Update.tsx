import * as React from 'react';
import '../AddButtonEvent/addButton.css';
import { bindActionCreators } from 'redux';
import { edit } from '../../actions/EventAction'
import { connect } from 'react-redux';
import { adjustDatepickerTime } from '../../Constant/Constant'

interface IProps {
    currentDate: any,
    edit?(event: any, updateID: any): any,
    history: any
}

class Update extends React.Component<IProps, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            "data": props.location.params.event
        }
    }
    updateState = (event: any) => {
        this.state.data[event.target.name] = event.target.value;
        this.setState({ "data": this.state.data })
    }
    close = () => {
        this.props.history.push('/');
    }
    render() {
        const handleEvent = (event: any) => {
            let updateID = this.state.data.id
            this.props.edit(event, updateID)
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
                            <input className="input" name="title" defaultValue={this.state.data.title} onChange={(e) => this.updateState(e)} placeholder="Enter Meeting" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Start Time</label>
                        </div>
                        <div className="col-75">
                            <input className="input" name="startTime" defaultValue={adjustDatepickerTime(this.state.data.date)} onChange={(e) => this.updateState(e)} type="datetime-local" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>End Time</label>
                        </div>
                        <div className="col-75">
                            <input className="input" name="endTime" defaultValue={adjustDatepickerTime(this.state.data.date)} onChange={(e) => this.updateState(e)} type="datetime-local" />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" className="submit-button" />
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
    return bindActionCreators({ edit: edit }, dispatch)
}



export default connect(mapStateToProps, matchDispatchToProps)(Update)