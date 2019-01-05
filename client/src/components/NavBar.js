import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
export function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink
        href="#"
        to="/"
        activeClassName="NavBar__Item--Active"
        className="NavBar__Item"
      >
        Home
      </NavLink>
      <NavLink
        href="#"
        to="/signin"
        activeClassName="NavBar__Item--Active"
        className="NavBar__Item"
      >
        Sign In
      </NavLink>
      <NavLink
        href="#"
        exact
        to="/signup"
        activeClassName="NavBar__Item--Active"
        className="NavBar__Item"
      >
        Sign Up
      </NavLink>
    </nav>
  )
}
