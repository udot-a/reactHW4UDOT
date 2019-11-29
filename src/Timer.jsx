import React from 'react';
import './main.css';

export default class extends React.PureComponent {

    interval = null
    state = {
        timer: '00:00'
    }

    componentDidMount() {
        const clock = {
            min: 0,
            sec: 0,
            getTime() {
                let result = ''
                this.min / 10 >= 1 ? result += this.min.toString() + ':' :
                    result += '0' + this.min.toString() + ':'
                this.sec / 10 >= 1 ? result += this.sec.toString() :
                    result += '0' + this.sec.toString()
                return result
            }
        }
        let counter = 0;
        this.interval = setTimeout(function tick() {
            counter++;
            clock.min = Math.trunc(counter / 60)
            clock.sec = counter % 60
            this.setState(() => ({timer: clock.getTime()}))
            this.interval = setTimeout(tick.bind(this), 1000); // (*)
        }.bind(this), 1000)
        console.log('component did mount')
    }

    componentWillUnmount() {
        console.log('component will unmount')
        clearTimeout(this.interval)
        this.setState({timer: '00:00'})
        this.interval = null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component UPDATE')
    }
    componentDidCatch(error, errorInfo) {
        console.log('Component did Catch', error, errorInfo)
    }

    render() {
        console.log('Component is render now')
        return (
            <div className="timer">
                {this.state.timer}
            </div>
        );
    }
}

