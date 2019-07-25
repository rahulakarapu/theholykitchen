import React from 'react';
import './App.css';
import Header from './Header.js'
import Container from './Container.js'
import Footer from './Footer.js'


class App extends React.Component {
  
  render() {
    return (
      <div id="wrapper">
        <header className="AppHeader">
          {this.renderHeader()}
        </header>
        <div className="AppContainer">
          {this.renderContainer()}
        </div>
        <footer className="AppFooter">
          {this.renderFooter()}
        </footer>
      </div>
    );
  }
  
  renderHeader() {
    return <Header/>;
  }

  renderContainer() {
    return <Container/>;
  }
  renderFooter() {
    return <Footer />
  }

}

export default App;
