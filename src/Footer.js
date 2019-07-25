import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                 <div className="flexColumn">
                    <span className="footerLogo">HK</span>
                </div>
                <div className="verticalLine flexColumn"></div>
                <div className="address flexColumn">
                    <span className="footerTitle">Address</span>
                    <span>Sri Krishna Nagar, Yousufguda</span>
                    <span>Near Metro Station</span>
                    <span>Hyderabad</span>
                </div>
                <div className="timings flexColumn">
                    <span className="footerTitle">Open Hours</span>
                    <span>Mon - Fri: 11am - 10pm</span>
                    <span>​​Sat - Sun: 11am - 12am</span>
                </div>
                <div className="contact flexColumn">
                    <span className="footerTitle">Contact</span>
                    <span>+91 888 577 3637</span>
                    <span>holykitchenindia@gmail.com</span>
                </div>
                <div className="follow flexColumn">
                    <span className="footerTitle">Follow Us</span>
                    <div className="socialMedia">
                        <a href="https://www.facebook.com/theholykitchen/" className="fa fa-facebook"></a>
                        <a href="https://instagram.com/the.holykitchen?igshid=14r37cffbelj0" className="fa fa-instagram"></a>
                    </div>
                </div>
                <div className="signature flexColumn">
                    <span>Site developed and maintained by <a href="https://www.linkedin.com/in/rahul-akarapu-aa76a087/">Rahul Akarapu</a>.</span>
                </div>
            </div>
        );
    }
}

export default Footer;