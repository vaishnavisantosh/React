import React , {Component} from 'react';
import Person from '../person/Person';
import '../App.css';

class App extends Component{
  state={
    persons:[
      {name:"vaishnavi", age:21},
      {name:"madhvi", age:23},
      {name:"sonu", age:21},
      {name:"bhagya", age:22}
    ]
  }

  buttonClickHandler = (newName) => {
     
    this.setState({
      persons:[
      {name:newName, age:21},
      {name:"madhvi", age:23},
      {name:"sonu", age:21},
      {name:"bhagya", age:22}
    ]
    });
  }

render(){
  return (
    <div className="App"> 
     <h1>Hello!!!!!!!!!!!!!!</h1>
     <button onClick={this.buttonClickHandler.bind(this,'vaishu!!!!')}>click Me </button>
     
     <Person
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={this.buttonClickHandler.bind(this,'vaishuuuuuuuuuuuuuuu')}>
      Hobbies :Designing,dancing
     </Person>

     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
     <Person name={this.state.persons[3].name} age={this.state.persons[3].age}></Person>
    </div>
  );  
 
  }
}
export default App;
