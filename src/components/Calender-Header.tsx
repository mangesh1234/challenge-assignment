import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {nextDay, previousDay, today} from '../actions/EventAction'

interface IProps {
	currentDate:any,
	nextDay ? (event:any):any
	previousDay ? (event:any):any
	today ? (event:any):any
}


class CalenderHeader extends React.Component<IProps, any>{

    constructor(props: IProps) {
       super(props)
       this.state = { todayDate:moment(this.props.currentDate).format("DD MMM YYYY")}
    }
    
    // getTodaysDate = () =>{
    //     this.setState({ todayDate: this.props.currentDate})
    // }

    // getPreviousDate = () =>{
    //     let previousDay = moment(this.state.todayDate, "DD MMM YYYY").subtract(1, 'days');
    //     this.setState({ todayDate:moment(previousDay).format("DD MMM YYYY")})
    // }

    // getNextDate = () =>{
    //     let nextDay = moment(this.state.todayDate, "DD MMM, YYYY").add(1, 'days');
    //     this.setState({ todayDate:moment(nextDay).format("DD MMM YYYY")})
    // }

    render() {
		let  formData={"title":"","startTimeMin":"","startTimeHr":"","endTimeHr":"","endTimeMin":"","startTime":"","endTime":"","allDay":""};
	   return (
		  <div className="month">
			 <div className="row">
				<div className="column">

				    <div className="btn-group">
					   <button onClick = {this.props.today} data-val={this.props.currentDate}>Today</button>

				    </div>
				</div>

				<div className="column">

				    <div className="btn-group">
					   <button onClick = {this.props.previousDay} data-val={this.props.currentDate}>Pre</button>
					   <button onClick = {this.props.nextDay} data-val={this.props.currentDate}>Nex</button>

				    </div>
				</div>

				<div className="column">
				    <h5>{moment(this.props.currentDate).format("DD MMM YYYY")}</h5>
				</div>

				<div className="column">

				    <div className="btn-group">
					<Link to={{pathname:'/add-event',param:{formData}}}> <button>Add</button></Link>
					   
				    </div>

				</div>
			 </div>
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
	return bindActionCreators({today:today, nextDay:nextDay, previousDay:previousDay},dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CalenderHeader)