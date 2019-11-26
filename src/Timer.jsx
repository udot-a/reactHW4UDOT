import React from 'react';
import './main.css';
import snowflake from './snowflake.png'

export default class extends React.PureComponent {
    interval = null
    state = {
        timer: 0
    }
    componentDidMount() {
        this.interval=setInterval(() => this.setState({timer: this.state.timer+1}), 1000)
        console.log('component did mount')
    }
    componentWillUnmount() {
        console.log('component will unmount')
        clearInterval(this.interval)
        this.setState({timer:0})
        this.interval = null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component UPDATE')
    }
    render() {
        return (
            <div className="timer">
                <p><img src={snowflake} alt="snowflake" width='30px'/>Cold time:</p>
                <p>{this.state.timer}</p>
            </div>
        );
    }
}

