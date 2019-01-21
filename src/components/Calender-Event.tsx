import * as React from 'react';
import * as moment from 'moment';
import agendaJson = require('../calender-data.json');
import timeJson = require('../timeSlot.json');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {edit, remove} from '../actions/EventAction'

interface IProps {
	currentDate:any,
	edit ? (event:any):any
    remove ? (event:any):any
    event:any
}

  class CalenderEvent extends React.Component<IProps> {
    constructor(props: any) {
        super(props)
    }

    renderTime = () => {
        
        return (timeJson || []).map((item: any, index: number) => {
            return (
                <tr key={index}>
                    <td className="width20">{item}</td>
                    <td className="width60"></td>
                </tr>
            );
        });
    }
    renderEvents = () => {
        let currentDate = moment(this.props.currentDate).format("DD MMM YYYY");
        
        // console.log("eventsJson==", this.props.events)
        let eventsList = (agendaJson || []).filter((items:any) => currentDate == items.date);
        return (eventsList[0].events || []).map((item: any, index: number) => {
           
            return (
                <div className="days">
                    <table>
                        <tr>
                            <th>test</th>
                            <td className="empty row-background-color">
    
                                <div className="row">
                                    <div className="table-column-left">
                                        <span>{item.title}</span>
                                    </div>
    
                                    <div className="table-column-right">
    
                                        <div className="btn-group">
                                            <button onClick = {this.props.edit} data-val={this.props.currentDate}>edit</button>
                                            <button onClick = {this.props.remove} data-val={this.props.currentDate}>delete</button>
                                        </div>
                                    </div>
    
                                </div>
    
                                <div className="row">
                                    <div className="column">
                                    {item.startTime} -- {item.endTime}
                            </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            )
        });
    }

    render() {
        // const { todos, onTodoClicked } = this.props
        return (
            <div>{this.renderEvents()}</div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return {
        currentDate:state.events.currentDate,
        event:state.events.events
    }
}

const matchDispatchToProps = (dispatch:any)=>{
	return bindActionCreators({edit:edit, remove:remove},dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CalenderEvent)



