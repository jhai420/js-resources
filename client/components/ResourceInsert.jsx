import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ResourceInsert extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      type: '',
      author: '',
      description: '',
      link: '',
      category: '',
      rating: '',
      tags: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(state => {
      return {
        ...state,
        [name]: value
      }
    })
  }

   async handleClick (e) {
    e.preventDefault();
    
    for (let field in this.state) {
      if (!this.state[field]) return alert('Missing fields!');
    }
    const { name, type, author, description, link, category, rating, tags } = this.state;
    const tagArray = tags.split(' ');
    const ratingNum = Number(rating);
    const payload = {name, type, author, description, link, category, rating: ratingNum, tags: tagArray};
    //console.log('payload:', payload);

    await fetch('/api/resource/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        //console.log('res:', res);
        document.getElementById('success-msg').classList.remove('hidden-msg');
        this.setState({
          name: '',
          type: '',
          author: '',
          description: '',
          link: '',
          category: '',
          rating: '',
          tags: '',
        })
      })
  }

  redirectHome() {
    console.log('redirect home');
  }

  render() {
    const { handleClose, show, children} = this.props
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return(
      <div id="modal-id" className={showHideClassName}>
      <section className="modal-main">
        { children }
        <div className="close-icon"> <div className="nav-icon" onClick={handleClose}><a href="#"><FontAwesomeIcon icon="times-circle" size="2x"/></a></div></div>
          <h2 className="add-resource-title">Add a Resource:</h2>
          <label>Title:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <label>Type:</label>
            <select id="type" name="type" onChange={this.handleChange}>
              <option value="blank"> </option>
              <option value="Article">Article</option>
              <option value="Video">Video</option>
              <option value="Site">Site</option>
              <option value="Game">Game</option>
              <option value="Courses">Courses</option>
              <option value="Documentation">Documentation</option>
              <option value="Challenges">Challenges</option>
            </select>
          <label>Author/Organization:</label>
            <input type="text" name="author" value={this.state.author} onChange={this.handleChange}></input>
          <label>Description:</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input>
          <label>Link:</label>
            <input type="text" name="link" value={this.state.link} onChange={this.handleChange}></input>
          <label>Category:</label>
            <select id="category" name="category" onChange={this.handleChange}>
              <option value="blank"> </option>
              <option value="Vanilla JS">Vanilla JS</option>
              <option value="DOM">DOM Manipulation</option>
              <option value="OOP">Object-Oriented Programming</option>
              <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
              <option value="NodeJS">NodeJS</option>
              <option value="Databases">Databases</option>
              <option value="UI/UX">UI / UX</option>
              <option value="React">React</option>
              <option value="Testing">Testing</option>
              <option value="Environment">Environment</option>
            </select>
            <label>Rating:</label>
            <input type="radio" id="rating1" name="rating" value="1" onChange={this.handleChange}/>
            <label className="rating-label">1</label>
            <input type="radio" id="rating2" name="rating" value="2" onChange={this.handleChange}/>
            <label className="rating-label">2</label>
            <input type="radio" id="rating3" name="rating" value="3" onChange={this.handleChange}/>
            <label className="rating-label">3</label>
            <input type="radio" id="rating4" name="rating" value="4" onChange={this.handleChange}/>
            <label className="rating-label">4</label>
            <input type="radio" id="rating5" name="rating" value="5" onChange={this.handleChange}/>
            <label className="rating-label">5</label><br/>
            <label>Tags (separate by space):</label>
            <input type="text" name="tags" value={this.state.tags} onChange={this.handleChange}></input><br/>
            <div className="btns-inline">
            <button className="btn-grad" onClick={this.handleClick}>Submit</button><br/>
            <button className="btn-gray" onClick={handleClose}>Close</button><br/>
            </div>
            <p id="success-msg" className="hidden-msg">Thank you for your submission!</p>
        </section>
      </div>
    )
  }
}

export default ResourceInsert