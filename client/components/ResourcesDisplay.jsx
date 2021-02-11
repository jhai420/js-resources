import React, { Component } from 'react';
import Resource from './Resource';

class ResourcesDisplay extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { resources } = this.props;
    const resourceBoxes = resources.map((resource, index) => {
      return <Resource 
        key={`Resource${index}`}
        name={resource.name} 
        type={resource.type}
        author={resource.author} 
        description={resource.description}
        link={resource.link}
        category={resource.category}
        rating={resource.rating}
        tags={resource.tag}
      />
    })

    return(
      <div className="resources-display">
        { resourceBoxes }
      </div>
    )
  }
}

export default ResourcesDisplay