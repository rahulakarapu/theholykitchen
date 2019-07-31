import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="flexColumn">
                <span className="footerLogo">HK</span>
            </div>
            <div className="verticalLine flexColumn"></div>
            <div className="flexColumn">
                <span className="footerTitle">Address</span>
                {props.footerInfo.address.map((item) => {
                    return (<span key={item.id}>{item.value}</span>);
                })}
            </div>
            <div className="flexColumn">
                <span className="footerTitle">Open Hours</span>
                {props.footerInfo.timings.map((item) => {
                    return (<span key={item.id}>{item.value}</span>);
                })}
            </div>
            <div className="flexColumn">
                <span className="footerTitle">Contact</span>
                <span>{props.footerInfo.mobileNumber}</span>
                <span>{props.footerInfo.email}</span>
            </div>
            <div className="flexColumn">
                <span className="footerTitle">Follow Us</span>
                <div className="socialMedia">
                    <a href={props.footerInfo.facebook} className="fa fa-facebook"></a>
                    <a href={props.footerInfo.instagram} className="fa fa-instagram"></a>
                </div>
            </div>
            <div className="signature flexColumn">
                <span>Site developed and maintained by Rahul & Ravi.</span>
            </div>
        </div>
    )
}

export default Footer;