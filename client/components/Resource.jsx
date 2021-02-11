import React, { Component } from 'react';

class Resource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    }
  }

  render() {
    const { name, type, author, description, link, category, rating, tags } = this.props
    const ratingStyle = { '--rating': rating }
    const userRating = { '--rating': this.state.rating }
    return(
      <div className="resource-container">
        <h3><a href={link} target="blank">{name}</a></h3>
        <p className="author">By {author}</p>
        <p>{description}</p>
        <div className="Stars" style={ratingStyle}><span className="rating-txt">{`${rating.toFixed(1)}`}</span></div>
        <div className="tags">
          <span className="tag">{category}</span><span className="tag"> {type}</span>
        </div>
      </div>
    )
  }
}

export default Resource;