import * as React from 'react';
import * as moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { edit, remove } from '../actions/EventAction';
import { Link } from 'react-router-dom';
import timeSlot = require('../timeSlot.json');

interface IProps {
    currentDate: any,
    edit?(event: any): any
    remove?(event: any): any
    event: any
}

class CalenderEvent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props)
        this.state = { timeSlot: timeSlot }
    }

    timeSlot = () => {
        return this.state.timeSlot.map((time: any) => {
            return (
                <div className="main-div">
                    <span>{time}</span>
                </div>
            )
        })
    }
    renderEvents = () => {

        let currentDate = moment(this.props.currentDate).format("DD MMM YYYY");
        let eventsList = (this.props.event || []).filter((items: any) => currentDate == items.date);

        return (eventsList || []).map((item: any) => {
            let startTime = item.startTime.split(':');
            let endTime = item.endTime.split(':');
            let top = (parseInt(startTime[0]) - 1) * (40) + 170;
            let height = ((parseInt(endTime[0]) - parseInt(startTime[0])) + 1) * 40;
            let styleValue = {
                "top": top,
                "height": height,
            }
            return (
                <table className="days" style={styleValue}>
                    <tr>
                        <td className="empty row-background-color">
                            <div className="row">
                                <div className="table-column-left">
                                    <span>{item.title}</span>
                                </div>
                                <div className="table-column-right">
                                    <div className="btn-group">
                                        <Link to={{ pathname: '/edit-event', params: { event: item } }}> <button onClick={this.props.edit}>edit</button></Link>
                                        <button onClick={this.props.remove} data-val={item.id}>delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    {item.startTime} -- {item.endTime}{top}--{startTime}--{endTime}
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            )
        });
    }

    render() {
        return (
            <div>
                {this.timeSlot()}
                {this.renderEvents()}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        currentDate: state.events.currentDate,
        event: state.events.events
    }
}

const matchDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ edit: edit, remove: remove }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CalenderEvent)



