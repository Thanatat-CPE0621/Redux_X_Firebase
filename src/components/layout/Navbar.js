import React from "react";
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLinks'
import SignedOutLink from './SignedOutLink'


const Navbar = () => {
  return (
    <nav classname="nav.nav.wrapper.gret.darken-3">
      <div className="container" >
        <Link to='/' classname="brand-logo">MarioPlan</Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
};

export default Navbar;