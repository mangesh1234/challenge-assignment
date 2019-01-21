import * as React from 'react';
import * as moment from 'moment';
import './addButton.css';
import timeData = require('./Time.json');
import { bindActionCreators } from 'redux';
import {add} from '../../actions/EventAction'
import { connect } from 'react-redux';

interface IProps {
	currentDate:any,
    add ? (event:any):any,
    history : any
}

class AddEvent extends React.Component<IProps, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            todayDate: moment(new Date()).format("DD MMM YYYY"),
            timeData: timeData
        }
        // console.log('timeData============', this.state.timeData);
    }

    

    startDate = () => {
        console.log('timeData============', this.state.timeData);
        return (
            // <select></select>
            this.state.timeData.map(function (user: any) {
                console.log('user', user);
               
                <option value={user.id}>{user.value}</option>
            })

        )
    }
    render() {
        const handleEvent = (event:any) =>{
            this.props.add(event)
            this.props.history.push('/');
        }
        return (
            <div className="add-container">
                <form  onSubmit={handleEvent}>
                    <div className="row">
                        <div className="col-25">
                            <label>Meeting</label>
                        </div>
                        <div className="col-75">
                            <input className="input" placeholder="enter" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Date</label>
                        </div>
                        <div className="col-75">
                            <input className="input" type="datetime-local" placeholder="enter" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Start Time</label>
                        </div>
                        <div className="col-75">
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>End Time</label>
                        </div>
                        <div className="col-75">
                            <select>
                               {this.startDate()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" className="submit-button"/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return {
        currentDate:state.events.currentDate
    }
}

const matchDispatchToProps = (dispatch:any)=>{
	return bindActionCreators({add:add},dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(AddEvent)