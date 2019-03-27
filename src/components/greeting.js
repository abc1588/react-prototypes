import React, {Component} from 'react';

class Greeting extends Component {

    constructor(props){
        super(props);
        this.user = {
            name: props.name,
            luckyNumber: this.getLuckyNumber(),
            color: 'cyan'
        }
    }

    getLuckyNumber(){
        return Math.floor(Math.random()*1000);
    }

    render(){
        console.log('inside Greeting render function...');
        console.log('Greeting Props: ', this.props);

        return (
            <div className="container">

                <h1>Welcome {this.user.name}</h1>

                <h2 className="text-muted">Your lucky number is {this.user.luckyNumber}</h2>

            </div>
        )
    }
}

export default Greeting;