import React from 'react';
import { Button } from 'react-bootstrap';
import Background from '../images/RestaurantBG1.jpg';

//var App = require('./App');

var oContainer = {
    backgroundImage: `url(${Background})`
};
  
class Container extends React.Component {

    makeReservationButton = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            title: 'C'
        };
    }

    componentDidMount() {
        console.log('starting magic...');
        const animInterval = 50;
        const charsToAdd = 'HINESE & THAI CUISINE'.split('');
        for(let i = 0; i < charsToAdd.length; i++) {
            setTimeout(() => {
                this.setState({
                    title: this.state.title + charsToAdd[i]
                });
            }, i*animInterval);
        }
    }

    render() {

        return (
            <section className="bgImage" style={ oContainer }>
                    <div className= "containerFlex">
                        <div className="containerTitle">
                            <h1 className="animTitle">{this.state.title}</h1>
                        </div>  
                        <div className="containerActionButtons">
                            <Button variant="outline-primary">See Menu</Button>
                            <Button variant="outline-primary">Order Online</Button>
                            <Button variant="outline-primary" onClick={this.fnMakeReservation} ref={this.makeReservationButton}>Reservations</Button>
                        </div>
                    </div>
            </section>
        );
    }

    fnMakeReservation = (event) => {
        console.log(this.makeReservationButton);
        //debugger;
    };
}

export default Container;