import React, { Component } from 'react';
import Header from '../components/Header';
import CategoriesDisplay from '../components/CategoriesDisplay';
import ResourcesDisplay from '../components/ResourcesDisplay';
import ResourceInsert from '../components/ResourceInsert';

class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      resources: [],
      filteredResources: [],
      show: false,
    }

    this.filterCategory = this.filterCategory.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    
    let modal = document.getElementById('modal-id');
    window.onclick = (event) => {
      if (event.target == modal) {
        this.hideModal();
      }
    }

    this.setState((state) => {
      return {
        ...state,
        show: true
      }
    })

  }

  hideModal() {
    document.getElementById('success-msg').classList.add('hidden-msg');

    this.setState((state) => {
      return {
        ...state,
        show: false
      }
    })
  }

  filterCategory(e) {
    const category = e.target.id

    this.setState((state) => {
      state.filteredResources = state.resources.slice();
      let newResources = state.filteredResources.filter(resource => resource.category === category)
      return { 
        resources: state.resources,
        filteredResources: newResources 
      }
    })
  }

  componentDidMount() {
    fetch('/api/resource')
    .then((data) => data.json())
    .then((data) => data.data.sort((a, b) => b.rating - a.rating))
    .then((resources) => this.setState({ 
      resources,
      filteredResources: resources,
     }))
  }
    
  render() {
    const { filteredResources } = this.state
    //<ResourceInsert hideModal={this.hideModal}/>
    return(
      <div className="container">
        <Header showModal={this.showModal} show={this.state.show}/>
        <ResourceInsert show={this.state.show} handleClose={this.hideModal} >
        <p></p>        
        </ResourceInsert>
        <CategoriesDisplay filterCategory={this.filterCategory}/>
        <ResourcesDisplay resources={filteredResources} />
      </div>
    )
  }
}

export default MainContainer