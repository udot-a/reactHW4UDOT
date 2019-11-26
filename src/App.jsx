import React from 'react';
import './main.css';
import Button from "./Button";
import Timer from "./Timer";


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
                {this.state.isToggle ? '00:00:00' : <Timer/>}
            </div>
        );
    }
}

export default App;
