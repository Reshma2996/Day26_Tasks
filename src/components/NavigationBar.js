import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="navigation">
      <NavLink exact to="/" activeClassName="active">All</NavLink>
      <NavLink to="/full-stack-development" activeClassName="active">Full Stack Development</NavLink>
      <NavLink to="/data-science" activeClassName="active">Data Science</NavLink>
      <NavLink to="/cyber-security" activeClassName="active">Cyber Security</NavLink>
      <NavLink to="/career" activeClassName="active">Career</NavLink>
    </nav>
  );
}

export default NavigationBar;
