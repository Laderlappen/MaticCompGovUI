import React, {Component} from 'react';

import '../layout/components/nav.sass';

import logo from '../images/compound.png';

class Nav extends Component {
  render() {
    return(
      <nav className="nav">
        <a className="nav__brand" href="/">
          <img src={logo} alt="Compound" className="nav__brand-logo" />
          <h1 className="nav__brand-name">
            Compound Governance
          </h1>
        </a>
      </nav>
    );
  }
}

export default Nav;