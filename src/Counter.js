import React, {Component} from "react";
import './Counter.css';

import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Step from "./Step";

class Counter extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: 0
        };
    }

    changeValue = (action) => {


        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

        
            if (action === 'add-x') {
                currentCounterValue += Number(this.state.stepValue);
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });

        });
        
    }

    changeStep = (value) => {

        this.setState({stepValue: value});

    }

  
    
    render() {

        return (
            <div className="counter">
                Licznik:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                <Step stepMethod={this.changeStep} />
            </div>
        );
    }
}

export default Counter;


