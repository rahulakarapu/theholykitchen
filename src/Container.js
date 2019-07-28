import React from 'react';
import { Button } from 'react-bootstrap';
import Background from './RestaurantBG1.jpg';

//var App = require('./App');

var oContainer = {
    backgroundImage: `url(${Background})`
};
  
class Container extends React.Component {

    makeReservationButton = React.createRef();

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        return (
            <section className="bgImage" style={ oContainer }>
                    <div className= "containerFlex">
                        <div className="containerTitle">
                            <h1>CHINESE & THAI CUISINE</h1>
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