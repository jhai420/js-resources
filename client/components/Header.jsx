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
          <span className="nav-icon" onClick={showModal}><a href="#"  title="Add Resource"><FontAwesomeIcon icon="plus-circle" size="2x"/></a></span>
          <span className="nav-icon"><a href="https://www.linkedin.com/in/jenny-hai-74130455/"  title="Linkedin" target="blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/></a></span>
          <span className="nav-icon"><a href="https://github.com/jhai420/js-resources"  title="Github" target="blank"><FontAwesomeIcon icon={["fab", "github"]} size="2x"/></a></span>
        </div>
      </nav>
    )
  }
}

export default Header