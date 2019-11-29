import React from 'react';
import './main.css';
import Button from "./Button";
import Timer from "./Timer";
import snowflake from './snowflake.png'
import TimerFC from "./TimerFC";


class App extends React.PureComponent {
    state = {
        isToggle:true
    }
    clickHandler = (toggle) => {
        this.setState({isToggle: !toggle})
    }

    render() {
        return (
            <div className="wrapper">
                <Button clickHandler={this.clickHandler} toggle={this.state.isToggle}/>
                <div className="timer">
                    <p><img src={snowflake} alt="snowflake" width='30px'/>Cold time:</p>
                    {this.state.isToggle ? '00:00' : <TimerFC/>}
                </div>
            </div>
        );
    }
}

export default App;
