import React, { Component } from 'react';
import { addFood, getFoodQuery} from '../queries/queries';
import { graphql} from 'react-apollo';
import Calories from './Calories';

class AddFood extends Component {

    constructor(props){
        super(props);
            this.state = {
                name: "",
                kcal: "",
                totalKcal: 0
            }
    }
//functions




submitForm(e){
    let value = parseInt(this.state.kcal);
    var newValue = value + (this.state.totalKcal);
    

    console.log(e)
    e.preventDefault();
    this.props.addFood({
        variables:{
            name: this.state.name,
            kcal: this.state.kcal
            },
            refetchQueries: [{query: getFoodQuery}]
        });   
        this.setState({
            totalKcal: newValue
        }) 
}



    render(){
        return(
            
            <div>
                <Calories totalKcal={this.state.totalKcal}/>

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

export default graphql(addFood, {
    name: "addFood"
})(AddFood);