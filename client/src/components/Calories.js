import React, { Component } from 'react';


class Calories extends Component {

    render(){
        return(
            //counting calories left
            
            <div><p>Calories left: {2000 - this.props.totalKcal}</p></div>
           
        )
    }

}

export default Calories;