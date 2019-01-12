import React, { Component } from 'react';
import { graphql} from 'react-apollo';
import {searchFoodQuery} from '../queries/queries';


class SearchFood extends Component {
    constructor(props){
        super(props);
            this.state = {
                searchText: ""
            }
    }

    executeSearch(e){
        e.preventDefault();
        console.log(this.props)
            
    }
    
  render() {
    
   console.log(this.state.searchText);

    return (
      <div className="Search">

        <h1>hello</h1>
        <form onSubmit={this.executeSearch.bind(this)}>
            <input type="text" onChange={e=>{
                this.setState({
                    searchText: e.target.value
                })
            }}></input>
            <button>Search!</button>
        </form>

      </div>
    )
  }
}

export default graphql(searchFoodQuery)(SearchFood)