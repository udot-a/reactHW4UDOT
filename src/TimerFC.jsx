import React from 'react';
import './main.css';

export default () => {
    let interval = null
    let [timer, setTimer] = React.useState("00:00")
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

    React.useEffect(() => {
            let counter = 0;
            // let temp = interval
             interval = setTimeout(function tick() {
                counter++;
                clock.min = Math.trunc(counter / 60)
                clock.sec = counter % 60
                setTimer(clock.getTime())
                interval = setTimeout(tick, 1000);
            }, 1000);
            console.log('component did mount');
            return () => {
                console.log('component will unmount')
                setTimer('00:00')
                clearTimeout(interval)
                interval = null
            };
        }, []
    )

        return (
            <div className="timer" onClick={()=>{setTimer(timer+1)}}>
                {timer}
            </div>
        );

}
