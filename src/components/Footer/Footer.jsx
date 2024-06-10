import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href = "#" className="footer__navlink">Dev.Point Design, Inc.</a>
                        <p className="para__text">&copy; 2024 Dev. Point. All rights reserved. Designed by BM Production.</p>
                    </div>

                    <div className="footer__content--item">
                        <a href = "mailto:someone@gmail.com">someone@gmail.com</a>
                        <span>+44 986 689 009</span>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Projects</h3>
                        <ul className="footer__links">
                            <li><Link to='/'  className="nav__link text__upper fw__6
                                text__light ">Domov</Link></li>
                            <li><Link to='/about' className="nav__link text__upper fw__6
                                text__light ">Onas</Link></li>
                            <li><Link to='/gallery' className="nav__link text__upper fw__6
                                text__light ">Galerija</Link></li>
                            <li><Link to='/buy' className="nav__link text__upper fw__6
                                text__light ">Nakup</Link></li>
                            <li><Link to='/trip' className="nav__link text__upper fw__6
          text__light ">Izleti</Link></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Social LInks</h3>
                        <ul className="footer__links">
                            <li><a href = "/">Facebook</a></li>
                            <li><a href = "/">Twitter</a></li>
                            <li><a href = "/">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;