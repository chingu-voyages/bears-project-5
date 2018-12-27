import React, { Component } from 'react';
import { addFood} from '../queries/queries';
import { graphql} from 'react-apollo';

class AddFood extends Component {

    constructor(props){
        super(props);
            this.state = {
                name: "",
                kcal: ""   
            }
    }
//functions

submitForm(e){
    e.preventDefault();
    this.props.addFood({
        variables:{
            name: this.state.name,
            kcal: this.state.kcal
            }
        });
    
    
}
    render(){
                
        return(
            <div>
                <p>form to create new food</p>
                <form id="add-food" onSubmit={this.submitForm.bind(this)}>
                    <div className="field">
                        <label>Name:</label>
                        <input type="text" name="name" onChange={(e)=>{
                            this.setState({
                                name: e.target.value                                
                            });
                        }}/>
                    </div>
                    <div className="field">
                        <label>Kcal:</label>
                        <input type="text" name="kcal" onChange={(e) =>{
                            this.setState({
                                kcal: e.target.value
                            });
                        }

                        }/>
                    </div>
                    <button>+</button>
                </form>
            </div>
        )
    }

}

export default graphql(addFood)(AddFood);