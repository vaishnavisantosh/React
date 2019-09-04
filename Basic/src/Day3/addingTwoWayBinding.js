import React ,{Component} from 'react';
import Person from '../person/Person';
import '../App.css';

class Binding extends Component{

    state={
        persons:[
            {
                name:''
            }
        ]
    }

    onNameChangeHandler =(event) =>{
        this.setState({
            persons:[
                {
                    name:event.target.value
                }
            ]
        });

    }

    render(){
        return(
            <div className="App">
                <Person 
                name={this.state.persons[0].name}
                change={this.onNameChangeHandler}/>
            </div>
        );
    }
}

export default Binding;
