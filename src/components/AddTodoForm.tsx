import * as React from 'react'
import CalenderEvent from "./Calender-Event";
import CalenderHeader from './Calender-Header';

export default class AddTodoForm extends React.Component{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <h1>React Calendar</h1>
                <CalenderHeader />
                <CalenderEvent />
            </div>
        )
    }
}