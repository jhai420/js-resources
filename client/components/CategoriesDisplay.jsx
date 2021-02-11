import React, { Component } from 'react';

class Categories extends Component {

  render() {
    return(
      <div className="categories">
        <div className="firstrow-categories">
          <div className="circle"><input type="image" id="Vanilla JS" onClick={this.props.filterCategory} src="../assets/images/vanillajs.png" /></div>
          <div className="circle"><input type="image" id="OOP" onClick={this.props.filterCategory} src="../assets/images/oop.png" /></div>
          <div className="circle"><input type="image" id="Data Structures & Algorithms" onClick={this.props.filterCategory} src="../assets/images/algo.png" /></div>
          <div className="circle"><input type="image" id="DOM" onClick={this.props.filterCategory} src="../assets/images/dom.png" /></div>
          <div className="circle"><input type="image" id="NodeJS" onClick={this.props.filterCategory} src="../assets/images/node.png" /></div>
        </div>
        <div className="secondrow-categories">
          <div className="circle"><input type="image" id="Databases" onClick={this.props.filterCategory} src="../assets/images/databases.png" /></div>
          <div className="circle"><input type="image" id="UI/UX" onClick={this.props.filterCategory} src="../assets/images/uiux.png" /></div>
          <div className="circle"><input type="image" id="React" onClick={this.props.filterCategory} src="../assets/images/react.png" /></div>
          <div className="circle"><input type="image" id="Testing" onClick={this.props.filterCategory} src="../assets/images/testing.png" /></div>
          <div className="circle"><input type="image" id="Environment" onClick={this.props.filterCategory} src="../assets/images/env.png" /></div>
        </div>
      </div>
    )
  }
}

export default Categories