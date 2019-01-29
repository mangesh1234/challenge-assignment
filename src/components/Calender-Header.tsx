import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    render() {
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
					   <button onClick = {this.props.previousDay} data-val={this.props.currentDate}>Prev</button>
					   <button onClick = {this.props.nextDay} data-val={this.props.currentDate}>Next</button>

				    </div>
				</div>

				<div className="column">
				    <h5>{moment(this.props.currentDate).format("DD MMM YYYY")}</h5>
				</div>

				<div className="column">

				    <div className="btn-group">
					<Link to={{pathname:'/add-event'}}> <button>Add</button></Link>
					   
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