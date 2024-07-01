import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import fb from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
// const Footer = () => {
//     return (
//         <footer className="footer section__padding bg__dark">
//             <div className="container">
//                 <div className="footer__content grid text__light text__center">
//                     <div className="footer__content--item">
//                         <a href = "/" className="footer__navlink">Dev.Point Design, Inc.</a>
//                         <p className="para__text">&copy; 2024 Dev. Point. All rights reserved. Designed by BM Production.</p>
//                     </div>

//                     <div className="footer__content--item">
//                         <a href = "mailto:someone@gmail.com">someone@gmail.com</a>
//                         <span>+44 986 689 009</span>
//                     </div>

//                     <div className="footer__content--item">
//                         <h3 className="footer__title">Projects</h3>
//                         <ul className="footer__links">
//                             <li><Link to='/'  className="nav__link text__upper fw__6
//                                 text__light ">Domov</Link></li>
//                         </ul>
//                     </div>

//                     <div className="footer__content--item">
//                         <h3 className="footer__title">Social LInks</h3>
//                         <ul className="footer__links">
//                             <li><a href = "/">Facebook</a></li>
//                             <li><a href = "/">Twitter</a></li>
//                             <li><a href = "/">Instagram</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

/*footer 2.0*/

const Footer = () => {
    return(
        <div className="footer bg__dark">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>Soul Bikes</h4>
                        <Link to="/" className="a">Domov</Link>
                        <Link to="/about" className="a">O nas</Link>
                        <Link to="/gallery" className="a">Galerija</Link>
                        <Link to="/buy" className="a">Nakup</Link>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Contact</h4>
                        <p>Email: info@soul-bikes.com</p>
                        <p>Tel: + 386 41 234 684</p>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Soul adventures</h4>
                        <a href="https://www.soul-adventures.si">
                            <p>Spletna stran</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Kmalu na</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={linkedin} alt=""/></p>
                            <p><img src={instagram} alt=""/></p>
                            <p><img src={youtube} alt=""/></p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} BMDev. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;