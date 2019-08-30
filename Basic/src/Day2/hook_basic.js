import React,{useState} from 'react';
import '../App.css'
import Person from '../person/Person'

const Hook = props =>
{
    const [oringinalState,updatedState] = useState({
            persons:[
            {name:"vaishu", age:21},
            {name:"madhvi", age:23},
            {name:"sonu", age:21},
            {name:"bhagya", age:22}
          ]
        }
    );

    const buttonClickHandler=()=> {
        updatedState({
         persons:[
         {name:"vaishnavi", age:21},
         {name:"madhvi", age:23},
         {name:"sonu", age:21},
         {name:"bhagya", age:22}
        ]
   
       });
     }




    return (
          <div className="App"> 
           <h1>Hello!!!!!!!!!!!!!!</h1>
           <button onClick={buttonClickHandler}>click Me </button>
           <Person name={oringinalState.persons[0].name} age={oringinalState.persons[0].age}>Hobbies :Designing,dancing</Person>
           <Person name={oringinalState.persons[1].name} age={oringinalState.persons[1].age}></Person>
           <Person name={oringinalState.persons[2].name} age={oringinalState.persons[2].age}></Person>
           <Person name={oringinalState.persons[3].name} age={oringinalState.persons[3].age}></Person>
          </div>
        );  
}
      
export default Hook;