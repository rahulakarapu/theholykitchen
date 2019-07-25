import React from 'react';
import { Button } from 'react-bootstrap';
import Background from './RestaurantBG1.jpg';

//var App = require('./App');

var oContainer = {
    backgroundImage: `url(${Background})`
};
  
class Container extends React.Component {
    render() {
        return (
            <div className="containerLayout">
                <section className="bgImage" style={ oContainer }>
                        <div className= "containerFlex">
                            
                                <div>
                                    <span className="containerTitle">CHINESE & THAI CUISINE</span>
                                </div>
                                        
                            <div className="containerActionButtons">
                                <Button variant="outline-primary">See Menu</Button>
                                <Button variant="outline-primary">Order Online</Button>
                                <Button variant="outline-primary">Reservations</Button>
                            </div>
                        </div>
                </section>
            </div>
        
        );
    }
}

export default Container;