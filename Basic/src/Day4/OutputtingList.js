import React ,{Component} from 'react';
import Person from '../person/Person';
import '../App.css';


class OutputtingLists extends Component
{
    state = {
        persons: [
          { id: 'asfa1', name: 'vaishu', age: 21 },
          { id: 'vasdf1', name: 'sonu', age: 21 },
          { id: 'asdf11', name: 'bhagya', age: 22 },
          { id: 'asfa1sfdfg', name: 'madhvi', age: 23 }

        ],
        otherState: 'some other value',
        showPersons: false
      }
    
      nameChangedHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });
    
        const person = {
          ...this.state.persons[personIndex]
        };
    
        // const person = Object.assign({}, this.state.persons[personIndex]);
    
        person.name = event.target.value;
    
        const persons = [...this.state.persons];
        persons[personIndex] = person;
    
        this.setState( {persons: persons} );
      }
    
      deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
      }
    
      togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( { showPersons: !doesShow } );
      }
    
      render () {
        const style = {
          backgroundColor: 'green',
          color:'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
        };
    
        let persons = null;
    
        if ( this.state.showPersons ) {
          persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              })}
            </div>
          );

          style.backgroundColor='red';
        }
    
        return (
          <div className="App">
            
            <button
              style={style}
              onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
          </div>
        );
        
      }
    }

export default OutputtingLists;