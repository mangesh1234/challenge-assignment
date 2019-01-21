import * as React from 'react'
import { FormEvent } from 'react';
import calenderData = require('../calender-data.json');
import CalenderEvent from "./Calender-Event";
import CalenderHeader from './Calender-Header';


interface Props {
    handleSubmit: (value: string) => void
}
interface State {
    value: any[]
}

export default class AddTodoForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { value: calenderData }
        // console.log('calenderData', JSON.stringify(calenderData));
        // Value is empty by default
        // this._updateValue = this._updateValue.bind(this)
        // this._handleSubmit = this._handleSubmit.bind(this)
    }

    updateValue = (value: any) => {
        this.setState({ value })
    }

    handleSubmit = (e: FormEvent<any>) => {
        e.preventDefault()
        // if (!this.state.value.trim()) {
        //     return
        // }

        // this.props.handleSubmit(this.state)
        // this.setState({ value:calenderData})

    }

    render() {
        // const { value } = this.state.value
        const { updateValue, handleSubmit } = this
        return (
            <div className="container">
                <h1>React Calendar</h1>
                <CalenderHeader />
                <CalenderEvent />


                {/* {(this.state.value || []).map((element: any, index: any) =>
                            <li>{element.first_name}</li>

                        )} */}

            </div>
        )
    }
}