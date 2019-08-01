import React from 'react';
import Background from '../images/RestaurantBG1.jpg';

//var App = require('./App');

var oBgImage = {
    backgroundImage: `url(${Background})`
};
  
class Container extends React.Component {

    makeReservationButton = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            title: 'CHINESE & THAI CUISINE'
        };
    }

    // componentDidMount() {
    //     console.log('starting magic...');
    //     const animInterval = 50;
    //     const charsToAdd = 'HINESE & THAI CUISINE'.split('');
    //     for(let i = 0; i < charsToAdd.length; i++) {
    //         setTimeout(() => {
    //             this.setState({
    //                 title: this.state.title + charsToAdd[i]
    //             });
    //         }, i*animInterval);
    //     }
    // }

    render() {

        return (
            <div className="homectr">
                <div className="homectr__text">
                    <div className= "homectr__text--image" style={ oBgImage }>
                        <div className="homectr__text--image--ctr">
                            <div className="containerActionButtons">
                                <button className="btn--ghost">See Menu</button>
                                <button className="btn--ghost">Order Online</button>
                                <button className="btn--ghost" onClick={this.fnMakeReservation} ref={this.makeReservationButton}>Reservations</button>
                            </div>
                            <div style={{'margin': 'auto'}}></div>
                            <div className="containerTitle">
                                <h1 className="animTitle">{this.state.title}</h1>
                                <h3>Open Hours</h3>
                                <p>Monday to Friday: 11:00 a.m. - 10:00 p.m.</p>
                                <p>Saturday to Sunday: 11:00 a.m. - 12:00 a.m.</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="homectr__map">
                    <iframe title="google_maps_location"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d951.6374809379425!2d78.42574155819703!3d17.433374006169466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f385270f319f169!2sHOLY+KITCHEN!5e0!3m2!1sen!2sin!4v1564596642126!5m2!1sen!2sin"
                        frameborder="0" style={{'border':0}} allowfullscreen>
                    </iframe>
                </div>
            </div>
        );
    }

    fnMakeReservation = (event) => {
        console.log(this.makeReservationButton);
        //debugger;
    };
}

export default Container;