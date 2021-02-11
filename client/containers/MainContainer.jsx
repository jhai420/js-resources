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
      category: 'All Categories',
    }

    this.filterCategory = this.filterCategory.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.fetchResources = this.fetchResources.bind(this);
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
    let category = e.target.id

    this.setState((state) => {
      state.filteredResources = state.resources.slice();
      let newResources = state.filteredResources.filter(resource => resource.category === category)
      category = category === 'OOP' ? 'Object-Oriented Programming': category;
      category = category === 'DOM' ? 'DOM Manipulation': category;
      return { 
        ...state,
        resources: state.resources,
        filteredResources: newResources,
        category: category === 'OOP' ? 'Object-Oriented Programming': category,
      }
    })
  }

  componentDidMount() {
    this.fetchResources();
  }

  fetchResources() {
    fetch('/api/resource')
    .then((data) => data.json())
    .then((data) => data.data.sort((a, b) => b.rating - a.rating))
    .then((resources) => this.setState((state) => { 
      return {
        ...state,
        resources,
        filteredResources: resources,
        category: 'All Categories',
      }
     }))
  }
    
  render() {
    const { category, show, filteredResources } = this.state
    //<ResourceInsert hideModal={this.hideModal}/>
    return(
      <div className="container">
        <Header showModal={this.showModal} show={show}/>
        <ResourceInsert fetchResources={this.fetchResources} show={show} handleClose={this.hideModal} >
        <p></p>        
        </ResourceInsert>
        <CategoriesDisplay filterCategory={this.filterCategory}/>
        <ResourcesDisplay category={category} resources={filteredResources} />
      </div>
    )
  }
}

export default MainContainer