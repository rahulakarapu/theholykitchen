import React from 'react';
import '../styles/App.css';
import Header from './Header.js'
import Container from './Container.js'
import Footer from './Footer.js'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "restaurantName": "The Holy Kitchen",
      "restaurantInfo": {
        "address": [
          {
            "id": "addressLine1",
            "value": "Sri Krishna Nagar, Yousufguda"
          },
          {
            "id": "addressLine2",
            "value": "Near Metro Station"
          },
          {
            "id": "addressLine2",
            "value": "Hyderabad"
          }
        ],
        "timings": [
          {
            "id": "weekdays",
            "value": "Mon - Fri: 11am - 10pm"
          },
          {
            "id": "weekends",
            "value": "Sat - Sun: 11am - 12am"
          }
        ],
        "mobileNumber": "+91 888 577 3637",
        "email": "holykitchenindia@gmail.com",
        "facebook": "https://www.facebook.com/theholykitchen/",
        "instagram": "https://instagram.com/the.holykitchen?igshid=14r37cffbelj0"
      }
    }
  }
  
  render() {
    return (
      <div id="wrapper">
        <header className="AppHeader">
          <Header />
        </header>
        <div className="AppContainer">
          <Container />
        </div>
        <footer className="AppFooter">
          <Footer footerInfo={this.state.restaurantInfo}/>
        </footer>
      </div>
    );
  }
}

export default App;