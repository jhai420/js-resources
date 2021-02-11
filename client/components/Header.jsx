import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

  render() {
    const { showModal } = this.props;

    return(
      <nav className="menu">
        <header>
          <h1><a href="/">JS. Resources.</a></h1>
          <p>A quick guide to the best JavaScript stack resources.</p>
        </header>
        <div className="nav-links">
          <span className="nav-icon" onClick={showModal}><a href="#"><FontAwesomeIcon icon="plus" size="2x"/></a></span>
          <span className="nav-icon"><a href="https://www.linkedin.com/in/jenny-hai-74130455/" target="blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/></a></span>
          <span className="nav-icon"><a href="#"><FontAwesomeIcon icon={["fab", "github"]} size="2x"/></a></span>
        </div>
      </nav>
    )
  }
}

export default Header