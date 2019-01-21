import * as React from 'react';
import AddTodo from '../containers/AddTodo'
// import Todos from '../containers/Todos'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                {/* <Todos /> */}
            </div>
        )
    }
}