import React, { Component } from 'react';
import { Query} from 'react-apollo';
import  { searchFoodQuery } from '../queries/queries';

class SearchFood extends Component {
    
            state = {
                searchText: "banana"
            }
    
    executeSearch(e){
        e.preventDefault();
      }
    
  render() {   
      
    return (        
        <Query query={searchFoodQuery} variables={{ name: this.state.searchText}}>
                {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      
      console.log(data);   

      return (
        <div>
            {data.food.map((item)=>{
               return  <p>{item}</p>
            })}
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
      );
    }}
      
    </Query>  
    )
  }
}

export default SearchFood;







//export class SearchFood extends Component() {

    //     render(){
    //     return (
    //       <Query query={searchFoodQuery} variables={{ name: "banana"}}>
    //         {({ data, loading, error }) => {
    //           if (loading) return <p>Loading</p>
    //           if (error) return <p>ERROR</p>;
    //           return (
    //             <div>
    //             <h1>hello</h1>
    //             <form onSubmit={this.executeSearch.bind(this)}>
    //                 <input type="text" onChange={e=>{
    //                     this.setState({
    //                         searchText: e.target.value
    //                     })
    //                 }}></input>
    //                 <button>Search!</button>
    //             </form>
    //             </div>
    //           );
    //         }}
    //       </Query>
    //     );
    //     }
    //   };