import { useState } from "react";
import './hamburger.css';
import *  as ROUTES from '../../constants/routes' ;
import { NavLink } from "react-router-dom";
export const Header = () => {
    const[navOpen,setNavOpen]=useState(false);
    function toggleNavOpen(){
        setNavOpen(!navOpen);
    }
    const closeNav = () => {
        setNavOpen(false);
      };
  return (
    <header className="primary-header">
        <div>
            <img className="logo" src="images/favicon.ico" alt="nasa-logo"/>
        </div>
        <button className={`${navOpen?'nav-open':''} nav-toggle`} aria-controls="primary-navigation" aria-expanded={navOpen?"true":"false"} onClick={toggleNavOpen}>
            <span className={`${navOpen?'nav-open':''} hamburger`}></span>
        </button>
        <nav>
                <ul role="list" className={`${navOpen?'nav-open':''} primary-navigation`} id="primary-navigation">
                    <li className="nav-item">
                        <NavLink to={ROUTES.HOME} onClick={closeNav}>home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={ROUTES.SERVICES} onClick={closeNav}>services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={ROUTES.CONTACT} onClick={closeNav}>contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={ROUTES.ABOUT_US} onClick={closeNav}>about us</NavLink>
                    </li>
                </ul>
        </nav>

        </header>
  )
}
