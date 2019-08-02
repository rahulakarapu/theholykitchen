import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="flexColumn followUs">
                <span className="footerTitle">Follow Us</span>
                <div className="socialMedia">
                    <a href={props.footerInfo.facebook}><i className="fa fa-facebook"></i></a>
                    <a href={props.footerInfo.instagram}><i className="fa fa-instagram"></i></a>
                </div>
            </div>
            <div className="flexColumn contactUs">
                <span className="footerTitle">Contact Us</span>
                <span><i className="fa fa-phone"></i>{props.footerInfo.mobileNumber}</span>
                <span><i className="fa fa-envelope"></i>{props.footerInfo.email}</span>
            </div>
            <div style={{'margin': 'auto'}}></div>
            <div className="signature flexColumn">
                <span>Site developed and maintained by Rahul & Ravi.</span>
            </div>
        </div>
    )
}

export default Footer;